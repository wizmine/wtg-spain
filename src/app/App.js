import React, { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem/TaskItem";
import AddTask from "../components/AddTask/AddTask";
import "./app.css";
import Filter from "../components/Filter/Filter";

function App() {
  const initialState = JSON.parse(window.localStorage.getItem("data") || "[]");
  const [tasks, setTasks] = useState(initialState);
  const [addTask, setAddTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = (tasks, filter, taskDate) => {
    switch (filter) {
      case "all":
        return tasks;
      case "completed":
        return tasks.filter((item) => item.checked === true);
      case "progress":
        return tasks.filter((item) => item.checked === false);
      case "calendar":
        return tasks.filter((item) => item.date === taskDate);
      default:
        return tasks;
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      task: addTask,
      date: taskDate,
      checked: false,
    };

    setTasks([...tasks, newTask]);
    setAddTask("");
  };

  const handleCheck = (event) => {
    const id = Number(event.target.value);

    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );

    setTasks(newTasks);
  };

  const handleRemove = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const handleEditTask = (id, editTask) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task));

    setTasks(newTasks);
  };

  const visibleData = filteredTasks(tasks, filter, taskDate);

  return (
    <div className="container">
      <div className="card">
        <h1 className="name">Tasks</h1>
        <AddTask
          handleAdd={handleAdd}
          addTask={addTask}
          setAddTask={setAddTask}
          taskDate={taskDate}
          setTaskDate={setTaskDate}
        />
        <Filter setFilter={setFilter} taskDate={taskDate} setTaskDate={setTaskDate} />
        <ul className="tasks">
          {tasks &&
            visibleData.map((task) => (
              <TaskItem
                key={task.id}
                {...task}
                handleCheck={handleCheck}
                handleRemove={handleRemove}
                handleEditTask={handleEditTask}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
