/* Xi · Google AI Pro Offer Injector — checkout popup price guard
 * Purpose: read the real terms in the Play checkout iframe; green bar = free trial safe to click, red bar = paid so do not click.
 */
(() => {
  if (window.__GAPT_GUARD || window.top === window) return; // run only in subframes
  window.__GAPT_GUARD = true;

  const FREE_WORDS = ["free trial", "start your free trial", "free trial", "US$0.00", "$0.00", "0,00", "€0.00", "won't be charged", "you won't be charged", "won't be charged"];
  const PAID_WORDS = ["/mo after", "/month after", "per month after", "pay now", "pay now", "charged today", "charged today"];

  let bar = null;
  function paint(kind, text) {
    if (!document.body) return;
    if (!bar) {
      bar = document.createElement("div");
      bar.style.cssText = "position:fixed;left:0;right:0;top:0;z-index:2147483647;padding:10px 14px;" +
        "font:13px/1.5 -apple-system,Segoe UI,Roboto,'Microsoft YaHei',sans-serif;text-align:center;font-weight:600;";
      document.body.appendChild(bar);
    }
    bar.style.background = kind === "ok" ? "#1a7f37" : (kind === "bad" ? "#c62828" : "#616161");
    bar.style.color = "#fff";
    bar.textContent = text;
  }

  function judge() {
    let t = "";
    try {
      t = (document.body && document.body.innerText || "").toLowerCase();
    } catch (e) {
      return;
    }
    if (!t || t.length < 5) return;
    const free = FREE_WORDS.some((w) => t.includes(w.toLowerCase()));
    const paid = PAID_WORDS.some((w) => t.includes(w.toLowerCase()));

    if (free && !paid) {
      paint("ok", "✅ Free trial detected — this popup is safe to subscribe (please double-check the amount is $0.00)");
    } else if (paid && !free) {
      paint("bad", "❌ No free trial detected; this may charge you — do not subscribe yet; go back and retry another layer");
    } else if (free && paid) {
      paint("warn", "⚠️ Terms mention both free and paid wording — manually confirm the amount before clicking");
    } else {
      paint("warn", "… Price terms not recognized (may still be loading)");
    }
  }

  setTimeout(judge, 1200);
  setTimeout(judge, 3000);
  setTimeout(judge, 6000);
  try {
    const mo = new MutationObserver(() => judge());
    document.addEventListener("DOMContentLoaded", () => mo.observe(document.body, { childList: true, subtree: true, characterData: true }));
  } catch (e) {}
})();
