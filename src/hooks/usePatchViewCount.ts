import { useEffect, useState } from "react";
import IViewCount from "../interfaces/IViewCount";
import { patchViewCount } from "../api/services/ViewCountService";
import { AxiosError } from "axios";

export default function usePatchViewCount(): [
  number | undefined,
  boolean,
  AxiosError | null
] {
  const [viewCount, setViewCount] = useState<number>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const addViewCount = async () => {
      try {
        const viewCount: IViewCount = await patchViewCount();
        setViewCount(viewCount.viewCount);
        setLoading(false);
      } catch (e) {
        const error = e as AxiosError;
        setError(error);
        setLoading(false);
      }
    };

    addViewCount();
  }, []);

  return [viewCount, loading, error];
}
