const { Resend } = require("resend");
const dotenv = require("dotenv");
dotenv.config({ path: require("path").resolve(__dirname, "../.env") });

const { RESEND_API_KEY, EMAIL_FROM, EMAIL_FROM_NAME } = process.env;

if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_FROM_NAME) {
  throw new Error("RESEND_API_KEY is not found!");
}

const resendClient = new Resend(RESEND_API_KEY);

const sender = {
  email: EMAIL_FROM,
  name: EMAIL_FROM_NAME,
};

module.exports = {
  resendClient,
  sender,
};
