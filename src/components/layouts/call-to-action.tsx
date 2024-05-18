import { Button } from "@/components/ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
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
            Malesuada adipiscing sagittis.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-6">
            <Button variant="secondary" asChild>
              <Link href={"/products"}>Voir Produits</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
