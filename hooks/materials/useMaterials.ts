import { ENDPOINTS } from "@/api/endpoint";
import { MaterialRes } from "@/types/material.type";
import { fetcher } from "@/utils/fetcher.util";
import useSWR, { mutate } from "swr";

export const useMaterials = () => {
  const key = { url: ENDPOINTS.MATERIALS };

  const { data, isLoading, error } = useSWR<MaterialRes[]>(key, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: false,
  });

  const mutateMaterials = async () => await mutate(key);

  return { data, isLoading, mutateMaterials, error };
};
