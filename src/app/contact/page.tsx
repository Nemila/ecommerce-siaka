import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <main className="flex-1 p-8">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col max-w-lg gap-4">
          <h2 className="font-bold text-4xl">Contactez-nous</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            alias, aliquam praesentium mollitia asperiores quo.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <div className="flex-1 aspect-square overflow-hidden rounded-lg">
            <Image
              alt=""
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1529245019870-59b249281fd3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
            />
          </div>

          <form className="flex flex-1 flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-full">
                <label>Nom</label>
                <Input placeholder="Quel est votre nom" />
              </div>
              <div className="w-full">
                <label>Prenom</label>
                <Input placeholder="Quel est ton prenom" />
              </div>
            </div>

            <div>
              <label>Address Email</label>
              <Input placeholder="Entrez un address email" />
            </div>

            <div>
              <label htmlFor="">Contenu</label>
              <Textarea placeholder="Qu'avez vous a nous dire?" />
            </div>

            <Button>Envoyer</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
