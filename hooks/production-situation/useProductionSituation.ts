import { ENDPOINTS } from "@/api/endpoint";
import { ProductionSituationRes } from "@/types/production-situation.type";
import { fetcher2 } from "@/utils/fetcher.util";
import useSWR, { mutate } from "swr";

export const useProductionSituation = () => {
  const key = { url: ENDPOINTS.PRODUCTION_SITUATION };

  const { data, isLoading, error } = useSWR<ProductionSituationRes[]>(key, fetcher2, {
    shouldRetryOnError: false,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: false,
  });

  const mutateProductionSituation = async () => await mutate(key);

  return { data, isLoading, mutateProductionSituation, error };
};
