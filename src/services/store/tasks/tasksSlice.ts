import { createSlice } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksReducer";

/*
    This slicer is for saving tasks that come from the server side 
*/

const initialState: Store.TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: tasksReducer,
});

export const { saveAllTasks, addTask, updateTask, deleteTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
