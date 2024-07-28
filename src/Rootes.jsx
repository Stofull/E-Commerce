import App from "./App";
import Login from "./components/Login";
import News from "./components/News";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/News",
    element: <News />,
  },
];

export default routes;
