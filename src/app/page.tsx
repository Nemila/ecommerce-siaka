import { FeaturedCarousel } from "@/components/featured-carousel";
import AboutSection from "@/components/layouts/about-section";
import CallToAction from "@/components/layouts/call-to-action";
import Products from "@/components/layouts/products";

const HomePage = () => {
  return (
    <main className="container flex flex-col gap-8 p-4 md:p-8">
      <FeaturedCarousel />
      <AboutSection />
      <Products title="Categorie Femme" description="" category="femmes" />
      <Products title="Categorie Homme" description="" category="hommes" />
      <CallToAction />
    </main>
  );
};

export default HomePage;
