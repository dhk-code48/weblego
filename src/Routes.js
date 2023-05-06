import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Editor, Home, Error, App } from "./views";
import { WebView } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/editor/:userUid/:websiteName",
    element: <Editor />,
  },
  {
    path: "/app/:userUid",
    element: <App />,
  },
  {
    path: "/preview/:useUid/:websiteName",
    element: <WebView />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
