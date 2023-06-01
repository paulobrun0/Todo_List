import clipboard from "../../assets/clipboard.svg";
import styles from "./TaskEmpty.module.css";
export const TaskEmpty = () => {
  return (
    <div className={styles.taskEmpty}>
      <img src={clipboard} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
};
