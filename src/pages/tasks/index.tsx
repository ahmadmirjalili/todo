import { FC } from "react";
import { useSelector } from "react-redux";

import styles from "../../assets/styles/pages/Tasks.module.css";
import Task from "../../components/Task";

const Tasks: FC = () => {
  const { tasks } = useSelector<Store.AllStore, Store.TasksState>(
    (store) => store.tasks
  );

  return (
    <div className={styles.container}>
      <h2>Tasks</h2>
      <div className={styles.tasks_container}>
        {tasks.map((task) => {
          return (
            !task?.completed &&
            !!task?.title && <Task key={task?.id} task={task} />
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
