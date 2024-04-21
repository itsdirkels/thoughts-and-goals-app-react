import React from 'react'

const AppContainer = (props) => {
  return (
    <div className=' bg-gradient-to-b from-green-700 to-green-700
    shadow-lg  ml-auto mr-auto mt-[8vh] border-white border-4
    rounded-xl w-2/4 flex flex-col items-center min-h-[80vh] min-w-[80vw]
    s:h-[105vh] s:w-full s:m-0 s:scale-90 max-h-768:scale-95'>
      {props.children}
    </div>
  )
}

export default AppContainer