import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.scss";
import Root from "./core/root";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Suspense fallback="loading">
            <Root />
        </Suspense>
    </React.StrictMode>
);
