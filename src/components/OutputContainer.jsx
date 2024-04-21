import React from 'react'

const OutputContainer = ({children}) => {
  return (
    <div className='mt-8 box-border w-11/12 bg-gradient-to-b 
    from-green-100 to-green-200 border-white border-4
    min-h-[20rem] h-[40%] shadow-inner p-5
    flex flex-row items-stretch justify-evenly m-10 s:mb-4 s:overflow-scroll csm:overflow-scroll'>
        {children}
    </div>
  )
}

export default OutputContainer