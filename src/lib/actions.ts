import axios from "axios";

export const getFeaturedProducts = async () => {
  try {
    const res = await axios(
      `${process.env.STRAPI_API_ENDPOINT}/api/featured?populate=products,products.banner,products.thumbnail`,
      {
        headers: {
          Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    );

    const featuredProducts = res.data.data.attributes.products.data.map(
      (item: any) => ({ id: item.id, ...item.attributes }),
    );
    return featuredProducts;
  } catch (error: any) {
    console.log(error.message);
  }
};
