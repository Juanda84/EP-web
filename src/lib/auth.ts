export const SESSION_COOKIE = "ep_admin_session";

function getSecret() {
  return process.env.ADMIN_PASSWORD || "eros-pereira-dev-password";
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "eros-pereira-dev-password";
}

async function sha256Hex(text: string) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function makeSessionToken() {
  return sha256Hex(getSecret());
}

export async function isValidSessionToken(token: string | undefined) {
  if (!token) return false;
  return token === (await makeSessionToken());
}
