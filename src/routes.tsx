import Home from "./pages/home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: LoginForm },
    { path: "/register", component: RegisterForm },
];

export default routes;
