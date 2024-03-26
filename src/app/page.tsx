import { FeaturedCarousel } from "@/components/featured-carousel";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Lock, MessageCircle, ThumbsUp } from "lucide-react";

const HomePage = () => {
  return (
    <main className="container flex flex-col gap-8 p-4 md:p-8">
      <FeaturedCarousel />

      <div className="grid overflow-hidden rounded-lg border md:grid-cols-3">
        <div className="group flex aspect-video flex-col justify-center gap-2 bg-white p-6">
          <ThumbsUp className="h-8 w-8 transition-all group-hover:-translate-y-2" />
          <p className="text-lg font-bold">96% Satisfait</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            consectetur.
          </p>
        </div>

        <div className="group flex aspect-video flex-col justify-center gap-2 border-x-0 border-y bg-white p-6 md:border-x md:border-y-0">
          <MessageCircle className="h-10 w-10 transition-all group-hover:-translate-y-2" />
          <p className="text-lg font-bold">Discuss with designers</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            consectetur.
          </p>
        </div>

        <div className="group flex aspect-video flex-col justify-center gap-2 bg-white p-6">
          <Lock className="h-8 w-8 transition-all group-hover:-translate-y-2" />
          <p className="text-lg font-bold">Secured transactions</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            consectetur.
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold md:text-2xl">
              Categorie Femmes
            </h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <Button variant="outline">Voir Product</Button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold md:text-2xl">
              Categorie Hommes
            </h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <Button variant="outline">Voir Product</Button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <div className="w-full overflow-hidden rounded-lg">
        <div className="relative isolate flex items-center justify-center gap-x-20 overflow-hidden bg-gray-900 px-4 pt-0 shadow-2xl md:px-24">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-0 flex max-w-md flex-auto flex-col items-center py-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-4 text-base text-gray-300 md:text-lg md:leading-8">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel.
            </p>
            <div className="mt-4 flex items-center justify-center gap-x-6">
              <Button variant="secondary">Voir Produits</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
