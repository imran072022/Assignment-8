import axios from "axios";
import { useEffect, useState } from "react";

const useAppsData = () => {
  const [apps, setApps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios("../appData.json")
      .then((data) => setApps(data.data))
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);
  return { apps, error, loading };
};
export default useAppsData;
