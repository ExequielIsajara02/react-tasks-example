/* eslint-disable */
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

const TaskList = () => {

  const {tasks, deleteTask} = useContext(TaskContext);


  if (tasks.length == 0) {
    return <h1 className="text-2xl text-center text-white font-bold">The list is empty</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map(task => (
       <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
};

export default TaskList;
