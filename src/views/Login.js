import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "//api.themoviedb.org/4/auth/request_token",
        {
          redirect_to: "http://localhost:3000",
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjhiMDkyNTExODQ0NzlmOTk5YTJiYWFmZDYxNTQ0NCIsInN1YiI6IjYzMWM3OTE2YjIzNGI5MDA4N2E1MjRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ekx7-m_pbGCFxlWPj4g-BhGE5xFXERy6Fjqffuf9Cts",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data.request_token);
        window.open(
          `https://www.themoviedb.org/auth/access?request_token=${response.data.request_token}`
        );
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>bla bla bla </p>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
