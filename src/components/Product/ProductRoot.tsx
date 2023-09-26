import { colors } from "../../constants/colors";
import { Product } from "./styles";

export function ProductRoot({ isFavorite, children }: { isFavorite?: boolean; children: React.ReactNode }) {
  return (
    <Product
      sx={{
        borderColor: isFavorite ? colors.golden : colors.neutral,
      }}
    >
      {children}
    </Product>
  );
}
