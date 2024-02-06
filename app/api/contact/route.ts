import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        message: "Missing required fields",
      },
      {
        status: 400,
      }
    );
  }

  // Send email
  // If you were to actually implement this, you would use something like nodemailer, or connect to a 3rd party service like emailjs or sendgrid.
  // Nodemailer docs: https://nodemailer.com/

  return NextResponse.json(
    {
      message: "Contact form submitted successfully!",
    },
    {
      status: 200,
    }
  );
}
