const nodemailer = require("nodemailer");

const handler = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      port: 587,
      auth: {
        user: "rmthomas1998@gmail.com",
        pass: process.env.GOOGLE_PASSWORD,
      },
    });

    const msg = {
      from: "'Portfolio Inquiry' <rmthomas1998@gmail.com>",
      to: "ryanmthomas01@gmail.com",
      subject: "New Inquiry from Portfolio",
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
    };

    try {
      await transporter.sendMail(msg);
      res.send("success");
    } catch {
      res.status(500).send("Server Error");
    }
  } catch {
    res.status(500).send("Server Error");
  }
};

export default handler;
