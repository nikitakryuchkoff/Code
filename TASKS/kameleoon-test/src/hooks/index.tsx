import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export const useFetch = <T,>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setState((prev) => ({ ...prev, isLoading: true }));

    fetch(url, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Ошибка при выполнении запроса! Статус ошибки: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setState({ data, isLoading: false, error: null });
      })
      .catch((error) => {
        if (!signal.aborted) {
          setState({ data: null, isLoading: false, error: error.message });
        }
      });

    return () => controller.abort();
  }, [url]);

  return state;
};
