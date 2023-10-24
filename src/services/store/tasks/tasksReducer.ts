import { SliceCaseReducers, ValidateSliceCaseReducers } from "@reduxjs/toolkit";

export const tasksReducer: ValidateSliceCaseReducers<
  Store.TasksState,
  SliceCaseReducers<Store.TasksState>
> = {
  saveAllTasks(state, action) {
    state.tasks = action.payload;
    return state;
  },
  addTask(state, action) {
    state.tasks.push(action.payload);
    return state;
  },
  updateTask(state, action) {
    const getTaskIndex = state.tasks.findIndex(
      (task) => task.id === action.payload.id
    );
    if (getTaskIndex !== -1) {
      state.tasks[getTaskIndex] = action.payload;
    }
    return state;
  },
  deleteTask(state, action) {
    state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);

    return state;
  },
};
