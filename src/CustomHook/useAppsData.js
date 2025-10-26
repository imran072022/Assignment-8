import axios from "axios";
import { useEffect, useState } from "react";

const useAppsData = () => {
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../appData.json")
      .then((data) => setApps(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { apps, error, loading };
};
export default useAppsData;
