import Home from "./pages/home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Layout from "./components/layout/Layout"

const routes = [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "", component: Home },   // Default route for '/'
        { path: "login", component: LoginForm },
        { path: "register", component: RegisterForm },
      ],
    },
  ];

export default routes;
