import { Container } from '@mui/material';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Players from './components/Players';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Routes>
          <Route path='/' element={<Players />} />
          <Route path='/detail/:id' element={<Players />} />
          <Route path='/news' element={<Players />} />
          <Route path='/about' element={<Players />} />
          <Route path='/contact' element={<Players />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
