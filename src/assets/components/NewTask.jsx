import styles from "./Newtask.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export const NewTask = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.inputTask}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button>
        Criar <PlusCircle size={18} />
      </button>
    </form>
  );
};
