import { OrderEmail } from "@/../emails/order";
import ReceiptEmail from "@/../emails/receipt";
import products from "@/lib/products.json";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import React from "react";
import { Resend } from "resend";

const email = "lexitudebusiness@gmail.com";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: NextRequest) {
  auth().protect();

  const productId = Number(req.nextUrl.searchParams.get("productId"));
  if (isNaN(productId))
    return new Response("Invalid productID", { status: 400 });

  const product = products.find((item) => item.id === productId);
  if (!product) return new Response("Product not found", { status: 404 });

  const user = await currentUser();
  if (!user) return new Response("Unauthorized", { status: 401 });
  if (!user.primaryEmailAddress?.emailAddress)
    return new Response("Please provide an email address", { status: 400 });

  const orderNumber = crypto.randomUUID();

  const { error: ownerEmailError } = await resend.emails.send({
    from: "Luxetude <onboarding@resend.dev>",
    to: "pridila.2006@gmail.com",
    subject: `Nouvelle Commande Reçue - N° de Commande ${orderNumber}`,
    react: OrderEmail({
      amount: product.price,
      orderNumber: orderNumber,
      clientName:
        user.fullName ?? user.username ?? user.primaryEmailAddress.emailAddress,
      phone: user.phoneNumbers[0].phoneNumber,
      productId: productId,
      productName: product.title,
    }) as React.ReactElement,
  });

  if (ownerEmailError)
    return new Response(ownerEmailError.message, { status: 400 });

  const { error: clientEmailError } = await resend.emails.send({
    from: "Luxetude <onboarding@resend.dev>",
    to: user.primaryEmailAddress.emailAddress,
    subject: `Luxetude Confirmation de votre commande`,
    react: ReceiptEmail({
      amount: product.price,
      orderNumber: orderNumber,
      clientName:
        user.fullName ?? user.username ?? user.primaryEmailAddress.emailAddress,
      phone: user.phoneNumbers[0].phoneNumber,
      productId: productId,
      productName: product.title,
    }) as React.ReactElement,
  });

  if (clientEmailError)
    return new Response(clientEmailError.message, { status: 400 });

  return redirect("/success");
}
