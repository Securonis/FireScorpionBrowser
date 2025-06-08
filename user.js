/**
 * Securonis FireScorpion Browser - user.js
 * 
 * This file contains complementary security and privacy settings
 * that do not conflict with securonis.cfg and 00securonis.js files.
 * 
 * These settings are inspired by Tor Browser and
 * optimized to create minimal issues in daily usage.
 */

// ===== Complementary Browser Fingerprinting Protections =====
user_pref("privacy.resistFingerprinting.letterboxing", true);     // Letterboxing to reduce screen size fingerprinting
user_pref("privacy.fingerprintingProtection.enabled", true);      // Additional fingerprinting protection (new feature)
user_pref("privacy.window.maxInnerWidth", 1600);                  // Maximum window width limitation
user_pref("privacy.window.maxInnerHeight", 900);                  // Maximum window height limitation

// ===== Advanced Network Isolation =====
user_pref("privacy.partition.network_state", true);               // Network state partitioning
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);  // Partition 3rd party storage
user_pref("privacy.partition.serviceWorkers", true);              // Service Worker isolation
user_pref("privacy.storagePrincipal.enabledForTrackers", true);   // Storage isolation for trackers

// ===== Cookie and Storage Improvements =====
user_pref("privacy.sanitize.sanitizeOnShutdown", true);           // Clean on shutdown
user_pref("privacy.clearOnShutdown.offlineApps", true);           // Clear offline application data
user_pref("privacy.clearOnShutdown.siteSettings", false);         // Preserve site settings (for usability)
user_pref("privacy.sanitize.timeSpan", 0);                        // Clear all history

// ===== HTTP Security Headers =====
user_pref("network.http.referer.XOriginPolicy", 2);               // Limit referer information to same origin
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);       // Trim cross-origin referer header to domain
user_pref("network.http.referer.defaultPolicy.trackers", 1);      // Limit referer sending to trackers
user_pref("network.http.referer.defaultPolicy.trackers.pbmode", 1); // Limit referer to trackers in private mode

// ===== WebRTC Additional Security =====
user_pref("media.peerconnection.ice.default_address_only", true);  // Use default IP only (reduce IP leakage)
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // Use proxy only when behind proxy

// ===== Hardware Information Leak Protection =====
user_pref("media.navigator.mediacapabilities.enabled", false);     // Hide media capabilities
user_pref("dom.gamepad.enabled", false);                          // Disable gamepad API
user_pref("media.mediasource.enabled", true);                     // Keep Media Source Extensions enabled (for video)
user_pref("dom.w3c_touch_events.enabled", 0);                     // Disable touch screen API

// ===== DOM Security Improvements =====
user_pref("dom.targetBlankNoOpener.enabled", true);               // Apply noopener for target=_blank
user_pref("dom.popup_allowed_events", "click dblclick");          // Only allow popups on click events
user_pref("dom.disable_window_move_resize", true);                // Prevent window size/position changes
user_pref("dom.allow_scripts_to_close_windows", false);           // Prevent scripts from closing windows

// ===== Cache and Storage Limitations =====
user_pref("browser.sessionstore.privacy_level", 2);               // Session storage privacy (maximum)
user_pref("browser.sessionstore.interval", 30000);                // Session save interval (seconds)
user_pref("browser.sessionhistory.max_entries", 10);              // Keep fewer page history entries
user_pref("browser.sessionhistory.max_total_viewers", 4);         // Number of cached pages

// ===== Security Improvements =====
user_pref("security.tls.version.fallback-limit", 4);              // TLS fallback limit: TLS 1.3
user_pref("security.cert_pinning.enforcement_level", 2);          // Certificate pinning mandatory
user_pref("security.pki.sha1_enforcement_level", 1);              // Don't allow SHA-1 certificates
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);            // Disable weak cipher suite
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);            // Disable weak cipher suite

// ===== Privacy Improvements =====
user_pref("browser.link.open_newwindow.restriction", 0);          // Restrict new window opening
user_pref("permissions.default.geo", 2);                          // Deny location sharing by default
user_pref("permissions.default.camera", 2);                       // Deny camera access by default
user_pref("permissions.default.microphone", 2);                   // Deny microphone access by default
user_pref("permissions.default.desktop-notification", 2);         // Deny notifications by default
user_pref("permissions.default.xr", 2);                           // Deny VR access by default

// ===== JavaScript Security Balanced Settings =====
// Note: JIT engines are enabled for better web performance
// Comment these out if you need maximum security but reduced performance
// user_pref("javascript.options.wasm_baselinejit", false);
// user_pref("javascript.options.ion", false);
// user_pref("javascript.options.asmjs", false);
// user_pref("javascript.options.baselinejit", false);

// Alternative safer approach with better performance
user_pref("javascript.options.jit.content", true);               // Keep content JIT enabled
user_pref("javascript.options.jit.chrome", false);               // Disable UI JIT (security improvement)
user_pref("javascript.options.wasm_caching", false);             // Disable WASM caching for security

// ===== Tor Browser-like Additional Settings =====
user_pref("network.captive-portal-service.enabled", false);       // Disable captive portal detection
user_pref("network.connectivity-service.enabled", false);         // Disable connectivity checking
user_pref("network.dns.disableIPv6", true);                       // Disable IPv6 DNS
user_pref("network.IDN_show_punycode", true);                     // Show punycode (URL phishing protection)

// ===== Cache Improvements =====
user_pref("browser.cache.memory.capacity", 65536);                // Limit memory cache (64MB)
user_pref("browser.cache.memory.max_entry_size", 5120);           // Limit maximum cache entry size
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // Force media cache in RAM

// ===== Preferences - For Better Usability =====
user_pref("accessibility.blockautorefresh", true);                // Block auto-refresh
user_pref("browser.backspace_action", 2);                         // Don't use backspace as back navigation
user_pref("browser.tabs.warnOnClose", false);                     // Disable warning when closing multiple tabs
user_pref("browser.tabs.warnOnCloseOtherTabs", false);            // Disable warning when closing other tabs
user_pref("full-screen-api.warning.delay", 0);                    // Remove fullscreen warning delay
user_pref("full-screen-api.warning.timeout", 0);                  // Remove fullscreen warning timeout
