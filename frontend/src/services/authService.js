import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}/auth`

const signUp = async (newUser) => {
  const response = await axios.post(`${baseUrl}/signup`, newUser);
  return response.data;
};

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export { login, signUp };
