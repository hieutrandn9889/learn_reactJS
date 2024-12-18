import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nameList = ['test', 'test1'];
  const nameObj = {
    name: 'hello',
    old: 23,
    email:'hieutran@gmail.com'
  }

  const [name, setName] = useState('HieuTran1')

  const handleChangeName = () => {
    setName ('HieuTran2')
    
  }

  console.log("render");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{name}</div>
        <div>{nameList}</div>
        <div>{nameObj.name}</div>
        <div>{nameObj.old}</div>
        <div>{nameObj.email}</div>
        <button onClick={handleChangeName}>Change name</button>
      </header>
    </div>
  );
}

export default App;
