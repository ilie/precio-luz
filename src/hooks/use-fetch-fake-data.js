import axios from "axios";
import { useEffect, useState } from "react";
import useCurrentTime from "./use-current-time";

const useFetchFakeData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [updatedAt, setUpdatedAt] = useState();

  const currentTime = useCurrentTime();
  const token = localStorage.getItem("token");
  const url =
    "https://precio-luz-api-default-rtdb.europe-west1.firebasedatabase.app/indicator.json";

  const tokenExists = () => {
    if (token === null) {
      return false;
    }
    if (token === "") {
      return false;
    }
    return true;
  };
  const fetchFakeData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(url, {
        headers: {
          Accept: "application/json; odata=verbose",
        },
      });
      setData(response);
      setUpdatedAt(response.indicator.values_updated_at);
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
      fetchFakeData();
    }
  }, [isLoggedIn]);

  // Fetch data if outdated
  useEffect(() => {
    const today = currentTime.getDay();
    const lastUpdate = new Date(updatedAt).getDay();
    if (today !== lastUpdate) {
      fetchFakeData();
    }
  }, [currentTime]);

  return {
    data,
    loading,
    isLoggedIn,
    updatedAt,
  };
};

export default useFetchFakeData;
