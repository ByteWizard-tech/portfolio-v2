// Cloudflare Pages Function: POST /api/chat
// Proxies chat requests to Groq so the API key stays server-side.
// Set GROQ_API_KEY in Cloudflare: Pages project > Settings > Variables and Secrets.

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function onRequestPost({ request, env }) {
  const apiKey = env.GROQ_API_KEY;
  if (!apiKey) {
    return json({ error: "Server configuration error: Missing API Key" }, 500);
  }

  let messages;
  try {
    ({ messages } = await request.json());
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 50) {
    return json({ error: "Invalid messages" }, 400);
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        model: "llama-3.3-70b-versatile",
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return json({ error: data.error?.message || "Failed to fetch from Groq" }, 502);
    }
    return json(data);
  } catch (error) {
    return json({ error: "Internal Server Error", details: String(error) }, 500);
  }
}

export function onRequest() {
  return json({ error: "Method not allowed" }, 405);
}
