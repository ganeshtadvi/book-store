import axios from "axios";

const baseUrl = "http://localhost:8000/api/books";

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const getAllBooks = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

export const getPopularBooks = async () => {
  const data = axios.get(`${baseUrl}/popular`);
  return data.then((d) => d.data);
};

export const getBookById = async (id) => {
  return await axios.get(`${baseUrl}/${id}`).then((response) => response.data);
};

export const addBookToCart = async (id, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const request = await axios.put(
    `${baseUrl}/addToCart`,
    { bookId: id },
    config,
  );

  return request.data;
};

export const getTotalCart = async (user) => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  const request = await axios.get(`${baseUrl}/get-total-cart-items`, config);
  return request.data;
};

export const getCartItems = async (user) => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  const request = await axios.get(`${baseUrl}/allCartItems`, config);
  return request.data;
};

export const changeCartItems = async (user, book, newQty) => {
  const config = {
    headers: { Authorization: `Bearer ${user.token} ` },
  };

  const newQuantityObj = {
    bookId: book,
    newQty: newQty,
  };

  const request = await axios.put(
    `${baseUrl}/updateCartQuantity`,
    newQuantityObj,
    config,
  );

  return request.data;
};

export const removeCartItems = async (user, bookId) => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  const request = await axios.delete(`${baseUrl}/deleteCartItems`, {
    ...config,
    data: { bookId },
  });

  return request.data;
};
