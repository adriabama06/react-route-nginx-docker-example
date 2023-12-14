import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  var paramsCounter = 0;
  
  if(searchParams.has("counter")) {
    paramsCounter = parseInt(searchParams.get("counter"));

    if(isNaN(paramsCounter)) {
      paramsCounter = 1;
    }
  }

  const [counter, setCounter] = useState(paramsCounter);

  const updateCounter = () => {
    const newCounterValue = counter + 1;

    /*
    setCounter((counterCurrent) => {
      return counterCurrent + 1;
    });
    */

    setCounter(() => newCounterValue)

    setSearchParams((searchParamsCurrent) => {
      searchParamsCurrent.set("counter", newCounterValue.toString());

      return searchParamsCurrent;
    });
  }

  return (
    <div className='card'>
      <div className='title'>
        <h1>{counter == 0 ? "Hello world" : `You clicked ${counter} times the button`}</h1>
        <h4>This is a subtitle, jeje, playing with CSS</h4>
        <p>This is the main route "/" in theory, true?</p>
        <div className='line'/>
      </div>
      <div className='content'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio accusamus qui, est necessitatibus vitae alias quae ipsum dicta, facere, adipisci molestias. Voluptas repudiandae ullam sit optio, vero vel doloremque.</p>
        <button onClick={() => {
          /*
          setCounter(counter + 1);
          */
          /*
          setCounter((counterCurrent) => {
            return counterCurrent + 1;
          });
          */
         updateCounter();
        }}
        style={{cursor: "pointer"}}>Clieck Me!</button>
      </div>
    </div>
  )
}

export default App
