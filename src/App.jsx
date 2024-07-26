// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('allTasks');
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleMenuClick = (view) => {
    setCurrentView(view);
  };
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
  };
  
  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'} ${selectedTask ? 'details-open' : ''}`}>
        <Sidebar isOpen={isSidebarOpen} />
        {/* <TaskList />  */}
        <TaskList onTaskClick={handleTaskClick} />
        {selectedTask && <TaskDetails task={selectedTask} onClose={closeTaskDetails}/>}
        
      </div>
    </div>
  );
}

export default App;