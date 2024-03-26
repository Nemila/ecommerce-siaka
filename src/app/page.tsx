import { FeaturedCarousel } from "@/components/featured-carousel";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Lock, MessageCircle, ThumbsUp } from "lucide-react";

const HomePage = () => {
  return (
    <main className="container flex flex-col gap-8 p-8">
      <FeaturedCarousel />

      <div className="grid grid-cols-3 border rounded-lg overflow-hidden">
        <div className="group bg-white aspect-video flex flex-col justify-center gap-2 p-6">
          <ThumbsUp className="w-8 h-8 transition-all group-hover:-translate-y-2" />
          <p className="text-lg font-bold">96% Satisfait</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            consectetur.
          </p>
        </div>

        <div className="bg-white group border-x aspect-video flex flex-col justify-center gap-2 p-6">
          <MessageCircle className="w-10 h-10 transition-all group-hover:-translate-y-2" />
          <p className="text-lg font-bold">Discuss with designers</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            consectetur.
          </p>
        </div>

        <div className="bg-white group aspect-video flex flex-col justify-center gap-2 p-6">
          <Lock className="w-8 h-8 transition-all group-hover:-translate-y-2" />
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
            <h2 className="font-semibold text-2xl">Vetements pour femmes</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <Button variant="outline">Voir Product</Button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-2xl">Vetements pour hommes</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <Button variant="outline">Voir Product</Button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <div className="w-full rounded-lg overflow-hidden">
        <div className="relative isolate overflow-hidden bg-gray-900 shadow-2xl gap-x-20 px-24 pt-0 flex justify-center items-center">
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
          <div className="max-w-md mx-0 flex-auto flex flex-col items-center py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
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
