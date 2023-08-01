import Home from "@renderer/pages";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export default function Routes(): JSX.Element {
    return <RouterProvider router={router} />;
}
