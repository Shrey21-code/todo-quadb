// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import { TaskProvider } from './context/TaskContext.jsx';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('allTasks');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleMenuClick = (view) => {
    setCurrentView(view);
  };
 

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };
 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
  };
  
  return (
    <TaskProvider>
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'} ${selectedTask ? 'details-open' : ''}`}>
        <Sidebar isOpen={isSidebarOpen} />
        {/* <TaskList />  */}
        <TaskList onTaskClick={handleTaskClick} />
        {selectedTask && <TaskDetails task={selectedTask} onClose={closeTaskDetails}/>}
        
      </div>
    </div>
    </TaskProvider>
  );
}

export default App;