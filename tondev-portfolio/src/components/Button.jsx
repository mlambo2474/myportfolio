import React from 'react'

const Button = ({children}) => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300  text-white text-center p-2 h-12 w-40 rounded-md my-4 text-lg cursor-pointer'>
    {children}
    </div>
  )
}

export default Button