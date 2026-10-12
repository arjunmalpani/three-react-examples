import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./App.css";
import Home, { ExampleLayout } from "./home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        element: <ExampleLayout />,
        children: [
            {
                path: "/earth-marker",
                lazy: async () => {
                    const { default: Component } =
                        await import("./examples/EarthMarker/earth-marker");
                    return { Component };
                },
            },
            {
                path: "/gelatinous-cube",
                lazy: async () => {
                    const { default: Component } =
                        await import("./examples/GelatinousCube/gelatinous-cube");
                    return { Component };
                },
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
