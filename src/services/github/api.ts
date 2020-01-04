import axios from "axios";
import camelcaseKeys from "camelcase-keys";

import { User } from "./models";

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: "https://api.github.com",
  timeout: 7000
};

const createAxiosInstance = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig
  };
  const instance = axios.create(config);
  instance.interceptors.response.use(res => ({
    ...res,
    data: camelcaseKeys(res.data, { deep: true })
  }));

  return instance;
};

export const getUsersFactory = (optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);

  const getUsers = async (userName: string) => {
    try {
      const response = await instance.get(
        `/search/users?q=${userName}+in:name?access_token=${process.env.REACT_APP_DEV_GITHUB_ACCESS_TOKEN}`
      );
      console.log("response:", response);
      if (response.status !== 200) {
        throw new Error("Server Error");
      }
      const users: User[] = response.data.items;
      return users;
    } catch (err) {
      throw err;
    }
  };

  return getUsers;
};
