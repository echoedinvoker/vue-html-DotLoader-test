import { useQuery } from "@tanstack/vue-query";
import { defineStore } from "pinia";
import { getRest } from "./apiServices";

export const usePiniaQueryStore = defineStore('query', () => {
  const { data, isLoading } = useQuery({
    queryKey: ['query'],
    queryFn: getRest,
    staleTime: 10000
  })

  return { data, isLoading }
})
