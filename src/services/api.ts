import axios from "axios";
import { QueryClient } from "react-query";

export const api = axios.create({
  baseURL: "",
});

export const queryClient = new QueryClient();
