const Read = ({ tasks, setTasks }) => {
  const renderTasks = tasks.map((ele) => {
    return (
      <li
        id={ele.id}
        key={ele.id}
        className="w-full bg-zinc-100 px-5 py-5 rounded-md font-semibold flex items-center justify-between border-[1px] border-solid border-black gap-4"
      >
        <span
          className={`inline-block text-xl grow text-start ${
            ele.isCompleted ? "line-through" : ""
          }`}
        >
          {ele.title}
        </span>
        <button
          onClick={() => deleteHandler(ele.id)}
          className="bg-[#7D8D86] text-white px-3 py-2 leading-none tracking-wide rounded-sm cursor-pointer hover:bg-[#66766f] active:scale-95"
        >
          Delete
        </button>
        <input
          onChange={(e) => handleChecked(e, ele.id)}
          type="checkbox"
          name="task-status"
          id="task-status"
        />
      </li>
    );
  });

  const deleteHandler = (id) => {
    const updatedTasks = tasks.filter((ele) => ele.id !== id);
    setTasks(updatedTasks);
  };

  const handleChecked = (e, id) => {
    const updatedTasks = tasks.map((ele) => {
      if (ele.id == id) {
        ele.isCompleted = e.target.checked;
      }
      return ele;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="h-4/5 w-full flex items-center justify-center flex-col">
      <h2 className="text-4xl mb-5">Tasks</h2>
      <ol className="h-4/5 w-2/4 flex items-center flex-col gap-2 overflow-y-auto custom-scrollbar pr-3">
        {renderTasks}
      </ol>
    </div>
  );
};

export default Read;