import { ENDPOINTS } from "@/api/endpoint";
import { ProductionPlanRes } from "@/types/production-plan.type";
import { fetcher1 } from "@/utils/fetcher.util";
import useSWR, { mutate } from "swr";

export const useProductionPlan = () => {
  const key = { url: ENDPOINTS.PRODUCTION_PLAN };

  const { data, isLoading, error } = useSWR<ProductionPlanRes[]>(key, fetcher1, {
    shouldRetryOnError: false,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: false,
  });

  const mutateProductionPlan = async () => await mutate(key);

  return { data, isLoading, mutateProductionPlan, error };
};
