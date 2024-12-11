import { useState } from 'react'
import './App.css';
import Counter from './Components/Counter';

function App() {
  const [count, setCount]=useState(0);

  //Increment fn
  const increment =()=>{
    if(count<10){
    setCount((prev) =>prev+1);
    }
  };

  //Decrement Fn
  const decrement =()=>{
    if(count>0){
    setCount((prev) => prev-1);
    }
};
  return (
    <>
    <Counter count={count} increment={increment} decrement={decrement}/>
    </>
  )
}

export default App
