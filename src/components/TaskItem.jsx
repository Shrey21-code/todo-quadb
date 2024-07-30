import React from 'react';
import { FaStar } from 'react-icons/fa';
import './TaskItem.css';
import { Checkbox } from '@mui/material';


const TaskItem = ({ task, onToggle, onClick,onStarToggle }) => {
  if (!task) {
    return null;
  }
  // const onTaskClick = (task) => {
  //   console.log(task);
  // };

  return (
    <div className="task-item" onClick={onClick}>
    <Checkbox
      checked={task.completed}
      onChange={() => onToggle(task.id)}
      style={{ color: ' #357937' }}
    />
    <span onClick={onClick} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
    </span>
    <FaStar
        className={`star-icon ${task.starred ? 'starred' : ''}`}
        onClick={() => onStarToggle(task.id)}
      />
    </div>
  );
};

export default TaskItem;