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

const TaskList = () => {
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
    setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false }]);
    setNewTask('');
  };
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
     <div className="task-list">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => newTask && addTask(newTask)}>ADD TASK</button>
      </div>
      <div className="tasks">
        {tasks.filter(task => !task.completed).map(task => (
          <TaskItem key={task.id} task={task} onToggle={toggleTaskCompletion} />
        ))}
        <h3>Completed</h3>
        {tasks.filter(task => task.completed).map(task => (
          <TaskItem key={task.id} task={task} onToggle={toggleTaskCompletion} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
