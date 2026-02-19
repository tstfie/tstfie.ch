export const prerender = false;

export async function GET() {
  return new Response("contact alive");
}

export async function POST() {
  return new Response("contact post alive");
}
