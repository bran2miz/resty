//import React from 'react'
// only doing this one (useReducer) to help prepare for redux
import { useReducer } from "react";


// define the initial state

const initialStateValue = {
  characters:[
  {name:'Ariel', color:'red'},
  {name:'Eric', color: 'black'},
  {name:'Ursula', color: 'purple'},
  {name:'Sebastian', color: 'orange'},
  {name:'Flounder', color: 'yellow'}
],
  active:{}
}

// state and action automatically pass in state and action once it calls dispatch
function reducerFunction(state, action) {
  //switch looks like a function
  switch(action.type) {
    // inside a switch you make your cases (if the value of the switch)
    case 'ADD_CHARACTER':
      return {...state, active: {}, characters: [...state.characters, action.payload]};
    case "ACTIVATE_CHARACTER":
      return {
        ...state, active: state.characters.find(char => char.name === action.payload)
      }
  }
}


const Characters = ()=> {
  //dispatch in redux; fire off a function that is going to run code to update state
  //useReducer takes in a reducer function and an initial value in state
  const [state, dispatch] = useReducer(reducerFunction, initialStateValue);

  const handleActivateCharacter = (name) => {
    const action = {
      type: 'ACTIVATE_CHARACTER',
      payload: name
    }
    dispatch(action)
  };

  return (
  <div>
    <h1>
    Characters in The Little Mermaid
    </h1>
    <strong>
      {state.active.name ? `${state.active.name} is ${state.active.color}`: 'Click a character to learn their secrets'}
    </strong>
    <ul>
      {state.characters.map(char => (
      <li key={char.name} onClick={()=>handleActivateCharacter(char.name)}>{char.name}</li>
      ))}
    </ul>
  </div>
  )
}
export default Characters;