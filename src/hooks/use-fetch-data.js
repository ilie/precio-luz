import { useEffect, useState } from "react";
import useCurrentTime from "./use-current-time";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [updatedAt, setUpdatedAt] = useState();
  const [error, setError] = useState();

  const currentTime = useCurrentTime();
  const token = localStorage.getItem("token");

  axios.defaults.baseURL = "https://api.esios.ree.es/indicators/10391";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/vnd.esios-api-v1+json";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["x-api-key"] = token;

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get();
      setData(response);
      setUpdatedAt(response.indicator.values[0].datetime);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // if logged in
    if (!!token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  // Fetch data
  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  // Fetch data if outdated
  useEffect(() => {
    const today = currentTime.getDay();
    const lastUpdate = new Date(updatedAt).getDay();
    if (today !== lastUpdate) {
      fetchData();
    }
  }, [currentTime, updatedAt]);

  return {
    data,
    loading,
    isLoggedIn,
    updatedAt,
    error,
  };
};

export default useFetchData;
