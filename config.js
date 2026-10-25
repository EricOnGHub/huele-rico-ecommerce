// PUBLIC browser configuration only. NEVER store Shopify Admin API tokens, payment secrets, or GA service credentials here.
// checkout will refuse to proceed until matching REAL published Shopify variant IDs are configured.
window.HUELE_CONFIG={
 shopifyDomain:'ycxaze-02.myshopify.com', // e.g. your-store.myshopify.com
 storefrontAccessToken:'36cf3e35d3817a328bc6743abdea1b23', // public Storefront API token, NOT Admin API token
 apiVersion:'2026-07',
 productVariantIds:{}, // map demo product IDs to REAL Shopify variant GIDs only after replacing all demo catalog prices
 ga4MeasurementId:'', // G-XXXXXXXXXX
 metaPixelId:'',
 newsletterEndpoint:'',
 siteUrl:'', // https://www.example.com, canonical only after production launch
 analyticsConsentRequired:true
};
