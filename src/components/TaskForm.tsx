import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  taskFormSectionHandler,
  editTask as editTaskAction,
} from "../services/store/global/globalSlice";
import { addTask, updateTask } from "../services/store/tasks/tasksSlice";
import styles from "../assets/styles/components/TaskForm.module.css";
import * as taskApi from "../services/api/tasks";

const TaskForm = () => {
  const dispatch = useDispatch();

  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    title: false,
    description: false,
  });

  const { editTask } = useSelector<Store.AllStore, Store.GlobalState>(
    (store) => store.global
  );

  const saveTaskHandler = () => {
    const validationTitle = titleRef.current?.value.length === 0;
    const validationDescription = descriptionRef.current?.value.length === 0;

    if (validationTitle || validationDescription) {
      setError({
        description: validationDescription,
        title: validationTitle,
      });
    } else {
      const task: Global.Task = {
        title: titleRef.current?.value ?? "",
        description: descriptionRef.current?.value ?? "",
        completed: false,
        ...(!!editTask?.title ? {} : { id: new Date().getTime() }),
      };
      setIsLoading(true);

      if (!!editTask?.title) {
        delete task.id;
        taskApi
          .updateTask(editTask.id, task)
          .then(() => {
            //@ts-ignore
            dispatch(updateTask({ ...task, id: editTask.id }));
            dispatch(editTaskAction(undefined));
            clearInputsHandler();
          })
          .finally(() => setIsLoading(false));
      } else {
        taskApi
          .createTask(task)
          .then(() => {
            //@ts-ignore
            dispatch(addTask(task));
            clearInputsHandler();
          })
          .finally(() => setIsLoading(false));
      }

      setError({
        description: false,
        title: false,
      });
    }
  };

  const clearInputsHandler = () => {
    if (!!titleRef.current && !!descriptionRef.current) {
      titleRef.current.value = "";
      descriptionRef.current.value = "";
    }
  };
  const newTaskBtnHandler = () => {
    if (!!editTask?.title) {
      dispatch(editTaskAction(undefined));
      clearInputsHandler();
    }
    dispatch(taskFormSectionHandler(false));
  };

  useEffect(() => {
    if (!!editTask?.title && !!titleRef.current && !!descriptionRef.current) {
      titleRef.current.value = editTask.title;
      descriptionRef.current.value = editTask.description;
    }
  }, [editTask]);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <h1>{!!editTask?.title ? "Edit" : "New"} Task</h1>
          <span
            onClick={newTaskBtnHandler}
            className="material-symbols-outlined"
          >
            close
          </span>
        </div>
        <div>
          <input
            ref={titleRef}
            placeholder="Task Title"
            className={`${styles.title_input} ${
              error.title ? styles.error_input : ""
            }`}
          />
          <textarea
            ref={descriptionRef}
            placeholder="Task description"
            className={`${styles.description_input} ${
              error.description ? styles.error_input : ""
            }`}
          />
        </div>
      </div>
      <button className={styles.add_task_btn} onClick={saveTaskHandler}>
        {isLoading ? "loading..." : "save"}
      </button>
    </div>
  );
};

export default TaskForm;
