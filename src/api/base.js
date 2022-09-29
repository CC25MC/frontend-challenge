import { create } from "axios";

export const request = create({
  baseURL: "http://localhost:4000",
  timeout: 30000
});
