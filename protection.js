/**
 * Copyright (c) 2026 Cristian Castañeda - Ranco Cherries Chimbarongo
 * All Rights Reserved - Unauthorized copying prohibited
 * Contact: cristian.castaneda.penaloza@estudiante.ipss.cl
 */

(function() {
    'use strict';
    
    // Anti-copy protection
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('keydown', function(e) {
        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
            (e.ctrlKey && e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
    });
    
    // Domain verification
    const allowedDomains = [
        'ccastanedadev.github.io',
        'localhost',
        '127.0.0.1'
    ];
    
    const currentDomain = window.location.hostname;
    const isAllowed = allowedDomains.some(domain => currentDomain.includes(domain));
    
    if (!isAllowed) {
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#fff;font-family:Arial;text-align:center;"><div><h1>⚠️ Unauthorized Access</h1><p>This content is protected by copyright.<br>© 2026 Cristian Castañeda - Ranco Cherries Chimbarongo</p></div></div>';
        throw new Error('Unauthorized domain');
    }
})();
