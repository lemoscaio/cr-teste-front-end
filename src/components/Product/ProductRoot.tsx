import { Product } from "./styles";

export function ProductRoot({ isFavorite, children }: { isFavorite?: boolean; children: React.ReactNode }) {
  return (
    <Product
      sx={{
        borderColor: isFavorite ? "#FFC000" : "#E0E0E0",
      }}
    >
      {children}
    </Product>
  );
}
