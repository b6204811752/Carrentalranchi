# Quick Action: Minify CSS (5 Minutes)

## Your CSS file has been updated with accessibility fixes. Now minify it!

### Option 1: Online CSS Minifier (Easiest - 2 min)

1. Go to: **https://cssminifier.com/**
2. Open `css/style.css` in Notepad
3. Select All (Ctrl+A) → Copy (Ctrl+C)
4. Paste into cssminifier.com
5. Click **"Minify"**
6. Copy the minified output
7. Open `css/style.min.css` in Notepad
8. Replace everything with minified CSS
9. Save file
10. Upload to server

### Option 2: Use PowerShell (If you have Node.js)

```powershell
# Check if Node.js is installed
node --version

# If yes, install cssnano
npm install -g cssnano-cli

# Navigate to your project
cd "C:\Users\basan\OneDrive\Desktop\CARRENTAL"

# Minify the CSS
npx cssnano css/style.css css/style.min.css
```

### Option 3: Visual Studio Code Extension

1. Open VS Code
2. Install extension: "Minify"
3. Open `css/style.css`
4. Right-click → Minify → Minify CSS
5. It will create style.min.css automatically

---

## What Changed in style.css

### 1. Social Links (Line ~1949)
```css
/* BEFORE */
.social-links a {
    width: 45px;
    height: 45px;
}

/* AFTER */
.social-links a {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
}
```

### 2. Route Price Color (Line ~1556)
```css
/* BEFORE */
.route-price {
    color: var(--primary-color); /* #ff6b35 - poor contrast */
}

/* AFTER */
.route-price {
    color: #d94d1a; /* Darker for better contrast */
}
```

### 3. Button Color (Line ~245)
```css
/* BEFORE */
.btn-call {
    background: #FF6B35;
}
.btn-call:hover {
    background: #e85a28;
}

/* AFTER */
.btn-call {
    background: #e85a28; /* Darker for better contrast */
}
.btn-call:hover {
    background: #d94d1a;
}
```

---

## After Minifying

1. **Test Locally:**
   - Open index.html in browser
   - Check if buttons look correct
   - Check if all styles load
   - Verify social icons are larger

2. **Upload to Server:**
   - Replace old `css/style.min.css` with new version
   - Clear browser cache (Ctrl+F5)
   - Test live site

3. **Verify on PageSpeed:**
   - Wait 5 minutes after upload
   - Re-test: https://pagespeed.web.dev/
   - Check if "Minify CSS" warning is gone

---

## Expected File Sizes

| File | Before | After Minification | Savings |
|------|--------|-------------------|---------|
| style.css | ~180 KB | Same (source file) | - |
| style.min.css | ~120 KB | ~115 KB | 5 KB |

---

## ✅ Checklist

Before minifying:
- [x] style.css has the 3 changes above
- [x] Backed up original style.min.css

After minifying:
- [ ] style.min.css is smaller than before
- [ ] Tested locally - site looks correct
- [ ] Uploaded to server
- [ ] Cleared browser cache
- [ ] Verified on live site
- [ ] Re-tested on PageSpeed Insights

---

## Troubleshooting

**Issue:** Minified CSS breaks the site
- **Fix:** Check for syntax errors in style.css
- **Tool:** Use https://jigsaw.w3.org/css-validator/

**Issue:** No size reduction
- **Fix:** Make sure you're minifying style.css, not style.min.css

**Issue:** Changes not visible on site
- **Fix:** Hard refresh (Ctrl+F5) or clear browser cache

---

## Next Step After This

Once CSS is minified and uploaded:
1. Move to image optimization (see PAGESPEED-IMPROVEMENTS.md)
2. Priority: Logo, Dzire, Local Taxi images
3. Use https://squoosh.app/ for each image

