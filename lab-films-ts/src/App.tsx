import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import FilmDetailPage from './pages/FilmDetailPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Box className="App" sx={{ color: "white", bgcolor: "#1A1A1D", minHeight: "100vh" }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details/:id' element={<FilmDetailPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
