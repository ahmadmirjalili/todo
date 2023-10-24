import { createSlice } from "@reduxjs/toolkit";
import { globalReducer } from "./globalReducer";

/*
    This slicer for global and public state 
*/

const initialState: Store.GlobalState = {
  openNewTask: false,
  openMenu: false,
  editTask: undefined,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: globalReducer,
});

export const { taskFormSectionHandler, openMenuHandler, editTask } =
  globalSlice.actions;
export default globalSlice.reducer;
