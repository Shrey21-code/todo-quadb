import React from 'react';
import { FaStar } from 'react-icons/fa';
import './TaskItem.css';

const TaskItem = ({ task, onToggle }) => {
  if (!task) {
    return null;
  }
  return (
    <div className="task-item">
      <input type="checkbox" checked={task.completed}  onChange={() => onToggle(task.id)}/>
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <FaStar />
    </div>
  );
};

export default TaskItem;

