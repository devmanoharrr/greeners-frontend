import { useEffect, useState } from "react";

const useFetchData = (url) => {


  const [token, setToken] = useState(localStorage.getItem("token") || ""); // Get the token from localStorage

  useEffect(() => {
    // Update token when it changes in local storage
    const updateToken = () => {
      setToken(localStorage.getItem("token") || "");
    };
    window.addEventListener("storage", updateToken);
    return () => window.removeEventListener("storage", updateToken);
  }, []);


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message + "Please refresh");
        }
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);
  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
