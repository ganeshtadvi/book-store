import axios from "axios";

const baseUrl = "http://localhost:8000/auth";

const signUp = async (newUser) => {
  const response = await axios.post(`${baseUrl}/signup`, newUser);
  return response.data;
};

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export { login, signUp };
