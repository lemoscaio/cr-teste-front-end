import { Box } from "@mui/material";

import { Products } from "../components/Products";
import { Title } from "../components/Title";
import { AppContainer } from "./styles";

export function ProductsPage() {
  return (
    <AppContainer>
      <Title text="Produtos" />
      <Box>
        <Products />
      </Box>
    </AppContainer>
  );
}
