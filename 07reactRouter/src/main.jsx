import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About/About.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'Contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// 2 seconde
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="user/:id" element={<User />} />
        <Route path="github" element={<Github />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
