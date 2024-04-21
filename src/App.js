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
            <div className="bg-white rounded-lg w-[38rem] break-words s:w-[18rem] flex flex-col items-center ">
            {arrGoals.map(goal => {
              return <p className="max-w-[38rem] block mb-2"><i>✍️</i>{goal}</p>
            })}
            </div>
            <h2 className="text-center font-mono text-xl">Thoughts</h2>
            <div className="bg-white rounded-lg text-center w-[38rem] s:w-[18rem] flex flex-col items-center break-words">
            {arrThoughts.map(thought => {
              return <p className="max-w-[30rem] block mb-2 "><i>💭</i>{thought}</p>
            })}
            </div>
            
          </div>
          
        </ OutputContainer>
      
        <button className="mb-8 font-mono text-xl mt-4 s:mt-2 
         bg-white w-[87.6rem] s:w-[80%] p-2 rounded-lg border-green-400 border-4 active:border-green-900" onClick={handleClearDataClick}>Clear All</button>
      
        <p className="mx-auto drop-shadow-lg w-2/4 rounded-xl p-1 m-10 text-center text-3xl text-black mt-[20px] break-words ">@Copyright DirkWesselsFreelancing</p>
      </AppContainer>
      
     
    </>
  );
}

export default App;
