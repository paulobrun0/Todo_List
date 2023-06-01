import styles from "./Task.module.css";
// import Clipboard from "../../assets/Clipboard.svg";
import { Trash } from "@phosphor-icons/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Task = ({ content, onDeleteTask, id, taskIsComplete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    taskIsComplete(id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <div className={styles.formTask}>
      <label className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkboxCheckmark}></span>
      </label>
      {isChecked ? (
        <p className={styles.complete}>{content}</p>
      ) : (
        <p className={styles.incomplete}>{content}</p>
      )}
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
};
