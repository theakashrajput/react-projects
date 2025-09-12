import { useState } from "react";
import { nanoid } from "nanoid";

const Create = ({ tasks, setTasks }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: nanoid(),
      title: taskTitle,
      isCompleted: false,
    };
    setTaskTitle("");
    setTasks([...tasks, newTask]);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full h-1/5 bg-[#3E3F29] text-[#F1F0E4] flex justify-center items-center gap-20"
    >
      <input
        onChange={(e) => setTaskTitle(e.target.value)}
        type="text"
        value={taskTitle}
        placeholder="Task Name"
        className="bg-zinc-100 text-black w-[30vw] h-10 text-xl px-2 rounded-sm"
      />
      <button className="inline-block px-6 py-3 bg-[#BCA88D] text-[#3E3F29] text-lg leading-none font-semibold rounded-md cursor-pointer active:scale-95">
        Add Task
      </button>
    </form>
  );
};

export default Create;
