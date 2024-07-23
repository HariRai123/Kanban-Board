import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import TaskForm from './TaskForm';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../App.css'
const AddTaskButton = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = (task) => {
    dispatch(addTask(task));
    setOpen(false);
  };

  return (
    <div>
      <Fab color="primary" onClick={() => setOpen(true)} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AddIcon />
      </Fab>
      {open && <TaskForm onClose={() => setOpen(false)} onSave={handleAddTask} />}
    </div>
  );
};

export default AddTaskButton;
