import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, checkin, checkout, rooms, adults, child } = body;

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
      from: process.env.GMAIL_USER,
      to: "mr.pujarabikram@gmail.com",
      subject: "New Booking Request Received",
      // text: `Booking Details:
      // Email: ${email}
      // Check-in: ${checkin}
      // Check-out: ${checkout}
      // Rooms: ${rooms}, Adults: ${adults}, Child: ${child}`,
      html: `
      <h3>New Booking Request</h3>
      <p><strong>Guest Email:</strong>${email}</p>
      <p><strong>Check-in:</strong>${checkin}</p>
      <p><strong>Check-out:</strong>${checkout}</p>
      <p><strong>Rooms:</strong>${rooms}</p>
      <p><strong>Adults:</strong>${adults}</p>
      <p><strong>Child</strong>:${child}</p>
      <br>
      <p>Please reply to the guest to confirm or provide additional details.</p>
      `,
    });

    // send confirmation mail to guest Confirmation to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Booking Requuest Received- Tokyo Guest House",
      // text: `Dear Guest, we have received your booking from ${checkin} to ${checkout}. Thank you!`,
      html: `<p>Dear Guest,</p>
       <p>Thank you for choosing <strong>Tokyo House</strong>!</p>
       <p>We have received your booking request for the following dates:</p>
       <ul>
           <li><strong>Check-in:</strong> ${checkin}</li>
          <li><strong>Check-out:</strong> ${checkout}</li>
          <li><strong>Rooms:</strong> ${rooms}</li>
          <li><strong>Adults:</strong> ${adults}</li>
          <li><strong>Children:</strong> ${child}</li>
       </ul> 
       <p>Our team will reply to you soon with confirmation or availability details.</p>
       <p>Best regards,<br/>Tokyo Guest House Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending mail:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
