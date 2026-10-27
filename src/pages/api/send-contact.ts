import type { APIRoute } from "astro";

const escapeTelegramMarkdown = (value: string) =>
  value.replace(/([_*`\[])/g, "\\$1");

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { name, email, phone, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 },
      );
    }

    const telegramToken = process.env.TELEGRAM_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramToken || !telegramChatId) {
      console.error("TELEGRAM_TOKEN or TELEGRAM_CHAT_ID is missing");
      return new Response(JSON.stringify({ error: "Failed to send message" }), {
        status: 500,
      });
    }

    const telegramMessage = `
📩 New Form Submission
Name: ${escapeTelegramMarkdown(String(name))}
Email: ${escapeTelegramMarkdown(String(email))}
Phone: ${escapeTelegramMarkdown(String(phone || "N/A"))}
Subject: ${escapeTelegramMarkdown(String(subject))}
Message: ${escapeTelegramMarkdown(String(message))}
`;

    const res = await fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      },
    );

    const result = await res.json();

    if (!result.ok) {
      console.error("Telegram sendMessage failed:", result.description);
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
