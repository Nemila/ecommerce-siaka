import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const shopify = createStorefrontApiClient({
  storeDomain: "https://siaka-commerce.myshopify.com/",
  apiVersion: "2024-01",
  publicAccessToken: "cadc6cf39500d89cf821500abd12e642",
});

export default shopify;
