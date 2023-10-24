import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  taskFormSectionHandler,
  openMenuHandler,
} from "../services/store/global/globalSlice";
import styles from "../assets/styles/components/Menu.module.css";

const MenuRoute = {
  Tasks: "/",
  Completed: "/completed",
};

const Menu: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { openMenu } = useSelector<Store.AllStore, Store.GlobalState>(
    (store) => store.global
  );

  const newTaskBtnHandler = () => {
    dispatch(taskFormSectionHandler(true));
  };
  const menuHandler = () => {
    if (window.innerWidth < 1000) {
      dispatch(openMenuHandler({}));
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <h1>Menu</h1>
          <span className="material-symbols-outlined" onClick={menuHandler}>
            {openMenu ? "close" : "menu"}
          </span>
        </div>
        <ul className={styles.ul_container}>
          <Link to={MenuRoute.Tasks}>
            <li
              className={`${
                location.pathname === MenuRoute.Tasks
                  ? styles.selected_menu_item
                  : ""
              }`}
            >
              <span className="material-symbols-outlined">pending_actions</span>
              Tasks
            </li>
          </Link>
          <Link to={MenuRoute.Completed}>
            <li
              className={`${
                location.pathname === MenuRoute.Completed
                  ? styles.selected_menu_item
                  : ""
              }`}
            >
              <span className="material-symbols-outlined">inventory</span>{" "}
              Completed
            </li>
          </Link>
        </ul>
      </div>
      <button className={styles.add_task_btn} onClick={newTaskBtnHandler}>
        <span className="material-symbols-outlined">assignment_add</span>Task
      </button>
    </div>
  );
};

export default Menu;
