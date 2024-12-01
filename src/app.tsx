import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";  // Import the routes

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />}>
            {route.children && route.children.map((childRoute, childIndex) => (
              <Route
                key={childIndex}
                path={childRoute.path}
                element={<childRoute.component />}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default App;
