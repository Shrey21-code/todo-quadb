// import React, { useState } from 'react';
// import { Checkbox, IconButton, TextField, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Star, StarBorder, Add, Notifications, CalendarToday, Repeat, Delete } from '@mui/icons-material';
// // import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
// // import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Corrected import statement
// import './TaskDetails.css';
// import { useTasks } from '../context/TaskContext';
// const TaskDetails = ({ task, onClose }) => {
//     const { tasks, toggleStar, toggleComplete, getTotalTasks, addTask } = useTasks();
//     const [dueDate, setDueDate] = useState(null);
//     const [isStarred, setIsStarred] = useState(false);

//     const handleDateChange = (newValue) => {
//         setDueDate(newValue);
//     };

//     const handleStarClick = () => {
//         setIsStarred(!isStarred);
//     };

//     return (
//         <div style={{ padding: 20, backgroundColor: '#eef3ec', width: 300, display: 'flex', flexDirection: 'column', height: '100%' }} className="taskd">
//             <List style={{ flex: 1 }}>
//                 <ListItem>
//                     <ListItemIcon>
//                         <Checkbox onClick={toggleComplete}/>
//                     </ListItemIcon>
//                     <ListItemText primary={task.title} />
//                     <IconButton onClick={toggleStar}>
//                         {isStarred ? <Star style={{ color: '#fdd835' }} /> : <StarBorder />}
//                     </IconButton>
//                 </ListItem>
//                 <ListItem button>
//                     <ListItemIcon>
//                         <Add />
//                     </ListItemIcon>
//                     <ListItemText primary="Add Step" />
//                 </ListItem>
//                 <ListItem button>
//                     <ListItemIcon>
//                         <Notifications />
//                     </ListItemIcon>
//                     <ListItemText primary="Set Reminder" />
//                 </ListItem>
//                 <ListItem>
//                     <ListItemIcon>
//                         <CalendarToday />
//                     </ListItemIcon>
//                     {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
//                         <MobileDatePicker
//                             label="Add Due Date"
//                             value={dueDate}
//                             onChange={handleDateChange}
//                             renderInput={(params) => <TextField {...params} />}
//                         />
//                     </LocalizationProvider> */}
//                 </ListItem>
//                 <ListItem button>
//                     <ListItemIcon>
//                         <Repeat />
//                     </ListItemIcon>
//                     <ListItemText primary="Repeat" />
//                 </ListItem>
//                 <ListItem>
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         label="Add Notes"
//                         multiline
//                         rows={2}
//                     />
//                 </ListItem>
//             </List>
//             <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', marginTop: 'auto', borderTop: '1px solid #ccc' }}>
//                 <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>X</button>
//                 <span>Created Today</span>
//                 <IconButton>
//                     <Delete />
//                 </IconButton>
//             </div>
//         </div>
//     );
// };

// export default TaskDetails;



import React, { useState } from 'react';
import { Checkbox, IconButton, TextField, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Star, StarBorder, Add, Notifications, CalendarToday, Repeat, Delete } from '@mui/icons-material';
// import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './TaskDetails.css';
import { useTasks } from '../context/TaskContext';

const TaskDetails = ({ task, onClose }) => {
  const { toggleStar, toggleComplete } = useTasks();
  const [dueDate, setDueDate] = useState(null);
  const [isStarred, setIsStarred] = useState(task.starred);

  const handleDateChange = (newValue) => {
    setDueDate(newValue);
  };

  const handleStarClick = () => {
    toggleStar(task.id);
    setIsStarred(!isStarred);
  };

  const handleCompleteClick = () => {
    toggleComplete(task.id);
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#eef3ec', width: 300, display: 'flex', flexDirection: 'column', height: '100%' }} className="taskd">
      <List style={{ flex: 1 }}>
        <ListItem>
          <ListItemIcon>
            <Checkbox checked={task.completed==='true'} onClick={handleCompleteClick} />
          </ListItemIcon>
          <ListItemText primary={task.text}/>
          <IconButton onClick={handleStarClick}>
            {isStarred ? <Star style={{ color: '#fdd835' }} /> : <StarBorder />}
          </IconButton>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Add Step" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="Set Reminder" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CalendarToday />
          </ListItemIcon>
          {/* Uncomment the following lines after installing and configuring date pickers
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="Add Due Date"
              value={dueDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Repeat />
          </ListItemIcon>
          <ListItemText primary="Repeat" />
        </ListItem>
        <ListItem>
          <TextField
            fullWidth
            variant="outlined"
            label="Add Notes"
            multiline
            rows={2}
          />
        </ListItem>
      </List>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', marginTop: 'auto', borderTop: '1px solid #ccc' }}>
        <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>X</button>
        <span>Created Today</span>
        <IconButton>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default TaskDetails;
