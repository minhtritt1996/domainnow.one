=== Simply Static Pro ===
Contributors: patrickposner
Tags: html, static website generator, static site, secure, fast
Requires at least: 5.4
Tested up to: 5.8
Requires PHP: 7.2.5
Stable tag: 1.0.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Simply Static Pro enhances Simply Static with awesome features like Forms, GitHub integration and comments.

== Description ==

Simply Static Pro is an addon for the quite popular Simply Static Plugin and enhances it with various features.

= Forms =

Currently supported are Contact Form 7 and Gravity Forms. You can use the integrated webhook or use external services to receive the form submits and send you an e-mail.

= Comments =

Simply Static Pro can handle comment submission on your static site with webhooks.

= GitHub Integration =

Simply Static Pro integrates with GitHub. It creates and maintains a repository for you that you can use to deploy your website to one of the various
static site hosters like Vercel, Netlify, GitHub Pages or Cloudflare Pages.

= Builds =

Builds allow you to only export single pages or a subset of pages instead of doing a full static export every time.

= Search =

Simply Static Pro uses Fuse.js and creates a fully static index of your website. It provides a shortcode called [ssp-search] that renders a search bar with auto-suggest.
It's completely independed from any third-party services.

== Changelog ==

= 1.0.3 =

* better Freemius SDK integration
* better check for the free version
* check for wp_filesystem in Forms
* added message (HTML) and custom header for e-mail
* dynamic headers for form integration
* cron-job exection for search index via filter
* added option to deactivate/activate form integration

= 1.0.2 =

* dependency update for Arachnid/Crawler
* better error handling for form generation
* better error handling for search index generation
* new filter to run search index with cron
* automatically create configs directory if not exists
* bumbed version number for CSS (cache busting)

= 1.0.1 =

* fixed PHP notice for static-url
* CPT support for single exports
* form and search config via ajax
* removed form and search config tasks
* better config_url solution with JavaScript
* updated dependencies (Search and GitHub integration)
* added trial support

= 1.0 =

* initial release

