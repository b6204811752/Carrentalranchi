/**
 * IndexNow Submission Script - carrentalranchi.com
 * Run with: node ping-indexnow.js
 * Run every time you update or publish new pages to notify search engines instantly
 */

const https = require("https");

const KEY = "a8b3f9c2e1d4567890abcdef12345678";
const HOST = "www.carrentalranchi.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/ranchi-local-taxi`,
  `https://${HOST}/ranchi-airport-taxi`,
  `https://${HOST}/ranchi-railway-station-taxi`,
  `https://${HOST}/ranchi-local-sightseeing`,
  `https://${HOST}/one-day-tour-ranchi`,
  `https://${HOST}/corporate-taxi-ranchi`,
  `https://${HOST}/wedding-car-rental-ranchi`,
  `https://${HOST}/ranchi-to-patna-taxi`,
  `https://${HOST}/ranchi-to-kolkata-taxi`,
  `https://${HOST}/ranchi-to-jamshedpur-taxi`,
  `https://${HOST}/ranchi-to-bokaro-taxi`,
  `https://${HOST}/ranchi-to-dhanbad-taxi`,
  `https://${HOST}/ranchi-to-gaya-taxi`,
  `https://${HOST}/ranchi-to-bodh-gaya-taxi`,
  `https://${HOST}/ranchi-to-hazaribagh-taxi`,
  `https://${HOST}/ranchi-to-deoghar-taxi`,
  `https://${HOST}/ranchi-to-netarhat-taxi`,
  `https://${HOST}/ranchi-to-varanasi-taxi`,
  `https://${HOST}/ranchi-to-darjeeling-taxi`,
  `https://${HOST}/ranchi-to-giridih-taxi`,
  `https://${HOST}/ranchi-to-ramgarh-taxi`,
  `https://${HOST}/ranchi-to-dumka-taxi`,
  `https://${HOST}/ranchi-to-chaibasa-taxi`,
  `https://${HOST}/ranchi-to-khunti-taxi`,
  `https://${HOST}/ranchi-to-gumla-taxi`,
  `https://${HOST}/ranchi-to-lohardaga-taxi`,
  `https://${HOST}/ranchi-to-simdega-taxi`,
  `https://${HOST}/ranchi-to-asansol-taxi`,
  `https://${HOST}/ranchi-to-durgapur-taxi`,
  `https://${HOST}/ranchi-to-purulia-taxi`,
  `https://${HOST}/ranchi-to-siliguri-taxi`,
  `https://${HOST}/ranchi-to-digha-taxi`,
  `https://${HOST}/ranchi-to-parasnath-taxi`,
  `https://${HOST}/ranchi-to-rajrappa-temple-taxi`,
  `https://${HOST}/ranchi-to-hundru-falls-taxi`,
  `https://${HOST}/ranchi-to-jonha-falls-taxi`,
  `https://${HOST}/ranchi-to-betla-national-park-taxi`,
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URLS,
});

const options = {
  hostname: "api.indexnow.org",
  path: "/indexnow",
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload),
  },
};

console.log(`Submitting ${URLS.length} URLs to IndexNow...`);

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log("✅ SUCCESS - URLs submitted to IndexNow (Bing, Yandex, etc.)");
  } else if (res.statusCode === 422) {
    console.log("⚠️  Some URLs are not on the declared host or invalid.");
  } else {
    console.log(`Response code: ${res.statusCode}`);
  }
});

req.on("error", (e) => {
  console.error(`Error: ${e.message}`);
});

req.write(payload);
req.end();
