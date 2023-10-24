import { FC } from "react";
import { useDispatch } from "react-redux";

import styles from "../assets/styles/components/Task.module.css";
import * as taskApi from "../services/api/tasks";
import { deleteTask, updateTask } from "../services/store/tasks/tasksSlice";
import {
  taskFormSectionHandler,
  editTask,
} from "../services/store/global/globalSlice";

const Task: FC<Components.TaskProps> = (props) => {
  const { task } = props;
  const dispatch = useDispatch();

  const changeTaskStatusHandler = () => {
    const newTaskObj = { ...task };
    delete newTaskObj.id;
    taskApi
      .updateTask(task.id, { ...newTaskObj, completed: !task.completed })
      .then(() => {
        dispatch(updateTask({ ...task, completed: !task.completed }));
      });
  };
  const deleteTaskHandler = () => {
    taskApi.deleteTask(task.id).then(() => {
      dispatch(deleteTask(task));
    });
  };
  const editTaskHandler = () => {
    dispatch(editTask(task));
    dispatch(taskFormSectionHandler(true));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.task_title}>{task?.title}</h3>
          <p className={styles.task_description}>{task?.description}</p>
        </div>
        <div className={styles.icon_container}>
          {!task?.completed && (
            <span
              className="material-symbols-outlined"
              onClick={editTaskHandler}
            >
              edit_document
            </span>
          )}
          <span
            className="material-symbols-outlined"
            onClick={deleteTaskHandler}
          >
            close
          </span>
        </div>
      </div>

      {
        <div className={styles.custom_btn} onClick={changeTaskStatusHandler}>
          {task?.completed ? "UnComplete" : "Complete"}
        </div>
      }
    </div>
  );
};

export default Task;
