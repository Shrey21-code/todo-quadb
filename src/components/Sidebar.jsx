// src/components/Sidebar.js
import React from 'react';
import { FaTasks, FaCalendarDay, FaStar, FaClipboardList, FaUser, FaPlus } from 'react-icons/fa';
import './Sidebar.css';
import profile from '../assets/profile.png';
import TaskCard from './TaskCard';
const Sidebar = ({ isOpen, onMenuClick }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="profile">
        <img src={profile} alt="Profile" />
        <div className="profile-info">
          <h2>Hey, ABCD</h2>
        </div>
      </div>
      <div className="menu box">
        <ul>
        <li onClick={() => onMenuClick('allTasks')}><FaTasks /> All Tasks</li>
          <li><FaCalendarDay /> Today</li>
          <li><FaStar /> Important</li>
          <li><FaClipboardList /> Planned</li>
          <li><FaUser /> Assigned to me</li>
        </ul>
      </div>
      <div className="add-list box">
        <FaPlus /> Add list
      </div>
      {/* <div className="task-summary box">
        <h3>Today Tasks</h3>
        <div className="task-count">11</div>
        <hr/>
        <div className="task-chart">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray="70, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      </div> */}
      <div >
        <TaskCard />
      </div>
    </div>
  );
};

export default Sidebar;