# ============================================================
# GoDaddy DNS Fix — carrentalranchi.com
# Changes A record @ from 216.198.79.1 (GoDaddy) to 76.76.21.21 (Vercel)
#
# USAGE:
#   1. Get your API key at: https://developer.godaddy.com/keys
#      (Click "Create New API Key" → select Production)
#   2. Run: .\fix-godaddy-dns.ps1 -ApiKey "yourkey" -ApiSecret "yoursecret"
# ============================================================

param(
    [Parameter(Mandatory=$true)]
    [string]$ApiKey,
    
    [Parameter(Mandatory=$true)]
    [string]$ApiSecret
)

$domain     = "carrentalranchi.com"
$vercelIP   = "76.76.21.21"
$apiBase    = "https://api.godaddy.com/v1"
$headers    = @{
    "Authorization" = "sso-key ${ApiKey}:${ApiSecret}"
    "Content-Type"  = "application/json"
    "Accept"        = "application/json"
}

Write-Host "=== GoDaddy DNS Fix for $domain ===" -ForegroundColor Cyan

# Step 1: Read current A record
Write-Host "`n[1] Reading current A record for @..." -ForegroundColor Yellow
try {
    $current = Invoke-RestMethod -Uri "$apiBase/domains/$domain/records/A/@" -Headers $headers -Method GET
    Write-Host "    Current A record: $($current.data)" -ForegroundColor White
} catch {
    Write-Host "    ERROR reading record: $_" -ForegroundColor Red
    exit 1
}

if ($current.data -eq $vercelIP) {
    Write-Host "`n[OK] A record already points to Vercel ($vercelIP). No change needed." -ForegroundColor Green
    exit 0
}

# Step 2: Update A record to Vercel
Write-Host "`n[2] Updating A record @ from $($current.data) to $vercelIP..." -ForegroundColor Yellow
$body = @(
    @{
        data = $vercelIP
        ttl  = 600
    }
) | ConvertTo-Json

try {
    Invoke-RestMethod -Uri "$apiBase/domains/$domain/records/A/@" `
        -Headers $headers -Method PUT -Body $body | Out-Null
    Write-Host "    SUCCESS: A record updated!" -ForegroundColor Green
} catch {
    Write-Host "    ERROR updating record: $_" -ForegroundColor Red
    exit 1
}

# Step 3: Verify
Write-Host "`n[3] Verifying change..." -ForegroundColor Yellow
Start-Sleep -Seconds 2
$updated = Invoke-RestMethod -Uri "$apiBase/domains/$domain/records/A/@" -Headers $headers -Method GET
Write-Host "    New A record: $($updated.data)" -ForegroundColor White

if ($updated.data -eq $vercelIP) {
    Write-Host "`n=== ALL DONE ===" -ForegroundColor Green
    Write-Host "carrentalranchi.com A record now points to Vercel ($vercelIP)" -ForegroundColor Green
    Write-Host "DNS propagation takes 5-30 minutes. After that:" -ForegroundColor Cyan
    Write-Host "  https://carrentalranchi.com  ->  redirects to www.carrentalranchi.com  (via Vercel)" -ForegroundColor Cyan
    Write-Host "  https://www.carrentalranchi.com  ->  your site (already working)" -ForegroundColor Cyan
} else {
    Write-Host "`nWARNING: A record shows $($updated.data) — may take a moment to reflect." -ForegroundColor Yellow
}
