import axios from "axios";
// import NProgress from 'nprogress' // 进度条
import { Message } from "element-ui";

import { API_BASE_URL } from "@/constants";
// import { AxiosModule } from '@/store/modules/axios'

axios.defaults.withCredentials = true; // 跨域允许带上cookies
axios.defaults.baseURL = API_BASE_URL;

// NProgress.configure({ showSpinner: false })
axios.interceptors.request.use(
  config => {
    // 在request拦截器实现请求前拦截实现
    //   requestLoading(config)
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // 在response拦截器实现 请求后拦截实现
    //   responseLoading(response.config)
    switch (response.data.status_code) {
      case 200:
        response.data = response.data.data;
        break;
      case 400:
      case 403:
        response.status = response.data.status_code;
        response.statusText = response.data.message;
        Message({
          message: response.statusText,
          type: "warning"
        });
        return Promise.reject(response);
      case 401:
        // no login 未登录拦截
        if (!window.location.href.includes("/account/login")) {
          window.location.href = "/account/login";
        }
        break;
      default:
        response.status = response.data.status_code;
        response.statusText = response.data.message;
        if (response.status === 500) {
          Message({
            message: "服务器异常，请稍后重试",
            type: "error"
          });
        }
        return Promise.reject(response);
    }
    return response;
  },
  error => {
    Message({
      message: "网络异常，请稍后重试",
      type: "error"
    });
    console.log(error);
    //   responseLoading(error.response.config)
    return Promise.reject(error);
  }
);
