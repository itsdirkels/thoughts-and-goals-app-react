import "./index.css"

import AppContainer from "./components/AppContainer"
import FormContainer from "./components/FormContainer";
import OutputContainer from "./components/OutputContainer";
import { useEffect, useState } from "react";

function App() {
  const [arrThoughts, setArrThoughts] = useState([]);
  const [arrGoals, setArrGoals] = useState([]);


  useEffect(() => {
    const storedArrThoughts = localStorage.getItem('arrThoughts');
    const storedArrGoals = localStorage.getItem('arrGoals');
    if (storedArrThoughts) {
      setArrThoughts(JSON.parse(storedArrThoughts));
    }
    if (storedArrGoals) {
      setArrGoals(JSON.parse(storedArrGoals));
    }
  }, []);


  const handleClearDataClick = () => {
    setArrGoals([]);
    setArrThoughts([]);
    localStorage.removeItem('arrGoals');
    localStorage.removeItem('arrThoughts');
    localStorage.clear();
  
  }

  return (
    <>
      <AppContainer>
        <FormContainer 
          arrThoughts={arrThoughts} 
          setArrThoughts={setArrThoughts} 
          arrGoals={arrGoals} 
          setArrGoals={setArrGoals}
        />
        <OutputContainer>
          <div className="flex flex-col items-center justify-around ">
            <h2 className="text-center font-mono text-xl">Goals</h2>
            <div className="bg-green-300 w-[38rem] break-words s:w-[18rem] flex flex-col items-center ">
            {arrGoals.map(goal => {
              return <p className="max-w-[38rem] block mb-2"><i>✍️</i>{goal}</p>
            })}
            </div>
            <h2 className="text-center font-mono text-xl">Thoughts</h2>
            <div className="bg-green-300 text-center w-[3rem] s:w-[18rem] flex flex-col items-center break-words">
            {arrThoughts.map(thought => {
              return <p className="max-w-[30rem] block mb-2"><i>💭</i>{thought}</p>
            })}
            </div>
            
          </div>
          
        </ OutputContainer>
        <button className="mb-8" onClick={handleClearDataClick}>Clear All</button>
      </AppContainer>
    </>
  );
}

export default App;
