import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { taskFormSectionHandler } from "../services/store/global/globalSlice";
import { getAllTasks } from "../services/api/tasks";
import { saveAllTasks } from "../services/store/tasks/tasksSlice";
import styles from "../assets/styles/layout/MainLayout.module.css";
import Menu from "../components/Menu";
import TaskForm from "../components/TaskForm";

const MainLayout: FC = () => {
  const dispatch = useDispatch();

  const { global, tasks } = useSelector<Store.AllStore, Store.AllStore>(
    (store) => store
  );

  const [isLoading, setIsLoading] = useState(true);

  const newTaskBtnHandler = () => {
    dispatch(taskFormSectionHandler(true));
  };

  useEffect(() => {
    if (tasks.tasks.length === 0) {
      getAllTasks()
        .then((res) => {
          //@ts-ignore
          dispatch(saveAllTasks(res));
        })
        .finally(() => {});
      setIsLoading(false);
    }
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={`${styles.menu_section} ${
            global.openMenu ? "" : styles.close_menu_section
          } `}
        >
          <Menu />
        </div>
        <div className={styles.body_section}>
          {isLoading && <p>loading ...</p>}
          <Outlet />
        </div>
        <div
          className={`${styles.task_form_section} ${
            global.openNewTask ? styles.task_form_section_status : ""
          }`}
        >
          <TaskForm />
        </div>
        <div
          className={styles.mobile_badge_new_task}
          onClick={newTaskBtnHandler}
        >
          <span className="material-symbols-outlined">assignment_add</span>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
