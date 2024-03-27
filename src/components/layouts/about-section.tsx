import { Lock, MessageCircle, ThumbsUp } from "lucide-react";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
