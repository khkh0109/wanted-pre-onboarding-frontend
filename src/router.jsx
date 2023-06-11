import { createBrowserRouter } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";

import { redirectPage, redirectSignin, redirectTodo } from "./util/redirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    loader: redirectPage,
  },
  {
    path: "/signin",
    element: <Signin />,
    loader: redirectTodo,
  },
  {
    path: "/signup",
    element: <Signup />,
    loader: redirectTodo,
  },

  {
    path: "/todo",
    element: <Todo />,
    loader: redirectSignin,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
