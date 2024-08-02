const cron = require("node-cron");
const nodemailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (emailDetails) => {
  console.log("Sending email");
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.userId,
      pass: process.env.password,
    },
  });

  const mailOptions = {
    from: process.env.email,
    to: emailDetails.recipient,
    subject: emailDetails.subject,
    text: emailDetails.body,
    attachments: emailDetails.attachments || [],
  };

  try {
    await transport.sendMail(mailOptions);
    console.log(`Email sent to ${emailDetails.recipient}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
const scheduleJob = (emailDetails, scheduleTime) => {
  cron.schedule(
    scheduleTime,
    () => {
      sendEmail(emailDetails);
      console.log(`Email sent to ${emailDetails.recipient}`);
    },
    {
      scheduled: true,
      timezone: "Asia/Kolkata",
    }
  );
};

const sendRightNow = async (emailDetails) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.userId,
      pass: process.env.password,
    },
  });

  const mailOptions = {
    from: process.env.email,
    to: emailDetails.recipient,
    subject: emailDetails.subject,
    text: emailDetails.body,
    attachments: emailDetails.attachments || [],
  };
  try {
    await transport.sendMail(mailOptions);
    console.log(`Email sent to ${emailDetails.recipient}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { scheduleJob, sendRightNow };
