import { ENDPOINTS } from "@/api/endpoint";
import { HighLightCustomerRes } from "@/types/highlight-customer.type";
import { fetcher2 } from "@/utils/fetcher.util";
import useSWR, { mutate } from "swr";

export const useHighlightCustomer = () => {
  const key = { url: ENDPOINTS.HIGHLIGHT_CUSTOMER };

  const { data, isLoading, error } = useSWR<HighLightCustomerRes[]>(key, fetcher2, {
    shouldRetryOnError: false,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: false,
  });

  const mutateHighlightCustomer = async () => await mutate(key);

  return { data, isLoading, mutateHighlightCustomer, error };
};
