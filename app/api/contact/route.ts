import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "NexusAI <noreply@nexusai.example.com>",
        to: ["contact@nexusai.example.com"],
        subject: `Nouveau message — ${name}`,
        text: `De: ${name} <${email}>\n\n${message}`,
      });
    } else {
      // Fallback: no-op (still succeed for portfolio demos)
      console.log("CONTACT_FORM", { name, email, message });
    }
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Erreur serveur" }, { status: 500 });
  }
}


