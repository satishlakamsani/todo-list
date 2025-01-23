import React from "react";

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <li>
      <span
        onClick={onToggle}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Task;
