import App from "./App";
import Login from "./components/Login";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
];

export default routes;
