import { SliceCaseReducers, ValidateSliceCaseReducers } from "@reduxjs/toolkit";

export const globalReducer: ValidateSliceCaseReducers<
  Store.GlobalState,
  SliceCaseReducers<Store.GlobalState>
> = {
  taskFormSectionHandler(state, action) {
    state.openNewTask = action.payload;
    return state;
  },
  openMenuHandler(state) {
    state.openMenu = !state.openMenu;
    return state;
  },
  editTask(state, action) {
    state.editTask = action.payload;
    return state;
  },
};
