import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Home />
      </Router>

    </div>
  );
}

export default App;
