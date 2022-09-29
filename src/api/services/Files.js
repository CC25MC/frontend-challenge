import { request } from "../base";

const endpoints = {
  getFiles: "/files/data",
  getFile: "/files/data/?filename=",
  getListFiles: "/files/list",
};

export const getFiles = async () => {
  const res = await request.get(endpoints.getFiles);
  return res.data;
};
export const getFile = async (filename) => {
  const res = await request.get(endpoints.getFile + filename);
  return res.data;
};
export const getListFiles = async () => {
  const res = await request.get(endpoints.getListFiles);
  return res.data;
};
