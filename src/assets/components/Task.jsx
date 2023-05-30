import styles from "./Task.module.css";
// import Clipboard from "../../assets/Clipboard.svg";
import { Trash } from "@phosphor-icons/react";
import { useState } from "react";

export const Task = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className={styles.formTask}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked ? (
        <p className={styles.complete}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer. Integer urna interdum massa libero auctor
          neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      ) : (
        <p className={styles.incomplete}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer. Integer urna interdum massa libero auctor
          neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      )}

      <button>
        <Trash size={24} />
      </button>
    </div>
  );
};
