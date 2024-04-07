import Characters from "./Characters";
import { useState, useEffect, useCallback } from "react";
import Chance from 'chance';

const chance = new Chance;


const App = ()=> {
  const [number, setNumber] = useState(10);
  const [showThis, setShowThis] = useState(false);

  const [thisText, setThisText] = useState('');


  const handleShowText = useCallback(() => {
    setThisText(`Wow! The number is over 100, it is ${number}`);
    setShowThis(true);
  },[number]);

  const handleRemoveText = () => {
    setThisText("");
    setShowThis(false);
  }

  const handleAddSome = () => {
    const newNum = chance.integer();
    setNumber(number + newNum);
  }
  
  useEffect(()=> {
    if (number > 100) {
      handleShowText()
    } else {
      handleRemoveText()
    }
  },[number, handleShowText])

  // wants the number because it is the piece of state that is going to change

  // memoization is acheived through useCallback
  // prevents unnecessary re-renders. 
  // won't do anything if the number changes, will do same thing everytime. But if the number changes, I will have to re-evaluate the function and create a new function. 
  

  // whene there isn't a dependency it won't error out because the state hasn't changed. 
 

  
  return (
  <div>
    <Characters />
    {number}
    <button onClick={handleAddSome}>Add Some</button>
    {showThis && <h1>{thisText}</h1>}
  </div>)
}
export default App;