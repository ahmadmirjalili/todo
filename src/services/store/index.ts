import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/tasksSlice";
import globalReducer from "./global/globalSlice";

export default configureStore<Store.AllStore>({
  reducer: {
    tasks: tasksReducer,
    global: globalReducer,
  },
});
