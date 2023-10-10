import React from 'react';
import NavBar from './components/NavBar';
import { Box } from '@mui/material';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FilmDetailPage from './pages/FilmDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/details/:id",
    element: <FilmDetailPage />
  },
])

function App() {
  return (
    <Box className="App" sx={{ color: "white", bgcolor: "#1A1A1D", minHeight: "100vh" }}>
      <NavBar />
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
