import React from 'react'
import Button from '../button/button';

function FormUser(props){
  return (
    // <div className='bodu-form'>
    //     <input className='name' type="text" />
    //     <input className='lastName' type="text" />
    //     <input className='age' type="text" />
    //     <input className='role' type="text" />
    // </div>
    <div className='bodu-form'>
      <div className="zagolovok-form">
        <div >Редактировать</div>
      </div>
      <div className='conteiner-form'>  
        


        <Button id="1"  > Добавить</Button >
      </div>
    </div>
  )
}

export default FormUser;