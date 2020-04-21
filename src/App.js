import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import KeyPad from './components/Keypad'
import Result from './components/Result'

function App(props) {

  const [result, setResult] = useState('');

  const onClick = (button) => {
    switch(button){
      case '=':
      calculate();
      break;
      case 'C':
      reset();
      break;
      case "CE":
      backspace();
      break;
      default :
      setResult(result + button);
    }
  }

    const  calculate = () => {
        try {
            setResult((eval(result) || "" ) + "")
        } catch (e) {
            setResult("Error")
        }
    };

    const reset = () => {
        setResult("")
    };

    const backspace = () => {
        setResult(result.slice(0, -1))
    };

    return (
    <div className="App">
      <header className="App-header">
        <p>
         Calculator
        </p>
        <Result result={result}/>
        <KeyPad onClick={onClick}/>
      </header>
    </div>
  );
}

export default App;
