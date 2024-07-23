import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import '../App.css'
const preloadedState = {
  tasks: {
    tasks: [
      { id: '1', title: 'Task 1', description: 'Description 1', status: 'todo' },
      { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress' },
      { id: '3', title: 'Task 3', description: 'Description 3', status: 'peer-review' },
      { id: '4', title: 'Task 4', description: 'Description 4', status: 'done' },
    ],
    searchTerm: '',
  },
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState,
});
