import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request, url }) => {
  const h = request.headers;
  const token = import.meta.env.DEBUG_TOKEN;

  if (!token || url.searchParams.get("token") !== token) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json({
    "x-verified-bot": h.get("x-verified-bot"),
    "cf-connecting-ip": h.get("cf-connecting-ip"),
    "x-forwarded-for": h.get("x-forwarded-for"),
    "x-forwarded-proto": h.get("x-forwarded-proto"),
    "cf-ray": h.get("cf-ray"),
  });
};
