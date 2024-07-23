import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskStatus } from '../redux/tasksSlice';
import Column from './Column';
import SearchBar from './SearchBar';
import AddTaskButton from './AddTaskButton';
import { Box } from '@mui/material';
import '../App.css'
const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'peer-review', title: 'Peer Review' },
  { id: 'done', title: 'Done' },
];

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const searchTerm = useSelector(state => state.tasks.searchTerm);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    dispatch(updateTaskStatus({
      id: result.draggableId,
      status: result.destination.droppableId,
    }));
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 2 }}>
      <SearchBar />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {columns.map(column => (
            <Column key={column.id} column={column} tasks={filteredTasks.filter(task => task.status === column.id)} />
          ))}
        </Box>
      </DragDropContext>
      <AddTaskButton />
    </Box>
  );
};

export default KanbanBoard;
