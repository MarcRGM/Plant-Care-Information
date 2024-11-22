import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes"; 

const App = () => {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}        // The URL path for the route
                        element={<route.component />} // The component to display 
                    />
                ))}
            </Routes>
        </Router>
    );
};

export default App;
