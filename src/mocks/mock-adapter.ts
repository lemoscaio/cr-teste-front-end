import MockAdapter from "axios-mock-adapter";
import { api } from "../services/api";
import products from "./products.json";

const mockAdapter = new MockAdapter(api, { delayResponse: 1000, onNoMatch: "passthrough" });

mockAdapter.onGet("products").reply(200, products);
