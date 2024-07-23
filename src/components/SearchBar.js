import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/tasksSlice';
import { TextField } from '@mui/material';
import '../App.css'
const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search tasks..."
      onChange={handleSearch}
      fullWidth
      sx={{ mb: 2 }}
    />
  );
};

export default SearchBar;
