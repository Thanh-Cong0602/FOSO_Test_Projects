import { ENDPOINTS } from "@/api/endpoint";
import { ProductProgressRes } from "@/types/product-progres.type";
import { fetcher } from "@/utils/fetcher.util";
import useSWR, { mutate } from "swr";

export const useProductProgress = () => {
  const key = { url: ENDPOINTS.PRODUCT_PROGRESS };

  const { data, isLoading, error } = useSWR<ProductProgressRes[]>(key, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: false,
  });

  const mutateProductProgress = async () => await mutate(key);

  return { data, isLoading, mutateProductProgress, error };
};
