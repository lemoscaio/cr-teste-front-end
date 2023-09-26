import { QueryClientProvider } from "react-query";
import { ProductsPage } from "./pages/ProductsPage";
import { queryClient } from "./services/api";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductsPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
