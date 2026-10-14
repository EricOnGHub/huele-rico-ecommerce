# Huele Rico! — Go-Live Setup

## Status
The site is a functional bilingual shopping prototype with local cart and a Shopify Storefront API checkout bridge. No payments will be charged until configuration is completed. Product names, displayed prices, comparisons and bottle illustrations are **examples**, not actual available inventory or verified retailer prices. The newsletter endpoint is not connected. The site is intentionally `noindex` until it is launch-ready.

## 1. Shopify commerce & payment methods
1. Open a Shopify store and share **myshopify.com store domain** (not login/password).
2. Activate **Shopify Payments** inside Shopify admin (business verification and deposit account are entered directly in Shopify). Confirm supported credit/debit card networks and **Apple Pay / Google Pay / Shop Pay** on your account, device and domain. These wallets run through Shopify's hosted checkout.
3. Add verified fragrance inventory as Shopify products/variants; record proper SKU, GTIN if held, size, concentration, stock, verified selling price, and supportable original comparable price. Avoid MSRP or strikethrough claims without evidence. Product pages should say independent reseller, not authorized by a brand unless true.
4. Create a public Storefront API access token with the correct cart/checkout permissions and allowed domains. Configure `config.js` `shopifyDomain`, `storefrontAccessToken` and `productVariantIds`. **Only expose a token explicitly designated for the public browser Storefront API. NEVER expose Shopify Admin API tokens, private app keys or payment secrets.**
5. Replace the hardcoded `inventory` in `app.js` with a verified Shopify product feed and bind to real variant IDs before enabling checkout. Currently app blocks checkout when mappings missing, by design.
6. Configure shipping zones and rates, tax registrations, return/exchange policy, customer emails, refund settings, payment statement descriptor, fraud review and perfume-compliant fulfillment before going live. Alcohol-based fragrances may be regulated as hazardous materials for shipment and can need ground service and labeling under carrier rules. Only claim fast/free shipping if operationally true.

## 2. Domain, hosting, SSL
Choose domain (e.g. huelerico.com if owned), registrar/DNS host, and GitHub Pages / Netlify / Vercel hosting (GitHub Pages cannot keep browser API secrets private). Connect HTTPS, DNS, canonical URL and Shopify allowed origins. Do not put sensitive secrets in a client-only website.

## 3. Search engine optimization
- Set real page title, description and one canonical URL per indexable page.
- Convert demo catalog into **individual crawlable product pages** with real structured `Product` data, pricing, stock, variant sizes, descriptive content, verified reviews and product photos. Avoid markup for fabricated reviews, ratings, offers or inventory.
- Create category pages (men/women/unisex, brands), bilingual URLs (`/en/`, `/es/`), correct `hreflang`, language-specific page title/metadata and SEO copy.
- Add actual `robots.txt` and dynamic `sitemap.xml` based on real published URLs. Current demo intentionally uses `noindex,nofollow` in `index.html`. Remove only after verified live launch.
- Verify domain in **Google Search Console**; submit sitemap, request indexing after launch and fix coverage issues.
- Link Google Merchant Center to real products, accurate images, returns and shipping policies for free listings/ads.

## 4. Google Analytics 4 and advertising
Create a GA4 web stream and provide public Measurement ID (`G-...`). Optionally give Meta Pixel ID (numeric), Google Ads conversion ID, Google Tag Manager container ID, and Google Search Console verification method.
Configure public IDs in `config.js`. Analytics scripts load only after customer consent; the current consent prompt is a foundation, not a complete jurisdiction-specific consent-management platform. Implement a full consent-management solution for applicable privacy rules before real launch.
Shopify must record `purchase` and transaction details following completed checkout, via its supported pixel/customer event setup or server integration. A static storefront cannot reliably infer purchase completion from checkout redirect alone. Review duplicate-event prevention and GA4/Meta attribution.
Enable `view_item`, `view_item_list`, `add_to_cart`, `begin_checkout`, `purchase`, refunds and cross-domain measurement during production instrumentation.

## 5. Email, SMS, social
Choose Shopify Email/Klaviyo (and optionally Attentive/Postscript), provide the public signup integration configuration, confirm consent language and double opt-in decisions. Enable welcome, cart abandonment, fulfillment and post-purchase flows. SMS marketing requires separate legally compliant opt-in; don't repurpose contact data.

## 6. Required customer-facing policies and business details
Legal business/trade name, mailing address, customer support email, support hours, customer-service phone if used, customer data/privacy policy, accessibility contact, Terms of Service, shipping/returns/refunds/ damaged goods terms, sales tax registration approach and third-party brand/trademark disclaimer.
The 100% authentic guarantee should describe how authenticity is verified and what remedy customers receive. Batch codes alone do not prove authenticity; avoid absolute claims unless backed by process.

## 7. Branding and assets
The supplied imagery is preserved in the ChatGPT Library under `Huele Rico/Brand Identity` and `Huele Rico/Lifestyle Campaigns`. **Several contain fictional Huele Rico-branded perfume bottles** and should not be used on the live independent-designer retailer storefront until the bottles are removed. Use cleared lifestyle photos (people without bottles) and licensed/owned real designer-product images. Do not use the mockup Huele Rico perfumes as sellable products.
Approved palette: royal plum, velvet plum, soft ivory, champagne gold and charcoal noir. Primary campaign: **Huele Rico, Paga Menos.**

## 8. Test before launch
Test EN/ES switching, browser/mobile, cart persistence, tax/shipping prices, actual variant stock, discount validity, checkout wallets on eligible devices, payment capture/refund with Shopify test mode, order notifications, fraud controls, fulfillment, accessibility, Core Web Vitals, SEO metadata, sitemap, Analytics purchase/refund conversion attribution and all customer-facing policies.

## Details needed from owner (do not share secrets in chat)
- Shopify shop domain and confirmation Shopify Payments has been activated in the Shopify admin.
- Store domain and hosting choice, and ability to update DNS.
- Real product import feed (CSV/Excel) including all variants, SKUs, prices, availability, images and verifiable comparison prices.
- Shipping fulfillment origin, carrier, US shipping coverage, estimated timelines and returns address.
- Legal business details and refund/privacy/terms policies.
- GA4 Measurement ID; Search Console verification; optional Meta Pixel ID, GTM Container ID, Merchant Center, Google Ads IDs.
- Email/SMS provider choice and public integration instructions.
- Option for public Shopify Storefront API token through safe configuration; any PRIVATE credentials must be added only in the provider's secure settings, not in public GitHub.
