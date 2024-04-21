import React, { useEffect } from 'react'
import { useState } from 'react';
import ButtonContainer from './ButtonContainer'

const FormContainer = ({arrThoughts, setArrThoughts, arrGoals, setArrGoals}) => {
  const [textAreaValue, setTextareaValue] = useState('');

  const handleTextAreaChange = event => {
    setTextareaValue(event.target.value);
  }

  const handleGoalClick = () => {
    const newGoals = [...arrGoals, textAreaValue];
    setArrGoals(newGoals);
    localStorage.setItem('arrGoals', JSON.stringify(newGoals));
    setTextareaValue('');
  }

  const handleThoughtClick = () => {
    const newThoughts = [...arrThoughts, textAreaValue];
    setArrThoughts(newThoughts);
    localStorage.setItem('arrThoughts', JSON.stringify(newThoughts));
    setTextareaValue('');
  }

  useEffect(() => {
    setTextareaValue('');
  }, [arrThoughts, arrGoals])


  return (
    <div className='mt-12 box-border w-11/12 bg-gradient-to-b 
    from-green-300 to-green-500 border-white border-4
    min-h-[20rem] h-[40%] shadow-inner p-5
    flex flex-col items-stretch justify-evenly'>
        <h1 className='text-center font-mono font-bold text-green-800
        text-2xl mb-2 border-b-4 border-green-800'>This is a SaFe SpAcE for YOU</h1>
        <textarea className='border-green-300 border-4 h-[5rem] p-4
        text-lg s:mb-4' value={textAreaValue} onChange={handleTextAreaChange}/>
        <ButtonContainer onGoalClick={handleGoalClick} onThoughtCLick={handleThoughtClick} />
    </div> 
  )
}

export default FormContainer