import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
      </Router>

    </div>
  );
}

export default App;
