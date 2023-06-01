import styles from "./Newtask.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { TaskEmpty } from "./TaskEmpty";

export const NewTask = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTaskContent = { id: uuidv4(), content: newTask, done: false };
    setTasks([...tasks, newTaskContent]);
    setNewTask("");
  };

  const onDeleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
  };

  const taskIsComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.done);
  const completedTaskCount = completedTasks.length;

  const handleNewTaskInvalid = (e) => {
    e.target.setCustomValidity("Esse campo é obrigatório");
  };

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <div className={styles.taskContainer}>
      <form onSubmit={handleAddTask} className={styles.form}>
        <input
          className={styles.inputTask}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button className={styles.btnCreate} disabled={isNewTaskEmpty}>
          Criar <PlusCircle size={18} />
        </button>
      </form>
      <div className={styles.headerTast}>
        <p className={styles.tasks}>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p className={styles.taskDone}>
          Concluídas
          <span>
            {completedTaskCount} de {tasks.length}
          </span>
        </p>
      </div>
      <div className={styles.tasks}>
        {tasks.length ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              done={task.done}
              content={task.content}
              onDeleteTask={onDeleteTask}
              taskIsComplete={taskIsComplete}
            />
          ))
        ) : (
          <TaskEmpty />
        )}
      </div>
    </div>
  );
};
