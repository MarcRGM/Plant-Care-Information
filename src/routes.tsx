import Home from "./home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SearchResults from "./components/searchResults";
import About from "./components/about";
import Contact from "./components/contact";
import Edit from "./components/edit";
import Layout from "./components/layout/Layout";

const routes = [
    {
      path: "/",
      component: Layout, 
      children: [
        { path: "", component: Home },   // Default route for '/'
        { path: "login", component: LoginForm },
        { path: "register", component: RegisterForm },
        { path: "results", component: SearchResults},
        { path: "about", component: About},
        { path: "contact", component: Contact},
        { path: "edit", component: Edit}
      ],
    },
  ];

export default routes;
