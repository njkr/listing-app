// api.js
import axios from "axios";

const API_URL =
  "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllData = async () => {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    throw error;
  }
};
