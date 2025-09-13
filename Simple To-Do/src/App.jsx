import { useState } from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, title: "Task 1", isCompleted: false}
  ]);

  return (
    <div className="wrapper w-full h-screen bg-[#F1F0E4]">
      <Create tasks={tasks} setTasks={setTasks} />
      <Read tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default App;
