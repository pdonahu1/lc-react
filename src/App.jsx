import { useState } from 'react';
import Another from './Another';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  const someStyle = {
    background: 'none',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
    marginRight: '8px',
    marginTop: '4px',
  }
  return (
    <div className="App">
      <header className="App-header">
        <Another name="Patrick" />
        <div>
          <span style={someStyle}>{count}</span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      { true &&
        <p style={someStyle}>{ 3 + 2 }</p>
      }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
