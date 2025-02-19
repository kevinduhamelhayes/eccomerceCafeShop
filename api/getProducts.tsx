
import { useState, useEffect } from 'react'
export function useGetCategories() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        setLoading(false);
      }
    })();
  }, [url]);
  return { result, loading, error };
}