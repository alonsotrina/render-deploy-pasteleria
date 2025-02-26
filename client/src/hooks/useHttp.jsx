// src/hooks/useHttp.js
import { useState } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url, method = "GET", body = null, headers = {}, token = null) => {

    setLoading(true);
    setError(null);

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    if (body) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, { method, body, headers });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en la solicitud");
      }

      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message || "Error desconocido");
      setLoading(false);
      throw err;
    }
  };

  return { request, loading, error };
};

export default useHttp;
