import './App.css';
import Skywalker from './components/Skywalker';
import { Router, Link } from "@reach/router"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Skywalker path="/" />
        </Router>
        
      </header>
    </div>
  );
}

export default App;
