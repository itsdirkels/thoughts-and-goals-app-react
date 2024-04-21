import React from 'react'

const AppContainer = (props) => {
  return (
    <div className=' bg-gradient-to-b from-green-300 to-green-400
    shadow-lg  ml-auto mr-auto mt-[8vh] border-white border-4
    rounded-xl w-2/4 flex flex-col items-center min-h-[80vh] min-w-[80vw]
    s:h-[100vh] s:w-full s:m-0'>
      {props.children}
    </div>
  )
}

export default AppContainer