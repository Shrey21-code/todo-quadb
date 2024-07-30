// // src/context/TaskContext.js
// import React, { createContext, useContext, useState } from 'react';

// const TaskContext = createContext();

// export const useTasks = () => useContext(TaskContext);

// export const TaskProvider = ({ children }) => {
//   // const [tasks, setTasks] = useState([]);

//   const [tasks, setTasks] = useState([
//     { id: 1, text: 'Buy groceries', completed: false, starred: false },
//     { id: 2, text: 'Finish project report', completed: false, starred: true },
//     { id: 3, text: 'Call the bank', completed: false, starred: false },
//     { id: 3, text: 'Read a book', completed: true, starred: false },
//   ]);

//   // const addTask = (task) => {
//   //   setTasks([...tasks, task]);
//   // };
//   const addTask = (task) => {
//       setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false ,starred:false}]);
//       // setNewTask('');
//     };

//   // const toggleStar = (index) => {
//   //   const newTasks = [...tasks];
//   //   newTasks[index].starred = !newTasks[index].starred;
//   //   setTasks(newTasks);
//   // };
//   const toggleStar = (id) => {
//     // const newTasks = [...tasks];
//     // newTasks[index].starred = !newTasks[index].starred;
//     // setTasks(newTasks);
//     setTasks(tasks.map(task => 
//           task.id === id ? { ...task, starred: !task.starred } : task
//         ));
//   };
  

//   // const toggleComplete = (index) => {
//   //   const newTasks = [...tasks];
//   //   newTasks[index].status = newTasks[index].status === 'pending' ? 'complete' : 'pending';
//   //   setTasks(newTasks);
//   // };
//   const toggleComplete = (id) => {
//     // const newTasks = [...tasks];
//     // newTasks[index].status = newTasks[index].status === 'pending' ? 'complete' : 'pending';
//     // setTasks(newTasks);
//     setTasks(tasks.map(task => 
//           task.id === id ? { ...task, completed: !task.completed } : task
//         ));
//   };

//   const getTotalTasks = () => tasks.length;
//   const getCompletedTasks = () => tasks.filter(task => task.completed).length;

//   const getPendingTasks = () => tasks.filter(task => !task.completed).length;

//   return (
//     <TaskContext.Provider value={{ tasks, addTask, toggleStar, toggleComplete, getTotalTasks, getCompletedTasks, getPendingTasks }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };




// src/context/TaskContext.js
import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false, starred: false, reminder: '', dueDate: '', repeat: '' },
    { id: 2, text: 'Finish project report', completed: true, starred: true, reminder: '', dueDate: '', repeat: '' },
    { id: 3, text: 'Call the bank', completed: false, starred: false, reminder: '', dueDate: '', repeat: '' },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false, starred: false, reminder: '', dueDate: '', repeat: '' }]);
  };

  const toggleStar = (id) => {
    const newTasks = tasks.map((task) => 
      task.id === id ? { ...task, starred: !task.starred } : task
    );
    setTasks(newTasks);
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const getTotalTasks = () => tasks.length;

  const getCompletedTasks = () => tasks.filter(task => task.completed).length;

  const getPendingTasks = () => tasks.filter(task => !task.completed).length;

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleStar, toggleComplete, getTotalTasks, getCompletedTasks, getPendingTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
