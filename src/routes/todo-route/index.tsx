import { RouteObject } from "react-router-dom";

import MainLayout from "../../layout/MainLayout";
import Tasks from "../../pages/tasks";
import Completed from "../../pages/completed";

export const todoRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Tasks />,
      },
      {
        path: "/completed",
        element: <Completed />,
      },
    ],
  },
];
