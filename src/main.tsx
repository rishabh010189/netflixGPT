import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import Browse from "./components/Browse/Browse.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: '/browse',
        element: <Browse />
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
