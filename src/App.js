import { Fragment, useState } from 'react';

function App() {
  // if we pass function in useState then it render only once 
  // this is useful when computational heavy task is done
  const [count, setCount] = useState(() => {
    return 0
  })

  
  const [object, setObject] = useState({ color: "red", theme: "darkknight"})
  const color = object.color
  const theme = object.theme


  const decrementHandler = () => {
   setCount(prevCount => prevCount - 1)
   setObject(prevObject => {
     // state management in object overrides therefore ...prevObject is provided
     return {...prevObject, color: prevObject.color = "blue"}
   })
  }

  const incrementHandler = () => {
    setCount(prevCount => prevCount + 1)
    setObject(prevObject => {
      return {...prevObject, color: prevObject.color = "green"}
    })
    
  }
  return (
    <Fragment>
    <div>
      <button onClick={decrementHandler}>-</button>
      <span>{count}</span>
      <button onClick={incrementHandler}>+</button>
    </div>

    <div>
      <span><h6>{color}</h6></span>
      <span><h6>{theme}</h6></span>
    </div>
    </Fragment>
  );
}

export default App;
