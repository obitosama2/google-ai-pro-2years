Xi · Google AI Pro 2Y Offer Injector
<img width="776" height="403" alt="image translated" src="https://github.com/user-attachments/assets/339c7d56-419d-48ed-bef4-7f8971d1fb9f" />

📌 Project Overview
This is a Chrome extension for claiming 2 years of Google One and 2 years of Gemini AI Pro for free. By rewriting offer parameters in the subscription checkout flow, it activates trial subscription offers and enables tiered stacking.

[!WARNING]
Risk and Testing Notice:

The channel used by this project is a specific promotional/BUG channel. It is strongly recommended to use an alt account to try it out and practice your skills; do not do this on your main/core account.

Such subscriptions may be rolled back by the platform or have the subscription removed (for example, the previous 24-month campaign was rolled back in some accounts after running for half a month). Please view this rationally.

This project is intended only for academic and learning exchange regarding network protocols and browser extension technology. You bear the risk of use yourself.

⚙️ Prerequisites
Network environment: It is recommended to choose a clean IP node in Japan, Southeast Asia, or the US region.

Bank card preparation: A domestically issued dual-currency/full-currency card (Mastercard or Visa debit/credit card is fine).

Important: Please ensure at least 1 USD or equivalent CNY remains in the card. Google initiates a 1 USD pre-authorization verification when starting the trial (no actual charge; after success, cancel the subscription and it will be refunded quickly).

Billing address/ZIP code: It is recommended to use a US tax-free state ZIP code (e.g., Oregon: 97201).

🚀 Full Illustrated Tutorial (5 Steps)
Step 1: Install the Google Chrome Xi Extension
Download this repository: You can directly download the latest extension package in the root directory google_pro_2year6_12_24.zip (or click the green Code button in the upper right corner -> Download ZIP) and unzip it.

Open Google Chrome and enter the following in the address bar:

text
chrome://extensions/
Enable "Developer mode" in the upper right corner.

Click "Load unpacked" in the upper left corner and select the extension directory in this project.

After the extension is installed, confirm that Xi · Google AI Pro 2Y Offer Injector is enabled in the list.
<img width="776" height="403" alt="image" src="https://github.com/user-attachments/assets/e36da614-0b37-4051-9520-4be2f292595a" />

Step 2: Open the Google One Plans Page and Select an Injection Tier
Visit in your browser: https://one.google.com/plans

Confirm that the target alt account you prepared is logged in in the upper right corner.

Click the Xi extension icon in the browser extension bar:

For the first subscription, check: "Tier 1 · 12 months (first subscription)"

After selecting, refresh the page. The lower right corner of the page will show Injection mounted · 12 months.

Click Get discount under the AI Pro card on the page.
<img width="1024" height="823" alt="image translated (3)" src="https://github.com/user-attachments/assets/70c7ed8b-50a6-48a1-b8b0-2a9cbe27198c" />
<img width="399" height="614" alt="image translated (2)" src="https://github.com/user-attachments/assets/c25624f8-9826-4940-8a05-4574a1a3c337" />

Step 3: Check the Anti-Accidental-Charge Guard and Confirm Zero-Dollar Card Binding
A Google Play checkout popup will appear. The extension has a built-in "Checkout Popup Price Guard":

🟢 Green bar (✅ Free trial detected — amount $0.00): The offer is active, and it is safe to subscribe.

🔴 Red bar (❌ No free trial detected; this may be a real charge): Do not click! Close the popup, go back to the extension to switch tiers, or refresh the page and try again.

Bind your Visa / Mastercard and enter the tax-free ZIP code (97201).

Strictly verify that the checkout details show $0.00, then click confirm subscription.
<img width="569" height="1272" alt="image translated (4)" src="https://github.com/user-attachments/assets/5c096b84-809d-4451-8200-9d1d9ece11f2" />

Step 4: Confirm the Subscription Is Active
After the subscription succeeds, open Google Play Order History.
<img width="1024" height="261" alt="image translated (5)" src="https://github.com/user-attachments/assets/4ba0c556-18bc-423b-aac1-6475705fb303" />

Check the latest order record. It should show that Google AI Pro was successfully ordered, with a billing amount of $0.00.

Step 5: Immediately Cancel Auto-Renewal and the Pre-Authorization Refund
[!IMPORTANT]
After the subscription succeeds, be sure to cancel renewal immediately! Canceling renewal does not affect the free trial benefits already active for the current period, but it ensures you will never be charged after expiration.

Open Google Play Subscription Management or "Subscriptions & services" in the Google One management page.

Find the item you just subscribed to and click "Cancel subscription".

After cancellation, the 1 USD pre-authorization hold from card binding will receive a refund/void notice in about 2 minutes.
<img width="1024" height="261" alt="image translated (6)" src="https://github.com/user-attachments/assets/90f65ece-fe30-4a41-9f9c-0b15f8d44c9d" />

💡 Multi-Tier Stacking Instructions
The extension supports tiered injection:

Tier 1: 12 months (for the first subscription)

Tier 2: 6 months (SS) (stacking)

Tier 3: 6 months (stacking)

Backup tier: 6 months (backup)

To stack subscriptions: after completing Tier 1 and successfully subscribing, return to the extension popup and switch to Tier 2, refresh the page, and click the discount button again to add the subscription.

🛡️ Technical Principles
MAIN World script rewriting: The Chrome extension uses the Manifest V3 world: "MAIN" feature to inject rewriting logic early during one.google.com page load, hijacking the offer token in the Ngbm RPC and /eacquire/multiline request parameters sent to the Google backend.

Play Guard price guard: Runs a DOM monitoring and analysis engine in the tokenized.play.google.com iframe checkout window, strictly comparing free trial and billing keywords to prevent accidental charges caused by network fluctuations or invalid parameters.

📜 Disclaimer
This project is intended only for academic exchange and technical research in network programming and Chrome extension development.

Any account status changes, entitlement changes, or other consequences arising from use of this extension are borne solely by the user.

Please respect and comply with the terms of service of Google and related platforms.

🤝 Acknowledgments and Links
Original : PIZZA STEVE
