import { Container } from '@mui/material';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Players from './components/Players';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Players />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
