import gql from "graphql-tag";
import { print } from "graphql";

export type Product = {
  handle: string;
  title: string;
  description: string;
  featuredImage: {
    altText: null;
    url: string;
  };
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
};

export type Category = {
  title: string;
  handle: string;
  description: string;
  products: {
    edges: { node: Product }[];
  };
};

export const queryMaleCategory = print(gql`
  query CollectionProducts($productsCount: Int!) {
    collectionByHandle(handle: "categorie-homme") {
      title
      handle
      description
      products(first: $productsCount) {
        edges {
          node {
            handle
            title
            description
            featuredImage {
              altText
              url
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`);

export const queryFemaleCategory = print(gql`
  query CollectionProducts($productsCount: Int!) {
    collectionByHandle(handle: "categorie-femme") {
      id
      title
      handle
      description
      products(first: $productsCount) {
        edges {
          node {
            handle
            title
            id
            description
            featuredImage {
              altText
              url
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`);

export type QueryCategory = {
  collectionByHandle: Category;
};

export const queryProducts = print(gql`
  query GetProducts($productsCount: Int!) {
    products(first: $productsCount) {
      edges {
        node {
          handle
          title
          description
          featuredImage {
            altText
            url
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`);

export type QueryProducts = {
  products: {
    edges: { node: Product }[];
  };
};

export const queryProductDetails = print(gql`
  query ($productHandle: String!) {
    productByHandle(handle: $productHandle) {
      title
      handle
      description
      featuredImage {
        altText
        url
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      collections(first: 3) {
        edges {
          node {
            handle
            title
          }
        }
      }
      tags
    }
  }
`);

export type QueryProductDetails = {
  productByHandle: {
    handle: string;
    title: string;
    description: string;
    featuredImage: {
      altText: null;
      url: string;
    };
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    collections: {
      edges: [
        {
          node: {
            handle: string;
            title: string;
          };
        },
      ];
    };
    tags: string[];
  };
};
