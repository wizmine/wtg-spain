import React from "react";
import "./addTask.css";

const AddTask = ({ handleAdd, addTask, setAddTask, taskDate, setTaskDate }) => {
  return (
    <form onSubmit={(event) => handleAdd(event)} className="add">
      <label className="add-label-task">
        <input
          className="add-task"
          placeholder="write something..."
          type="text"
          value={addTask}
          onChange={(event) => setAddTask(event.target.value)}
          name="task"
        />
      </label>
      <label>
        <input
          value={taskDate}
          onChange={(event) => setTaskDate(event.target.value)}
          type="date"
          name="taskDate"
        />
      </label>
      <input className="add-button" type="submit" value="Add" />
    </form>
  );
};

export default AddTask;
