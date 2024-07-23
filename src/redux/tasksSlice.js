import { createSlice } from '@reduxjs/toolkit';
import '../App.css'
const initialState = {
  tasks: [],
  searchTerm: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) task.status = status;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addTask, updateTaskStatus, setSearchTerm } = tasksSlice.actions;
export default tasksSlice.reducer;
