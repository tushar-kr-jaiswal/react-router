import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfo } from "./components/Github/Github.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="user/" element={<User />}>
                <Route path=":userId" element={<User />} />
            </Route>
            <Route path="github" loader={githubInfo} element={<Github />} /> // used loader property
            to pre-process the api data using "useLoaderData" - react router dom
            <Route path="*" element={<div>Not Found</div>} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
