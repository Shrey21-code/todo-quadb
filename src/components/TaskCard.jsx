// src/components/TaskCard.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useTasks } from '../context/TaskContext';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const TaskCard = () => {
//   const { tasks } = useTasks();
   const { getCompletedTasks, getPendingTasks, getTotalTasks } = useTasks();
   const completedTasks = getCompletedTasks();
  const pendingTasks = getPendingTasks();
  const totalTasks = getTotalTasks();
  const data = {
    labels: ['Pending', 'Done'],
    datasets: [
      {
        // data: [tasks.pending, tasks.done],
        data: [ pendingTasks, completedTasks],
        backgroundColor: ['#3F9142', '#064E3B'],
        hoverBackgroundColor: ['#3F9142', '#064E3B'],
        // borderWidth: 2,
      },
    ],
  };

  return (
    <Card style={{ maxWidth: 400, margin: '0 0', padding: '5px 5px' }} className='taskchart'>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h7" component="div">
            Today Tasks
          </Typography>
          <IconButton size="small" color="default">
            <InfoIcon />
          </IconButton>
        </div>
        <Typography variant="h5" component="div" style={{ margin: '0 0' }}>
          {/* {tasks.total} */}{totalTasks}
          {/* 9 */}
        </Typography>
        <hr/>
        <div style={{ height: '200px', position: 'relative' }}>
          <Doughnut data={data} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '10px', height: '10px', backgroundColor: '#34D399', borderRadius: '50%', marginRight: '5px' }}></span>
            Pending
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '10px', height: '10px', backgroundColor: '#064E3B', borderRadius: '50%', marginRight: '5px' }}></span>
            Done
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
