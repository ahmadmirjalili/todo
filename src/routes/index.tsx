import { createBrowserRouter } from "react-router-dom";

import { todoRoutes } from "./todo-route";

export const router = createBrowserRouter([...todoRoutes]);
