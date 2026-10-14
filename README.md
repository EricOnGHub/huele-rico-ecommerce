# Huele Rico! — Ecommerce Storefront

**Huele Rico, Paga Menos.**

Bilingual (English / Español) ecommerce storefront for **authentic original designer perfumes and colognes**. Huele Rico! is an **independent multi-brand retailer**, not a fragrance manufacturer.

## Project status

**Preview / development — not ready to accept payments.** The existing catalog and prices are illustrative demonstration data. The site blocks live checkout until real Shopify product variants and a public Storefront API token are configured. Do not represent example prices, discounts, photos, inventory, or shipping claims as verified facts.

## Preview

Once GitHub Pages is enabled for the `main` branch (root folder), the staging site should be available at:

https://ericonghub.github.io/huele-rico-ecommerce/

To enable: **Repository → Settings → Pages → Deploy from a branch → main → / (root) → Save**. GitHub may take a few minutes to publish.

## Features

- Responsive plum, ivory, and gold brand styling
- English / Spanish language switcher
- Demo fragrance catalog with men's, women's, and unisex categories
- Search, sorting, item details, and persistent shopping bag
- Shopify Storefront API secure checkout integration (disabled until configured)
- Optional GA4 and Meta Pixel tracking with basic consent controls
- SEO starter metadata; preview explicitly blocked from indexing
- Newsletter signup UI, requiring a real provider endpoint

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Storefront markup and SEO metadata |
| `styles.css` | Responsive styling |
| `app.js` | Bilingual content, demo catalog, cart, and storefront interactions |
| `config.js` | **Public-only** configuration values |
| `integrations.js` | Shopify checkout creation and analytics |
| `robots.txt` | Blocks indexing while the site is in demo mode |
| `SETUP.md` | Detailed production checklist and owner requirements |

## Run locally

This is currently a static site: open `index.html` in a browser, or use a local static server such as:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Go live checklist

1. Register and connect `huelerico.com`, set DNS, confirm HTTPS and production host.
2. Create a Shopify store, verify Shopify Payments, and enable eligible credit/debit card and express wallet payment methods (Apple Pay / Google Pay).
3. Import **real verified products**, original product images, accurate inventory, SKUs and prices, and evidence-backed compare-at prices. The intended campaign target is **25%+ below comparable department-store retail**, not a guarantee for every unverified item.
4. Replace the demo catalog with Shopify Storefront API products and actual variant IDs.
5. Populate `config.js` with the public storefront token, Shopify domain, and optional public GA4/Meta IDs; never commit Admin API tokens or other secrets.
6. Configure shipping (including applicable perfume transport requirements), tax, customer service, returns, privacy and terms.
7. Configure and test email capture, transactional notifications and completed-purchase analytics.
8. Create crawlable product/category pages, canonical metadata, valid schema and a real sitemap; remove `noindex` / update `robots.txt` **only when launched**.
9. Test checkout, refunds, fulfillment, mobile usability, accessibility, and both languages.

See [SETUP.md](SETUP.md) for detailed instructions.

## Brand and image usage

Primary campaign: **Huele Rico, Paga Menos.** The creative direction is urban and modern, featuring Latino and Afro-Latino lifestyle imagery. Brand boards and supplied lifestyle artwork are saved in the user's ChatGPT Library. Any creative depicting fictional **Huele Rico-branded fragrance bottles** must be edited to remove them before using it to advertise the real designer-fragrance assortment. Real product listings require properly sourced product photography and truthful descriptions.

## Disclaimer

Third-party brand names and marks identify products belonging to their respective owners. Huele Rico! does not imply affiliation, authorization, sponsorship or endorsement by any designer brand unless specifically established.
