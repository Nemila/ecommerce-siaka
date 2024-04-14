import prisma from "@/lib/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const res = await req.json();
    console.log(res.data);
    const order = await prisma.commande.create({
      data: {
        address: res.data.address,
        nom: res.data.nom,
        prenom: res.data.prenom,
        telephone: res.data.telephone,
        email: res.data.email,
        produitId: res.data.productHandle,
        prix: Number(res.data.prix),
      },
    });

    const email = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["pridila.2006@gmail.com"],
      subject: `Nouvelle commande ${order.produitId}`,
      text: `Vous avez une nouvelle commande. Les informations ont etes enregistrees dans la base de donnees. Informations du client: Email: ${order.email}, Telephome: ${order.telephone}, Identifiant du produit: ${order.produitId}`,
    });

    return Response.json({ email, status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ error, status: 200 });
  }
}
