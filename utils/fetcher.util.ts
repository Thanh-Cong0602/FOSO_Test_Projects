/* eslint-disable @typescript-eslint/no-explicit-any */

import { API, API_1, API_2 } from "@/api/instance";

export const fetcher = async (key: any) => {
  const response = await API.get(key.url, { params: key.params });
  const data = await response.data;
  return data;
};

export const fetcherPost = async (key: any) => {
  const response = await API.post(key.url, key.body);
  const data = await response.data;
  return data;
};

export const fetcher1 = async (key: any) => {
  const response = await API_1.get(key.url, { params: key.params });
  const data = await response.data;
  return data;
};

export const fetcher2 = async (key: any) => {
  const response = await API_2.get(key.url, { params: key.params });
  const data = await response.data;
  return data;
};
