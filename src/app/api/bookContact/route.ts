import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send email to hotel owner
    await transporter.sendMail({
      from: `"Tokyi Guest House" ${process.env.GMAIL_USER}`,
      to: "mr.pujarabikram@gmail.com",
      subject: "New Inquiry Received",
      html: `
      <h3>New Booking Request</h3>
      <p><strong>Guest Email:</strong>${email}</p>
      <p><strong>Name</strong>${name}</p>
      <p><strong>Check-out:</strong>${message}</p>      
      <br>
      <p>You can reply directly to this email to respond to the guest.</p>
      `,
      replyTo: email,
    });

    // 3️⃣ Send confirmation email to user (optional but good UX)
    await transporter.sendMail({
      from: `"Tokyi Guest House" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "✅ We received your message - Tokyo House",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting <strong>Tokyo House</strong>!</p>
        <p>We’ve received your message:</p>
        <blockquote>${message}</blockquote>
        <p>Our team will get back to you shortly.</p>
        <p>Warm regards,<br/>Tokyo House Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending mail:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
