import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGI5NGRjYjQ5OTBmYzFmNmMwYjc2YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzU2Mzg0OSwiZXhwIjoxNjUzODIzMDQ5fQ.odKHahsYIYUpIhCf0fnrsTbtjhXA5uv3vrDMMcqPWO8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
