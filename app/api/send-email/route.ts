import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'michealrahul2003@gmail.com', 
      replyTo: email,
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ff88; margin-bottom: 20px;">New Message from Your Portfolio</h2>
          
          <div style="background-color: #0f1534; border-left: 4px solid #00ff88; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
            <p style="margin: 0; color: #7c8adb;"><strong>From:</strong> ${name}</p>
            <p style="margin: 10px 0 0 0; color: #7c8adb;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0 0 0; color: #7c8adb;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #0a0e27; padding: 20px; border-radius: 4px; color: #e0e8ff; line-height: 1.6;">
            <h3 style="margin-top: 0; color: #00d9ff;">Message:</h3>
            <p style="white-space: pre-wrap; word-wrap: break-word;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #1e2a5c; color: #7c8adb; font-size: 12px;">
            <p style="margin: 0;">This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    });

    if (data.error) {
      console.error('[v0] Resend error:', data.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
