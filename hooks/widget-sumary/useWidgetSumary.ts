import { ENDPOINTS } from "@/api/endpoint";
import { WidgetSumaryRes } from "@/types/widget-sumary.type";
import { fetcher1 } from "@/utils/fetcher.util";
import useSWR, { mutate } from "swr";

export const useWidgetSumary = () => {
  const key = { url: ENDPOINTS.WIDGET_SUMARY };

  const { data, isLoading, error } = useSWR<WidgetSumaryRes[]>(key, fetcher1, {
    shouldRetryOnError: false,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: false,
  });

  const mutateWidgetSummary = async () => await mutate(key);

  return { data, isLoading, mutateWidgetSummary, error };
};
