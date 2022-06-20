import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [unseen, setUnseen] = useState("");
  

  const operations = ['+', '-', '*']
  const updateCalc = value => {
   

   if (operations.includes(calc.slice(-1)))
   {
    setUnseen(calc);
    setCalc(value);
   }
   else if(operations.includes(value))
   {
    if(result)
    {
      setCalc(result+value);
      setResult("");
    }
    else
    {
      setCalc(calc + value);
    }
   }
   else
   {
    setResult("");
    setCalc(calc + value);
   }
   /*  if(operations.includes(value) && result != "")
    {
      setCalc(result + value);
      setResult("");

    }
    else{
    setCalc(calc + value);
    } */
  }

  const evl = () =>
  {
    setResult(eval(unseen+calc).toString());
  }
  const clear = () =>
  {
    setResult("");
    setCalc("");
  }

  const del = () => 
  {
    if(result)
    {
      setResult("");
      setCalc("");
    }
    else
    {
      setCalc(calc.slice(0,-1))
    }
  }

  return (
    <body>
    <div className="App">
    <div className="calculator-grid">
    <div className="screen">
    {result ? result : calc ? calc : "" }
    </div>

    <button onClick={()=> updateCalc('7')}>7</button>
    <button onClick={()=> updateCalc('8')}>8</button>
    <button onClick={()=> updateCalc('9')}>9</button>
    <button onClick={()=> updateCalc('+')}>+</button>
    <button onClick={()=> updateCalc('4')}>4</button>
    <button onClick={()=> updateCalc('5')}>5</button>
    <button onClick={()=> updateCalc('6')}>6</button>
    <button onClick={()=> updateCalc('-')}>-</button>
    <button onClick={()=> updateCalc('1')}>1</button>
    <button onClick={()=> updateCalc('2')}>2</button>
    <button onClick={()=> updateCalc('3')}>3</button>
    <button onClick={()=> updateCalc('*')}>*</button>
    <button onClick={()=> updateCalc('0')}>0</button>
    <button onClick= {()=> clear()}>AC</button>
    <button onClick= {()=> evl()}>=</button>
    <button onClick= {()=> del()}>DEL</button>


    </div>
  
    </div>
    </body>
  );
}

export default App;
