const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const API_URLS_CONVERT = {
  length: import.meta.env.VITE_API_URL_LENGTH,
  temperature: import.meta.env.VITE_API_URL_TEMPERATURE,
  weight: import.meta.env.VITE_API_URL_WEIGHT
}

export const convertUnit = async (value, from, to, API_WORD) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(`${API_URL}${API_URLS_CONVERT[API_WORD]}${value}.${from}.${to}`, requestOptions);
    const result = await response.json();
    return result.body;
  } catch (error) {
    console.error("Error during unit conversion:", error);
    throw error;
  }
};