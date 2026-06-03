import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = () => {
  return axios.get(API_URL);
};

export const createProduct = (data) => {
  return axios.post(API_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateProduct = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const publishProduct = (id) => {
  return axios.patch(`${API_URL}/${id}/publish`);
};