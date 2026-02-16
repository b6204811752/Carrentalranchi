// IndexNow - Instant Indexing for Microsoft Bing, Yandex & IndexNow Partners
// This submits your URLs immediately to search engines

const https = require('https');

const indexNowKey = 'a8b3f9c2e1d4567890abcdef12345678';
const host = 'carrentalranchi.com';

// Critical URLs to submit immediately
const urls = [
    'https://carrentalranchi.com/',
    'https://carrentalranchi.com/ranchi-local-taxi.html',
    'https://carrentalranchi.com/ranchi-airport-taxi.html',
    'https://carrentalranchi.com/ranchi-to-patna-taxi.html',
    'https://carrentalranchi.com/ranchi-to-kolkata-taxi.html',
    'https://carrentalranchi.com/ranchi-to-jamshedpur-taxi.html',
    'https://carrentalranchi.com/corporate-taxi-ranchi.html',
    'https://carrentalranchi.com/wedding-car-rental-ranchi.html',
    'https://carrentalranchi.com/one-day-tour-ranchi.html',
    'https://carrentalranchi.com/ranchi-local-sightseeing.html'
];

// Submit to IndexNow API
const data = JSON.stringify({
    host: host,
    key: indexNowKey,
    keyLocation: `https://${host}/indexnow-key.txt`,
    urlList: urls
});

const options = {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log('🚀 Submitting URLs to IndexNow for instant indexing...');

const req = https.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    
    if (res.statusCode === 200) {
        console.log('✅ SUCCESS! URLs submitted to Bing, Yandex & IndexNow partners');
        console.log('⏱️  Your pages will be crawled within minutes to hours');
    } else {
        console.log('⚠️  Response:', res.statusCode);
    }
    
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (error) => {
    console.error('❌ Error:', error);
});

req.write(data);
req.end();

console.log('\n📋 Submitted URLs:');
urls.forEach(url => console.log(`   - ${url}`));
