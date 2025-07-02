import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const description = formData.get('description') as string;
  const screenshot = formData.get('screenshot') as File | null;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hopnhook@gmail.com', // replace with your Gmail address
      pass: 'gdih pmdi efai npdt',  // replace with your Gmail App Password
    },
  });

  const mailOptions: any = {
    from: email || 'noreply@hopnhook.com',
    to: 'hopnhook@gmail.com',
    subject: `Bug Report from ${name || 'Anonymous'}`,
    text: `Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\n\nDescription:\n${description}`,
  };

  if (screenshot && screenshot.size > 0) {
    const buffer = Buffer.from(await screenshot.arrayBuffer());
    mailOptions.attachments = [
      {
        filename: screenshot.name,
        content: buffer,
        contentType: screenshot.type,
      },
    ];
  }

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
} 