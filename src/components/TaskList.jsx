// import React, { useState } from 'react';
// import TaskItem from './TaskItem.jsx';
// import './TaskList.css';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, text: 'Buy groceries', completed: false },
//     { id: 2, text: 'Finish project report', completed: false },
//     { id: 3, text: 'Call the bank', completed: false },
//     { id: 4, text: 'Schedule dentist appointment', completed: false },
//     { id: 5, text: 'Plan weekend trip', completed: false },
//     { id: 6, text: 'Attend meeting', completed: true },
//     { id: 7, text: 'Clean the house', completed: true },
//     { id: 8, text: 'Prepare presentation', completed: true },
//     { id: 9, text: 'Update blog', completed: true },
//   ]);

//   const addTask = (task) => {
//     setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false }]);
//   };
//   const toggleTaskCompletion = (id) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ));
//   };
//   return (
//     <div className="task-list">
//       <div className="add-task">
//         <input type="text" placeholder="Add a task" onKeyPress={(e) => {
//           if (e.key === 'Enter' && e.target.value) {
//             addTask(e.target.value);
//             e.target.value = '';
//           }
//         }} />
//       </div>
//       <div className="tasks">
//         {tasks.filter(task => !task.completed).map(task => (
//           <TaskItem key={task.id} task={task} />
//         ))}
//         <h3>Completed</h3>
//         {tasks.filter(task => task.completed).map(task => (
//           <TaskItem key={task.id} task={task} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskList;
import React, { useState } from 'react';
import TaskItem from './TaskItem.jsx';
import './TaskList.css';

import { IconButton, TextField, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SyncIcon from '@mui/icons-material/Sync';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const TaskList = ({ onTaskClick }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Finish project report', completed: false },
    { id: 3, text: 'Call the bank', completed: false },
    { id: 4, text: 'Schedule dentist appointment', completed: false },
    { id: 5, text: 'Plan weekend trip', completed: false },
    { id: 6, text: 'Attend meeting', completed: true },
    { id: 7, text: 'Clean the house', completed: true },
    { id: 8, text: 'Prepare presentation', completed: true },
    { id: 9, text: 'Update blog', completed: true },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false ,starred:false}]);
    setNewTask('');
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  const toggleTaskStar = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, starred: !task.starred } : task
    ));
  };

  return (
    <div className="task-list">
      <div className="task-header">
        <span>To Do</span>
        <span className="dropdown-arrow">▼</span>
      </div>
      <div className="task-card">
        <div className="task-body">
          <TextField
            variant="filled"
            placeholder="Add A Task"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="task-footer">
          <IconButton>
            <NotificationsIcon style={{ color: '#000000' }} />
          </IconButton>
          <IconButton>
            <SyncIcon style={{ color: '#000000' }} />
          </IconButton>
          <IconButton>
            <CalendarTodayIcon style={{ color: '#000000' }} />
          </IconButton>
          <Button
            variant="contained"
            style={{
              backgroundColor: 'rgba(53, 121, 55, 0.16)',
              color: '#357937',
              marginLeft: 'auto',
            }}
            onClick={() => newTask && addTask(newTask)}
          >
            ADD TASK
          </Button>
        </div>
      </div>
      <div className="tasks">
        {tasks.filter(task => !task.completed).map(task => (
          <TaskItem key={task.id} task={task} onToggle={toggleTaskCompletion} onClick={() => onTaskClick(task)} onStarToggle={toggleTaskStar} />
        ))}
        <h3>Completed</h3>
        {tasks.filter(task => task.completed).map(task => (
          <TaskItem key={task.id} task={task} onToggle={toggleTaskCompletion} onClick={() => onTaskClick(task) } onStarToggle={toggleTaskStar}/>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
