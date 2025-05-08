import axios from 'axios';
const myAxios = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 2000,
})

myAxios.interceptors.request.use(
  (config) => { 
    // 从cookie中获取token
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
    // 如果token存在，则将其添加到请求头中
    console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => { 
    return Promise.reject(error);
  }
);

myAxios.interceptors.response.use(
  (response) => {
    // 处理响应数据
    return response;
  },
  (error) => {
    // 处理响应错误
    if (error.status === 401) { 
      // token过期或无效，跳转到登录页面
      window.location.href = 'http://loacalhost:3000/login';
      console.log(111)
    }
    return;
  }
);

export default myAxios;