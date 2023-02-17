import { useEffect, useState } from "react";
import useCurrentTime from "./use-current-time";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [updatedAt, setUpdatedAt] = useState();

  const currentTime = useCurrentTime();
  const token = localStorage.getItem("token");

  axios.defaults.baseURL = "https://api.esios.ree.es/indicators/10391";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["x-api-key"] = token;

  const tokenExists = () => {
    if (token === null) {
      return false;
    }
    if (token === "") {
      return false;
    }
    return true;
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get();
      setData(response);
      setUpdatedAt(response.indicator.values[0].datetime);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // if logged in
    if (tokenExists()) {
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
  }, [currentTime]);

  return {
    data,
    loading,
    isLoggedIn,
    updatedAt,
  };
};

export default useFetchData;
