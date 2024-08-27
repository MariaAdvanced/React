// Updater function = A function passed as an argument to setState()usually ex. setYear(year +1)
// Allow for safe updates based on the previous state . Used with multiple state updates and asynchronous functions. Good Practice to use updater function
import { useState } from "react";

function UpdaterFunctions(){
    
   const [count, setCount] = useState(0);
   function increment(){
    //Uses the CURRENT state to calculate the NEXT state.
    //set functions do not trigger an update.
    // React batches together state update for perfomance reasons.
    // NEXT state becomes the CURRENT state after an update
    // setCount(count + 1);
    
   //Takes the PENDING state to calculate NEXT state
   // React puts your updater functin in a queue (waiting in line)
   //During the next render, it will call them in the same order
   setCount(c => c + 1);
   setCount(c => c + 1);
   setCount(c => c + 1);
   }
   function decrement(){
    setCount(count - 1);
   }
   function reset(){
    setCount(0);
   }
   
    return(
   <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment }>Increment </button>
   </div>
    );
    }
    export default UpdaterFunctions