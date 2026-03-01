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
  `https://${HOST}/ranchi-local-taxi.html`,
  `https://${HOST}/ranchi-airport-taxi.html`,
  `https://${HOST}/ranchi-railway-station-taxi.html`,
  `https://${HOST}/ranchi-local-sightseeing.html`,
  `https://${HOST}/one-day-tour-ranchi.html`,
  `https://${HOST}/corporate-taxi-ranchi.html`,
  `https://${HOST}/wedding-car-rental-ranchi.html`,
  `https://${HOST}/ranchi-to-patna-taxi.html`,
  `https://${HOST}/ranchi-to-kolkata-taxi.html`,
  `https://${HOST}/ranchi-to-jamshedpur-taxi.html`,
  `https://${HOST}/ranchi-to-bokaro-taxi.html`,
  `https://${HOST}/ranchi-to-dhanbad-taxi.html`,
  `https://${HOST}/ranchi-to-gaya-taxi.html`,
  `https://${HOST}/ranchi-to-bodh-gaya-taxi.html`,
  `https://${HOST}/ranchi-to-hazaribagh-taxi.html`,
  `https://${HOST}/ranchi-to-deoghar-taxi.html`,
  `https://${HOST}/ranchi-to-netarhat-taxi.html`,
  `https://${HOST}/ranchi-to-varanasi-taxi.html`,
  `https://${HOST}/ranchi-to-kolkata-taxi.html`,
  `https://${HOST}/ranchi-to-darjeeling-taxi.html`,
  `https://${HOST}/ranchi-to-patna-taxi.html`,
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
