import { createBrowserRouter, Navigate } from "react-router";
import "./App.css";
import { RouterProvider } from "react-router/dom";
import EarthMarker from "./examples/EarthMarker/earth-marker";
import GelatinousCube from "./examples/GelatinousCube/gelatinous-cube";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/gelatinous-cube" replace />,
    },
    {
        path: "/earth-marker",
        element: <EarthMarker />,
    },
    {
        path: "/gelatinous-cube",
        element: <GelatinousCube />,
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
