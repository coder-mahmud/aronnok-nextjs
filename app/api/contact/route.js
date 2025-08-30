// /app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    // 1. Create transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your SMTP host
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 2. Send mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "mahmud.online11@gmail.com", // your receiving email
      subject: "New Contact Form Message",
      html: `
        <h3>Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
