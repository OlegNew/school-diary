import React from 'react'
import Button from '../button/button';
import Subject from '../schedules/subject';



function formSubject({props}){
  return (
    <div className='bodu-form'>
        <div className='zagolovok-form'>
        <div >Предметы</div>
        </div>
        <div className='conteiner-form'>
          <Button id="1"  > Добавить</Button >
          <Subject></Subject>
        </div>

    </div>
  )
}

export default form;