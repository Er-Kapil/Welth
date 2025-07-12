import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-center pt-40 bg-white'>
      {children}
    </div>
  )
}

export default AuthLayout
