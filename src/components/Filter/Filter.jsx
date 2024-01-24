import React from "react";
import "./filter.css";

const Filter = ({ setFilter, taskDate, setTaskDate }) => {
  return (
    <div className="sorting">
      <button className="sorting-button" onClick={() => setFilter("all")}>
        All
      </button>
      <button className="sorting-button" onClick={() => setFilter("completed")}>
        Completed
      </button>
      <button className="sorting-button" onClick={() => setFilter("progress")}>
        In progress
      </button>
      <input
        value={taskDate}
        onChange={(event) => setTaskDate(event.target.value)}
        onClick={() => setFilter("calendar")}
        type="date"
        name="taskDate"
      />
    </div>
  );
};

export default Filter;
