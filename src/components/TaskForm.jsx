/* eslint-disable */
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-white text-2xl mb-4 font-bold">Create your task</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-4"
          type="text"
          placeholder="Type your task title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-4 rounded-md"
          placeholder="Type your task description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-sky-600 px-2 py-1 mt-2 rounded-md text-white hover:bg-sky-500">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
