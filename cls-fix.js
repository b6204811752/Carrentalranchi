// CLS Fix - Enable animations only after page fully loaded
// This prevents layout shifts during initial page load

(function() {
    'use strict';
    
    // Wait for page to fully load (including images)
    window.addEventListener('load', function() {
        // Small delay to ensure everything is settled
        setTimeout(function() {
            // Add 'loaded' class to body to re-enable animations
            document.body.classList.add('loaded');
            
            console.log('✅ Page loaded - animations enabled (except infinite ones)');
        }, 100);
    });
    
    // Fallback: If load event takes too long, enable after DOM ready + timeout
    if (document.readyState === 'complete') {
        setTimeout(function() {
            document.body.classList.add('loaded');
        }, 100);
    }
})();
