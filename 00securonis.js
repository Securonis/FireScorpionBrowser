/* Firefox settings for Securonis Linux - Enhanced Privacy & Security */
/* We also use policies.json to handle the default browser configuration */
/* FireScorpion Browser - Enhanced Hardening Configuration */

/* NOTE: Main security and privacy hardening settings are in securonis.cfg */
/* This file contains complementary settings that don't duplicate securonis.cfg */

/* Telemetry settings removed - now managed in securonis.cfg */

/*
  Settings for extension to not send data to firefox server automatically
*/
// Disable add-on information. https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
pref("extensions.getAddons.cache.enabled", false);
// Remove recommended add-ons
// https://support.mozilla.org/bm/questions/1264852
pref("extensions.htmlaboutaddons.inline-options.enabled", false);

/* Privacy, tracking protection, fingerprinting, and WebRTC settings */
/* Moved to securonis.cfg for centralized management */

/* Hardware and Sensor Protection - Core settings moved to securonis.cfg */
/* Keeping only unique settings that aren't in securonis.cfg */
lockPref("dom.w3c_touch_events.enabled", 0);
pref("dom.maxHardwareConcurrency", 2);
pref("media.navigator.video.enabled", false);
pref("media.getusermedia.aec_enabled", false);
pref("media.getusermedia.agc_enabled", false);
pref("media.getusermedia.noise_enabled", false);
pref("media.audio_data.enabled", false);
pref("camera.control.face_detection.enabled", false);
pref("dom.webaudio.enabled", false);
pref("media.webspeech.synth.enabled", false);
pref("dom.vr.enabled", false);
pref("javascript.use_us_english_locale", true);
pref("browser.search.region", "US");
lockPref("browser.region.update.enabled", false);
lockPref("browser.region.update.region", "");
// Disable Firefox's content block monitor report
pref("browser.contentblocking.report.monitor.enabled", false);
// Disable Firefox show mobile app report
pref("browser.contentblocking.report.show_mobile_app", false);
// Disable Firefox report VPN enabled
pref("browser.contentblocking.report.vpn.enabled", false);
// TODO think about media.webvtt.regions.enabled
// Do not expose info when WebGL is enabled. License MIT @pyllyukko
pref("webgl.enable-debug-renderer-info", false);
// Disable remote debugging (Disabled by default). License MIT @pyllyukko
// pref("devtools.debugger.remote-enabled", false);
// pref("devtools.debugger.force-local", true);

/*
  Some interesting settings that might break UX
  License MIT @pyllyukko
*/
// Disable video stats to reduce fingerprinting
pref("media.video_stats.enabled", false);
// Don't use document specified fonts to prevent installed font enumeration
// Disable because it made google meet (and possibly some other websites) have font problem
// Fix for users: change value to 1
// pref("browser.display.use_document_fonts", 0);

// Don't ask to install the Flash plugin
pref("plugins.notifyMissingFlash", false);

// Allow onion domains and I2P domains for enhanced anonymity networks support
// Send DNS requuest through SOCKS when SOCKS proxy is in use. This prevents DNS leaks when using Tor
// License MIT @pyllyukko https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers
lockPref("network.proxy.socks_remote_dns", true);
lockPref("network.dns.blockDotOnion", false);
lockPref("network.dns.blockDotI2p", false);

/* Enhanced Network Security */
lockPref("network.http.referer.XOriginPolicy", 2);
lockPref("network.http.referer.XOriginTrimmingPolicy", 2);
lockPref("network.http.referer.spoofSource", true);
lockPref("network.IDN_show_punycode", true);
lockPref("network.file.disable_unc_paths", true);
lockPref("network.gio.supported-protocols", "");

// Network and proxy settings moved to securonis.cfg

/* DuckDuckGo search settings moved to securonis.cfg */
// Keeping only unique settings that aren't in securonis.cfg
lockPref("browser.search.hiddenOneOffs", "Google,Amazon.com,Bing,Yahoo,eBay,Twitter");
lockPref("browser.search.order.3", "DuckDuckGo");

/* URL bar settings moved to securonis.cfg */
// Keeping only unique settings that aren't in securonis.cfg
pref("browser.urlbar.autoFill", false);
pref("browser.urlbar.speculativeConnect.enabled", false);
pref("browser.taskbar.lists.enabled", false);
pref("browser.taskbar.lists.frequent.enabled", false);
pref("browser.taskbar.lists.recent.enabled", false);
pref("browser.taskbar.lists.tasks.enabled", false);
pref("browser.taskbar.previews.enable", false);

/*
  Customize layout
*/
// Disable URL trim so protocol is forced to show
lockPref("browser.urlbar.trimURLs", false);
// Hide title bar to save some space
pref("browser.tabs.inTitlebar", 1);
// Don't show WhatsNew on first run after every update
pref("browser.startup.homepage_override.mstone", "ignore");
// Dark theme for devtools
pref("devtools.theme", "dark");
// Force firefox to use dark theme.
pref("browser.theme.toolbar-theme", 0);
pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
// Don't show 'know your rights' on first run
pref("browser.rights.3.shown", true);
pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"home-button\",\"stop-reload-button\",\"urlbar-container\",\"save-to-pocket-button\",\"privatebrowsing-button\",\"library-button\",\"downloads-button\",\"fxa-toolbar-menu-button\",\"ublock0_raymondhill_net-browser-action\",\"developer-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"personal-bookmarks\"]},\"seen\":[\"save-to-pocket-button\",\"developer-button\",\"ublock0_raymondhill_net-browser-action\"],\"dirtyAreaCache\":[\"nav-bar\"],\"currentVersion\":17,\"newElementCount\":5}");

// Set startup page - Always use DuckDuckGo

/* New tab page activity stream settings moved to securonis.cfg */

/* HTTPS hardening and form data protection settings moved to securonis.cfg */
/* The following settings have been moved to securonis.cfg */
/* - Content security measures */
/* - Safe browsing privacy enhancements */
/* - Network prefetching and speculative connections */

/* Keeping unique activity stream settings that aren't duplicated */
pref("browser.newtabpage.activity-stream.feeds.sections", false);
pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
pref("browser.newtabpage.activity-stream.feeds.topsites", true);
pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
pref("browser.newtabpage.activity-stream.newNewtabExperience.enabled", false);
pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
pref("browser.newtabpage.activity-stream.showSearch", false);
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
// TODO do not allow plugin to start landing page
