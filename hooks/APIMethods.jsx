import { useState } from "react";

export default function APIMethods() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const headers = {
    AccessToken: userToken,
    APIKey: API_KEY,
  };

  const GET = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${url}`, {
        headers,
      });
      const json = await response.json();      
      return json;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const POST = async (url, body) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${url}`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        console.log(`Error ${response.status}: ${response.statusText}`);
        throw new Error('Error al intentar acceder al servidor');
      }
      const result = await response.json();
  
      if (result.statuscode == 403 || result.statuscode == 404) {
        setError("Credenciales inválidas");
      }
      return result;
    } catch (error) {
      console.error("Error en POST:", error);
      setError('Error al intentar acceder al servidor');
    } finally {
      setLoading(false);
    }
  };
  

  const PUT = async (url, body) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${url}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      });
      const json = await response.json();
      console.log(json);

      return json.results[0];
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const DELETE = async (url, body) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${url}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify(body),
      });
      const json = await response.json();
      console.log(json);
      
      return json;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, GET, POST, PUT, DELETE,};
}