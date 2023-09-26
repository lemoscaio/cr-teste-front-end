import { useQuery } from "react-query";
import { api } from "../../services/api";
import { TProduct } from "../../types";

import "./../../mocks/mock-adapter";

export function useGetProducts() {
  return useQuery("products", () => api.get<TProduct[]>("products").then((response) => response.data));
}
