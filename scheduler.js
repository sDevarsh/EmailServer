const cron = require("node-cron");
const nodemailer = require("nodemailer");

// Email sending function
const sendEmail = async (emailDetails) => {
  console.log("Sending email");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shingaladevarsh1@gmail.com",
      pass: "StarGold@2524",
    },
  });

  const mailOptions = {
    from: "shingaladevarsh1@gmail.com",
    to: emailDetails.recipient,
    subject: emailDetails.subject,
    text: emailDetails.body,
    attachments: emailDetails.attachments || [],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${emailDetails.recipient}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const sendRightNow = async (emailDetails) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shingaladevarsh2@gmail.com",
      pass: "StarGold@123",
    },
  });

  const mailOptions = {
    from: "shingaladevarsh2@gmail.com",
    to: emailDetails.recipient,
    subject: emailDetails.subject,
    text: emailDetails.body,
    attachments: emailDetails.attachments || [],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${emailDetails.recipient}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Job scheduling function
const scheduleJob = (emailDetails, scheduleTime) => {
  cron.schedule(
    scheduleTime,
    () => {
      sendEmail(emailDetails);
    },
    {
      scheduled: true,
      timezone: "Asia/Kolkata",
    }
  );
};

module.exports = { scheduleJob, sendRightNow };
