import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import KanbanBoard from './components/KanbanBoard';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <KanbanBoard />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
