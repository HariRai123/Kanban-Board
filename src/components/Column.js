import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { Paper, Typography, Box } from '@mui/material';
import '../App.css'
const Column = ({ column, tasks }) => {
  return (
    <Paper sx={{ width: '23%', backgroundColor: '#f5f5f5', p: 2 }}>
      <Typography variant="h6">{column.title}</Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{ minHeight: '500px', mt: 2 }}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Paper>
  );
};

export default Column;
