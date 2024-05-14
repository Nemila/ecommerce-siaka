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

interface ReceiptEmailProps {
  orderNumber: string;
  amount: number;
  clientName: string;
  phone: string;
  productName: string;
  productId: number;
}

export const ReceiptEmail = ({
  orderNumber,
  clientName,
  productName,
  amount,
}: ReceiptEmailProps) => (
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
          Nous vous remercions pour votre achat chez Luxetude. Votre commande a
          été traitée avec succès.
        </Text>

        <Section>
          <Text>N° de Commande : {orderNumber}</Text>
          <Text>Nom de l&apos;article : {productName}</Text>
          <Text>Date de commande : {new Date().toLocaleString()}</Text>
          <Text>Montant Total : {amount} FCFA</Text>
        </Section>

        <Text style={paragraph}>
          Nous vous remercions de votre confiance et espérons que votre
          expérience d&apos;achat avec nous a été agréable. N&apos;hésitez pas à
          nous contacter pour toute question ou besoin supplémentaire.
        </Text>

        <Hr style={hr} />

        <Text style={paragraph}>
          Cordialement,
          <br />
          L&apos;équipe de Luxetude
          <br />
          lexitudebusiness@gmail.com
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

ReceiptEmail.PreviewProps = {
  clientName: "Lamine Diamoutene",
  amount: 2500,
  orderNumber: crypto.randomUUID(),
  productName: "PRODUIT 1",
  productId: 1,
} as ReceiptEmailProps;

export default ReceiptEmail;

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
