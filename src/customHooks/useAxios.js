import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(url)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => setError("Something went Wrong! Try again later!"))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};

export default useAxios;
