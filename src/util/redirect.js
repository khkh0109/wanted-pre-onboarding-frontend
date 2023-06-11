import { redirect } from "react-router-dom";

export const redirectPage = () => {
  const token = localStorage.getItem("token");

  if (token === null) {
    return redirect("/signin");
  } else {
    return redirect("/todo");
  }
};

export const redirectSignin = () => {
  const token = localStorage.getItem("token");

  if (token === null) {
    return redirect("/signin");
  }

  return null;
};

export const redirectTodo = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return redirect("/todo");
  }

  return null;
};
