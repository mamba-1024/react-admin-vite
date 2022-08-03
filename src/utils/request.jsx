import { message } from 'antd';
import axios from 'axios';

const requestHost = 'https://www.fastmock.site/mock/750e52b38d306262a62ff61d1858d451/kt';

axios.defaults.baseURL = requestHost;
axios.defaults.timeout = 10000;
axios.defaults.headers.common.Authorization = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';


function fetch({ url, method, data, headers }) {
  switch (method) {
  case 'get':
    return axios.get(url, { params: data }, { headers });
  case 'post':
    return axios.post(url, data, { headers });
  case 'put':
    return axios.put(url, data, { headers });
  case 'delete':
    return axios.delete(url, data, { headers });
  default:
    return axios.get(url, { params: data }, { headers });
  }
}

export async function request({ url, method, data, headers }) {
  const res = await fetch({ url, method, data, headers });

  if (res.status === 200) {
    return res.data.data;
  }
  message.error(res.data.message);
  return Promise.reject(res.data);
}

