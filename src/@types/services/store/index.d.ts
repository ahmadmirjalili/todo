namespace Store {
  interface GlobalState {
    openNewTask: boolean;
    openMenu: boolean;
    editTask: Global.Task | undefined;
  }
  interface TasksState {
    tasks: Global.Task[];
  }

  interface TasksReducer {
    saveAllTasks(
      state: TasksState,
      action: { payload: { name: string; id: string } }
    ): TasksState;
  }
  interface GlobalReducer {
    taskFormSectionHandler(state: GlobalState): GlobalState;
    openMenuHandler(state: GlobalState): GlobalState;
  }

  interface AllStore {
    tasks: TasksState;
    global: GlobalState;
  }
  interface AllReducer {
    tasks: TasksReducer;
    global: GlobalReducer;
  }
}
