const SUPABASE_URL = "https://gjnwjzjkawffcjbhtdzo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_KtPT1tiiz80HlamWPHGQlg_l7GXtX0-";

async function rpc(fn, args) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: Object.assign(
      { "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY },
      SUPABASE_ANON_KEY.startsWith("eyJ") ? { Authorization: `Bearer ${SUPABASE_ANON_KEY}` } : {}
    ),
    body: JSON.stringify(args || {}),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error((data && data.message) || "network");
  return data;
}
