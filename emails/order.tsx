import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface OrderEmailProps {
  orderNumber: string;
  amount: number;
  clientName: string;
  phone: string;
  productName: string;
  productId: number;
}

export const OrderEmail = ({
  orderNumber,
  clientName,
  amount,
  phone,
  productName,
  productId,
}: OrderEmailProps) => (
  <Html>
    <Head />
    <Preview>Nouvelle commande effectuee</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://react-email-demo-ndjnn09xj-resend.vercel.app/static/koala-logo.png`}
          width="170"
          height="50"
          alt="Luxetude"
          style={logo}
        />
        <Text style={paragraph}>Bonjour {clientName},</Text>

        <Text style={paragraph}>
          Nous sommes heureux de vous informer qu&apos;une nouvelle commande a
          été passée sur votre site. Voici les détails :
        </Text>

        <Section>
          <Text>N° de Commande : {orderNumber}</Text>
          <Text>Date de commande : {new Date().toLocaleString()}</Text>
          <Text>Montant Total : {amount} FCFA</Text>
        </Section>

        <Hr style={hr} />

        <Section style={{ display: "flex" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Détails du Client :
          </Text>
          <Text>Nom : {clientName}</Text>
          <Text>Numero de telephone : {phone}</Text>
        </Section>

        <Hr style={hr} />

        <Section>
          <Text style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Résumé de la Commande :
          </Text>
          <Text>Nom de l&apos;article : {productName}</Text>
          <Text>Identifiant de l&apos;article : {productId}</Text>
        </Section>

        <Text style={paragraph}>
          Cordialement,
          <br />
          L&apos;équipe de Luxetude
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

OrderEmail.PreviewProps = {
  clientName: "Lamine Diamoutene",
  address: "Sirakoro Meguetana, Cite BMS",
  amount: 2500,
  orderNumber: crypto.randomUUID(),
  phone: "+223 79 15 35 05",
  productName: "PRODUIT 1",
  productId: 1,
} as OrderEmailProps;

export default OrderEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
