"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QueryProductDetails } from "@/lib/queries";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  nom: z.string().min(2).max(50),
  prenom: z.string().min(2).max(50),
  email: z.string().email(),
  telephone: z.string().min(8),
  address: z.string(),
});

export function OrderModal({ product }: { product: QueryProductDetails }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await axios.post("/api/send", {
        data: {
          ...values,
          productHandle: product.productByHandle.handle,
          prix: product.productByHandle.priceRange.maxVariantPrice.amount,
        },
      });

      if (res.status === 200) {
        alert(JSON.stringify(res.data));
        form.reset({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          address: "",
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Commander</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Commande de &quot;{product.productByHandle.title}&quot;
          </DialogTitle>
          <DialogDescription>
            Veuillez entrez les informations
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nom" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="prenom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Prenom" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Telephone" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Address" {...field} required />
                    </FormControl>
                    <FormDescription>
                      Nous allons vous contacter pour plus de details
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
