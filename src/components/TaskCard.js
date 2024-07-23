import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Paper, Typography } from '@mui/material';
import '../App.css'
const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ mb: 2, p: 2, backgroundColor: 'white' }}
        >
          <Typography variant="subtitle1">{task.title}</Typography>
          <Typography variant="body2">{task.description}</Typography>
        </Paper>
      )}
    </Draggable>
  );
};

export default TaskCard;
