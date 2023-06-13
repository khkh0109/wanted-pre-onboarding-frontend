import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const nonTokenRequest = axios.create({ baseURL: BASE_URL });
const tokenRequest = axios.create({ baseURL: BASE_URL });

tokenRequest.interceptors.request.use(config => {
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };

  return config;
});

nonTokenRequest.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const errorResponse = {
      ...error.response.data,
    };

    return Promise.reject(errorResponse);
  }
);

tokenRequest.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response.status); // * 수정
  }
);

export const authAPI = {
  postSignup: async (email, password) => {
    const data = await nonTokenRequest.post(
      "/auth/signup",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  },

  postSignin: async (email, password) => {
    const { data } = await nonTokenRequest.post(
      "/auth/signin",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  },
};

export const todoAPI = {
  getTodos: async () => {
    const { data } = await tokenRequest.get("/todos");
    return data;
  },
  postTodo: async todo => {
    const data = await tokenRequest.post(
      "/todos",
      { todo },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  },
};
