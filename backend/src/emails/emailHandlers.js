const { resendClient } = require("../lib/resend");
const { createWelcomeEmailTemplate } = require("./emailTemplates");

const sendWelcomeEmail = async (email, name, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: "Welcome to Chat-App",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome email sent successfully", data);
};

module.exports = { sendWelcomeEmail };
