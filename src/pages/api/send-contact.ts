import type { APIRoute } from "astro";

const TELEGRAM_TOKEN = import.meta.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.TELEGRAM_CHAT_ID;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { name, email, phone, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const telegramMessage = `
📩 New Form Submission
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject}
Message: ${message}
`;

    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      }
    );

    const result = await res.json();

    if (!result.ok) {
      return new Response(JSON.stringify({ error: "Failed to send message" }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
    });
  }
};
