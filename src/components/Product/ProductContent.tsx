import { ProductName, ProductDescription, ProductPrice, Content } from "./styles";

function formatPrice(priceInCents: number) {
  return `R$ ${(priceInCents / 100).toFixed(2).replace(".", ",")}`;
}

export function ProductContent({ title, description, price }: { title: string; description: string; price: number }) {
  return (
    <Content>
      <ProductName align="center">{title}</ProductName>
      <ProductDescription align="center">{description}</ProductDescription>
      <ProductPrice align="center">{formatPrice(price)}</ProductPrice>
    </Content>
  );
}
