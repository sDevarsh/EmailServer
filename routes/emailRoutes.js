// routes/emailRoutes.js
const express = require("express");
const { scheduleJob, sendRightNow } = require("../scheduler");
const Email = require("../models/Email");

const router = express.Router();

router.post("/schedule-email", async (req, res) => {
  try {
    const { recipient, subject, body, scheduleTime, attachments, recurrence } =
      req.body;

    const email = new Email({
      recipient,
      subject,
      body,
      scheduleTime,
      attachments,
      recurrence,
    });
    await email.save();
    let cronTime;

    if (recurrence) {
      switch (recurrence.type) {
        case "daily":
          cronTime = `0 ${recurrence.time.split(":")[1]} ${
            recurrence.time.split(":")[0]
          } * * *`;
          break;
        case "weekly":
          cronTime = `0 ${recurrence.time.split(":")[1]} ${
            recurrence.time.split(":")[0]
          } * * ${recurrence.day}`;
          break;
        case "monthly":
          cronTime = `0 ${recurrence.time.split(":")[1]} ${
            recurrence.time.split(":")[0]
          } ${recurrence.day} * *`;
          break;
        case "quarterly":
          cronTime = `0 ${recurrence.time.split(":")[1]} ${
            recurrence.time.split(":")[0]
          } ${recurrence.day} */3 *`;
          break;
        default:
          return res.status(400).json({ message: "Invalid recurrence type" });
      }
    } else {
      cronTime = scheduleTime;
    }

    scheduleJob({ recipient, subject, body, attachments }, cronTime);

    console.log(recurrence);
    res
      .status(201)
      .json({ id: email._id, message: "Email scheduled successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/scheduled-emails", async (req, res) => {
  try {
    const emails = await Email.find({
      recurrence: { $ne: null },
    });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/scheduled-emails/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const email = await Email.findById(id);
    if (email) {
      res.json(email);
    } else {
      res.status(404).json({ message: "Email not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.post("/send-email-now", async (req, res) => {
  const { recipient, subject, body, attachments } = req.body;

  const emailDetails = { recipient, subject, body, attachments };
  const email = new Email({
    recipient,
    subject,
    body,
    attachments,
  });
  await email.save();
  try {
    await sendRightNow(emailDetails);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});

module.exports = router;

router.delete("/scheduled-emails/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const email = await Email.findByIdAndDelete(id);
    if (email) {
      res.json({ message: "Email cancelled successfully" });
    } else {
      res.status(404).json({ message: "Email not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
