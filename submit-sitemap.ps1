# Submit Sitemap to Search Engines - Immediate Indexing Request
# Run this script to notify Google & Bing about your updated sitemap

$sitemapUrl = "https://carrentalranchi.com/sitemap.xml"

Write-Host "`n🚀 SUBMITTING SITEMAP TO SEARCH ENGINES..." -ForegroundColor Cyan
Write-Host "============================================`n" -ForegroundColor Cyan

# Google Sitemap Ping
Write-Host "📍 Pinging Google..." -ForegroundColor Yellow
try {
    $googleUrl = "https://www.google.com/ping?sitemap=$sitemapUrl"
    $response = Invoke-WebRequest -Uri $googleUrl -Method Get -UseBasicParsing
    Write-Host "✅ Google: Sitemap submitted successfully!" -ForegroundColor Green
    Write-Host "   Status: $($response.StatusCode)`n" -ForegroundColor Gray
} catch {
    Write-Host "⚠️  Google: $($_.Exception.Message)`n" -ForegroundColor Red
}

# Bing Sitemap Ping
Write-Host "📍 Pinging Bing..." -ForegroundColor Yellow
try {
    $bingUrl = "https://www.bing.com/ping?sitemap=$sitemapUrl"
    $response = Invoke-WebRequest -Uri $bingUrl -Method Get -UseBasicParsing
    Write-Host "✅ Bing: Sitemap submitted successfully!" -ForegroundColor Green
    Write-Host "   Status: $($response.StatusCode)`n" -ForegroundColor Gray
} catch {
    Write-Host "⚠️  Bing: $($_.Exception.Message)`n" -ForegroundColor Red
}

# IndexNow Submission
Write-Host "📍 Submitting via IndexNow (Bing, Yandex, Seznam)..." -ForegroundColor Yellow
try {
    $indexNowUrl = "https://api.indexnow.org/indexnow?url=$sitemapUrl&key=a8b3f9c2e1d4567890abcdef12345678"
    $response = Invoke-WebRequest -Uri $indexNowUrl -Method Get -UseBasicParsing
    Write-Host "✅ IndexNow: URLs submitted to participating search engines!" -ForegroundColor Green
    Write-Host "   Status: $($response.StatusCode)`n" -ForegroundColor Gray
} catch {
    Write-Host "⚠️  IndexNow: $($_.Exception.Message)`n" -ForegroundColor Red
}

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "✨ SUBMISSION COMPLETE!" -ForegroundColor Green
Write-Host "`n📋 WHAT HAPPENS NEXT:" -ForegroundColor Cyan
Write-Host "   • Google will crawl your sitemap within 24-48 hours" -ForegroundColor White
Write-Host "   • Bing/IndexNow typically indexes within hours" -ForegroundColor White
Write-Host "   • Check Google Search Console for indexing status" -ForegroundColor White
Write-Host "`n💡 NEXT STEPS:" -ForegroundColor Yellow
Write-Host "   1. Go to: https://search.google.com/search-console" -ForegroundColor White
Write-Host "   2. Submit sitemap: $sitemapUrl" -ForegroundColor White
Write-Host "   3. Request indexing for 5-10 important pages manually`n" -ForegroundColor White
