import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useSiteContent() {
  return useQuery({
    queryKey: ["site-content"],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_content").select("*");
      if (error) throw error;
      const map: Record<string, Record<string, string>> = {};
      data?.forEach((row) => {
        map[row.section_key] = row.content as Record<string, string>;
      });
      return map;
    },
    staleTime: 1000 * 10, // 10 sec cache
    refetchOnWindowFocus: true,
  });
}
