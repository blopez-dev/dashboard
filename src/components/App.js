import React, { useEffect, useState, useRef, useReducer } from 'react';
import logo from '../logo.svg';
import '../App.css';

// Computed => 
  // Si sumamos, deberiamos multiplicar el proximo counter por 10
  // Si restamos, deberiamos dividir el proximo counter por 10

const initialState = {
  counter: 0,
  counterComputed: 1,
  color: 'black'
}

// state => estado actual del componente && { type, payload } => accion que actualizara nuestro componente
const reducer = (state, action) => {

  // type => que accion vamos a ejecutar
  // payload => datos pertinentes a la accion a vamos a ejecutar
  
  switch (action.type) {
    case 'addCounter': {
      const nextCounter = state.counter + 1
        return {
          ...state,
          counter: nextCounter,
          counterComputed: (nextCounter * 10) * state.counterComputed,
          color: nextCounter ? 'red' : 'blue',
        }
    }
    case 'removeCounter': {
      const nextCounter = state.counter - 1
      return {
        ...state,
        counter: nextCounter,
        counterComputed: (nextCounter / 10) / state.counterComputed,
        color: nextCounter % 2 === 0 ? 'red' : 'blue'
      }
    }
    default:
      return {
        ...state
      }
  }

}

function App() {

  const [{ counter, counterComputed, color }, dispatch] = useReducer(reducer, initialState)

  // const message = useRef('Hola que tal?')
  const counterElement = useRef(null)
  // const [counter, setCounter] = useState(0)
  // const [color, setColor] = useState('black')


  const handleCounter = (type) => {
    dispatch({
      type,
    })
  }

  return (
    <div className="App">
        <div ref={counterElement} style={{ color: color }}><p>{counter}</p> <p>{counterComputed}</p> </div>
        <button onClick={() => handleCounter('addCounter')}>Add</button>
        <button onClick={() => handleCounter('removeCounter')}>Remove</button>
       
    </div>
  );
}


export default App;
