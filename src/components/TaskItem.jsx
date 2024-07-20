import React from 'react';
import { FaStar } from 'react-icons/fa';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  if (!task) {
    return null;
  }
  return (
    <div className="task-item">
      <input type="checkbox" checked={task.completed} />
      <span>{task.text}</span>
      <FaStar />
    </div>
  );
};

export default TaskItem;

