import { useState, useEffect } from "react";
import axios from "axios";

function UseFetchData(url, queryParams) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, { params: queryParams });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url, queryParams]);

  return { data, error, isLoading };
}

export default UseFetchData;
