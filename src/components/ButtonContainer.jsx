import React from 'react'

const ButtonContainer = ({onGoalClick, onThoughtCLick}) => {
  return (
    <div className='flex flex-col items-center justify-evenly'>
        <button onClick={onGoalClick} className='mb-4 shadow-sm bg-white w-full py-2 border-green-400 border-4
        rounded-lg hover:translate-y-[-5px] hover:shadow-xl s:hover:translate-y-[0px] s:active:border-green-900 text-xl
        font-mono text-green-800 active:border-green-900'>Create Goal</button>
        <button onClick={onThoughtCLick} className='shadow-sm bg-white w-full py-2 border-green-400 border-4
        rounded-lg hover:translate-y-[-5px] s:hover:translate-y-[0px] s:active:border-green-900 hover:shadow-xl text-xl
        font-mono text-green-800 active:border-green-900'>Add Thought</button>
    </div>
  )
}

export default ButtonContainer