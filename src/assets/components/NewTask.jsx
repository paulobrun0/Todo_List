import styles from "./Newtask.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { Task } from "./Task";

export const NewTask = () => {
  return (
    <div className={styles.taskContainer}>
      <form className={styles.form}>
        <input
          className={styles.inputTask}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.btnCreate}>
          Criar <PlusCircle size={18} />
        </button>
      </form>
      <div className={styles.headerTast}>
        <p className={styles.tasks}>
          Tarefas criadas <span>0</span>
        </p>
        <p className={styles.taskDone}>
          Concluídas <span>0</span>
        </p>
      </div>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};
