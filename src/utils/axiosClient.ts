import axios from "axios";
import { handleApiError } from "./handleError";
import toast from "react-hot-toast";

const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_BACKEND_API_DEVELOPMENT_URL
    : import.meta.env.VITE_BACKEND_API_PRODUCTION_URL;

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response) {
      const errorMessage = handleApiError(error);
      toast.error(errorMessage);
      return Promise.reject(new Error(errorMessage));
    } else if (error.request) {
      toast.error("Không thể kết nối đến máy chủ. Vui lòng thử lại sau.");
      return Promise.reject(
        new Error("Không thể kết nối đến máy chủ. Vui lòng thử lại sau.")
      );
    } else {
      toast.error("Đã xảy ra lỗi. Vui lòng thử lại sau.");

      return Promise.reject(new Error("Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  }
);

export default axiosClient;
