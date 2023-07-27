import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TasksForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Type your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Type the description of the task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
        className="bg-indigo-500 p-3 w-full mb-2 text-white rounded-md">Save</button>
      </form>
    </div>
  );
}

export default TasksForm;
