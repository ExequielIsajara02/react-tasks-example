/* eslint-disable */
import { createContext, useState, useEffect} from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    let tasksModified = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksModified);
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          createTask,
          deleteTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
};
