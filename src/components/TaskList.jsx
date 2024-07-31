
// import React, { useState } from 'react';
// import TaskItem from './TaskItem.jsx';
// import './TaskList.css';

// import { IconButton, TextField, Button } from '@mui/material';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SyncIcon from '@mui/icons-material/Sync';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import { useTasks } from '../context/TaskContext.jsx';
// const TaskList = ({ onTaskClick }) => {
//   const { tasks, toggleStar, toggleComplete, getTotalTasks, addTask } = useTasks();
//   // const [tasks, setTasks] = useState([
//   //   { id: 1, text: 'Buy groceries', completed: false },
//   //   { id: 2, text: 'Finish project report', completed: false },
//   //   { id: 3, text: 'Call the bank', completed: false },
//   //   { id: 4, text: 'Schedule dentist appointment', completed: false },
//   //   { id: 5, text: 'Plan weekend trip', completed: false },
//   //   { id: 6, text: 'Attend meeting', completed: true },
//   //   { id: 7, text: 'Clean the house', completed: true },
//   //   { id: 8, text: 'Prepare presentation', completed: true },
//   //   { id: 9, text: 'Update blog', completed: true },
//   // ]);

//   const [newTask, setNewTask] = useState('');

//   // const addTask = (task) => {
//   //   setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false ,starred:false}]);
//   //   setNewTask('');
//   // };

//   // const toggleTaskCompletion = (id) => {
//   //   setTasks(tasks.map(task => 
//   //     task.id === id ? { ...task, completed: !task.completed } : task
//   //   ));
//   // };
//   // const toggleTaskStar = (id) => {
//   //   setTasks(tasks.map(task => 
//   //     task.id === id ? { ...task, starred: !task.starred } : task
//   //   ));
//   // };

//   return (
//     <div className="task-list">
//       <div className="task-header">
//         <span>To Do</span>
//         <span className="dropdown-arrow">▼</span>
//       </div>
//       <div className="task-card">
//         <div className="task-body">
//           <TextField
//             variant="filled"
//             placeholder="Add A Task"
//             fullWidth
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//           />
//         </div>
//         <div className="task-footer">
//           <IconButton>
//             <NotificationsIcon style={{ color: '#000000' }} />
//           </IconButton>
//           <IconButton>
//             <SyncIcon style={{ color: '#000000' }} />
//           </IconButton>
//           <IconButton>
//             <CalendarTodayIcon style={{ color: '#000000' }} />
//           </IconButton>
//           <Button
//             variant="contained"
//             style={{
//               backgroundColor: 'rgba(53, 121, 55, 0.16)',
//               color: '#357937',
//               marginLeft: 'auto',
//             }}
//             onClick={() => newTask && addTask(newTask)}
//           >
//             ADD TASK
//           </Button>
//         </div>
//       </div>
//       <div className="tasks">
//         {tasks.filter(task => !task.completed).map(task => (
//           <TaskItem key={task.id} task={task} onToggle={toggleComplete} onClick={() => onTaskClick(task)} onStarToggle={toggleStar} />
//         ))}
//         <h3>Completed</h3>
//         {tasks.filter(task => task.completed).map(task => (
//           <TaskItem key={task.id} task={task} onToggle={toggleComplete} onClick={() => onTaskClick(task) } onStarToggle={toggleStar}/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskList;




// src/components/TaskList.jsx
import React, { useState } from 'react';
import TaskItem from './TaskItem.jsx';
import './TaskList.css';
import { IconButton, TextField, Button, Typography, Popover } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SyncIcon from '@mui/icons-material/Sync';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useTasks } from '../context/TaskContext.jsx';

const TaskList = ({ onTaskClick }) => {
  const { tasks, toggleStar, toggleComplete, addTask, getCompletedTasks, getPendingTasks } = useTasks();
  const [newTask, setNewTask] = useState({ text: '', reminder: '', dueDate: '', repeat: '' });

  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverField, setPopoverField] = useState('');

  const handlePopoverOpen = (event, field) => {
    setAnchorEl(event.currentTarget);
    setPopoverField(field);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverField('');
  };

  const handleAddTask = () => {
    if (newTask.text) {
      addTask(newTask.text);
      setNewTask({ text: '', reminder: '', dueDate: '', repeat: '' });
    }
  };

  const open = Boolean(anchorEl);

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
            value={newTask.text}
            onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
          />
        </div>
        <div className="task-footer">
          <IconButton onClick={(e) => handlePopoverOpen(e, 'reminder')}>
            <NotificationsIcon style={{ color: '#000000' }} />
          </IconButton>
          <IconButton onClick={(e) => handlePopoverOpen(e, 'repeat')}>
            <SyncIcon style={{ color: '#000000' }} />
          </IconButton>
          <IconButton onClick={(e) => handlePopoverOpen(e, 'dueDate')}>
            <CalendarTodayIcon style={{ color: '#000000' }} />
          </IconButton>
          <Button 
            variant="contained"
            
            style={{
              backgroundColor: 'rgba(53, 121, 55, 0.16)',
              color: '#357937',
              marginLeft: 'auto',
            }}
            onClick={handleAddTask}
          >
            ADD TASK
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div style={{ padding: 16 }}>
              {popoverField === 'reminder' && (
                <TextField
                  label="Reminder"
                  variant="filled"
                  fullWidth
                  value={newTask.reminder}
                  onChange={(e) => setNewTask({ ...newTask, reminder: e.target.value })}
                />
              )}
              {popoverField === 'dueDate' && (
                <TextField
                  label="Due Date"
                  variant="filled"
                  fullWidth
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                />
              )}
              {popoverField === 'repeat' && (
                <TextField
                  label="Repeat"
                  variant="filled"
                  fullWidth
                  value={newTask.repeat}
                  onChange={(e) => setNewTask({ ...newTask, repeat: e.target.value })}
                />
              )}
              <Button onClick={handlePopoverClose}>Set</Button>
            </div>
          </Popover>
        </div>
      </div>
      
      <div className="tasks">
        {tasks.filter(task => !task.completed).map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={toggleComplete} 
            onClick={() => onTaskClick(task)} 
            onStarToggle={toggleStar} 
          />
        ))}
        <h3>Completed</h3>
        {tasks.filter(task => task.completed).map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={toggleComplete} 
            onClick={() => onTaskClick(task)} 
            onStarToggle={toggleStar} 
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
