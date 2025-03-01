import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api-client';

export type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T>(endpoint: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true }));
        const response = await apiClient.get<T>(endpoint);
        setState({
          data: response.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'An error occurred',
        });
      }
    };

    fetchData();
  }, [endpoint]);

  return state;
} 