import { useEffect } from "react";
import { useSiteContent } from "./useSiteContent";

export function useSiteMeta() {
  const { data: content } = useSiteContent();
  const metas = content?.metas as Record<string, string> | undefined;

  useEffect(() => {
    if (!metas) return;

    if (metas.site_title) {
      document.title = metas.site_title;
    }

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el && content) el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', metas.meta_description);
    setMeta('meta[property="og:title"]', metas.og_title || metas.site_title);
    setMeta('meta[property="og:description"]', metas.og_description || metas.meta_description);
    setMeta('meta[property="og:url"]', metas.og_url);
    setMeta('meta[property="og:image"]', metas.og_image);
    setMeta('meta[name="twitter:title"]', metas.og_title || metas.site_title);
    setMeta('meta[name="twitter:description"]', metas.og_description || metas.meta_description);
  }, [metas]);
}
