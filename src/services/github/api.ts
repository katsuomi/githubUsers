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

  const getUsers = async (organizationName: string) => {
    try {
      const response = await instance.get(`/orgs/${organizationName}/members`);

      if (response.status !== 200) {
        throw new Error("Server Error");
      }
      const users: User[] = response.data;

      return users;
    } catch (err) {
      throw err;
    }
  };

  return getUsers;
};
