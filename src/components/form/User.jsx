import React from 'react'


function User(props){
  return (
    <div className='bodu-form'>
        <input className='name' type="text" />
        <input className='lastName' type="text" />
        <input className='age' type="text" />
        <input className='role' type="text" />
    </div>
  )
}

export default User;