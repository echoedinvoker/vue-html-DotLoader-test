import { useQuery } from "@tanstack/vue-query";
import { getRest } from "./apiServices";

export function useHookQuery() {
  const { data, isLoading } = useQuery({
    queryKey: ['query'],
    queryFn: getRest,
    staleTime: 10000
  })
  
  return { data, isLoading }
}
