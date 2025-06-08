/* Firefox settings for Securonis Linux - System Pre-configuration */
/* FireScorpion Browser - System Level Settings */

/* ===== IMPORTANT INFORMATION ===== */
/* This file contains only system-level configuration - all hardening settings are in user.js */
/* This file loads first before user.js */

// ===== Proxy Settings for Tor and I2P =====
// Configure proxy settings system-wide for anonymity

// Use a PAC file for proxy configuration
user_pref("network.proxy.type", 2);                              // Use PAC file for proxy configuration
user_pref("network.proxy.autoconfig_url", "file:///usr/local/share/securonis/proxy.pac"); // Path to PAC file

// Fallback to direct SOCKS proxy if PAC fails
user_pref("network.proxy.socks", "127.0.0.1");                   // SOCKS proxy host (Tor)
user_pref("network.proxy.socks_port", 9050);                     // SOCKS proxy port (Tor)
user_pref("network.proxy.socks_remote_dns", true);               // Use proxy for DNS resolution
user_pref("network.proxy.socks_version", 5);                     // SOCKS v5 protocol

// I2P and Tor domain handling
user_pref("network.dns.blockDotOnion", false);                   // Allow .onion domains
user_pref("network.dns.blockDotI2p", false);                     // Allow .i2p domains

// Local network exceptions for proxy
user_pref("network.proxy.no_proxies_on", "127.0.0.1, localhost, 192.168.*.*, 10.*, 172.16.*.*, 172.17.*.*, 172.18.*.*, 172.19.*.*, 172.20.*.*, 172.21.*.*, 172.22.*.*, 172.23.*.*, 172.24.*.*, 172.25.*.*, 172.26.*.*, 172.27.*.*, 172.28.*.*, 172.29.*.*, 172.30.*.*, 172.31.*.*, i2p, .i2p");

// ===== System Level UI Customizations =====
// Force firefox to use dark theme
user_pref("browser.theme.toolbar-theme", 0);                     // Dark theme setting
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
user_pref("devtools.theme", "dark");                             // Dark theme for developer tools
user_pref("browser.tabs.inTitlebar", 1);                         // Hide title bar to save space

// ===== First-run and Welcome Screens =====
// Disable first-run and welcome pages
user_pref("browser.startup.homepage_override.mstone", "ignore");  // Skip version-specific welcome page
user_pref("startup.homepage_welcome_url", "");                   // No welcome URL
user_pref("startup.homepage_welcome_url.additional", "");        // No additional welcome URL
user_pref("startup.homepage_override_url", "");                  // No override URL
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // Disable What's New panel
user_pref("browser.aboutwelcome.enabled", false);                // Disable about:welcome page
user_pref("browser.rights.3.shown", true);                       // Don't show 'know your rights' on first run

// ===== Extension and Add-on Settings =====
// Distribution add-ons configuration
user_pref("extensions.autoDisableScopes", 0);                    // Don't disable any add-ons automatically
user_pref("extensions.enabledScopes", 15);                       // Enable all extension scopes
user_pref("extensions.installDistroAddons", true);               // Allow installation of distribution add-ons
user_pref("extensions.getAddons.cache.enabled", false);          // Don't cache Mozilla add-on info
user_pref("extensions.htmlaboutaddons.inline-options.enabled", false); // Disable inline options in about:addons

// ===== Region and Language Settings =====
user_pref("browser.search.region", "US");                        // Default region for search
user_pref("browser.region.update.enabled", false);               // Don't update region automatically
user_pref("browser.region.network.url", "");                     // No region detection URL
user_pref("browser.region.update.region", "");                   // No region updates

// ===== DuckDuckGo Search Integration =====
// Set DuckDuckGo as default search engine
user_pref("browser.search.defaultenginename", "DuckDuckGo");     // Default search engine name
user_pref("browser.search.defaultenginename.US", "DuckDuckGo");  // US-specific default search engine
user_pref("browser.search.defaulturl", "https://duckduckgo.com/"); // Search URL
user_pref("keyword.URL", "https://duckduckgo.com/"); // Keyword search URL
user_pref("browser.search.order.3", "DuckDuckGo");              // Search engine order

// DuckDuckGo as new tab page
user_pref("browser.startup.homepage", "https://duckduckgo.com/"); // Homepage setting
user_pref("browser.newtabpage.enabled", false);                  // Disable built-in new tab page
user_pref("browser.newtab.url", "https://duckduckgo.com/"); // Custom new tab URL
user_pref("browser.search.hiddenOneOffs", "Google,Amazon.com,Bing,Yahoo,eBay,Twitter"); // Hide other search engines

// ===== New Tab Configuration =====
// Disable activity stream and sponsored content
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // No top stories
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // No snippets
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // No Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // No sponsored content
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // No sponsored sites
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // No add-on recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // No feature recommendations
user_pref("browser.newtabpage.activity-stream.feeds.sections", false); // No sections
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false); // No top sites
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); // No bookmarks
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false); // No downloads
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // No visited sites
user_pref("browser.newtabpage.activity-stream.showSearch", false); // No search bar
