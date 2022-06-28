import React from 'react'
import StringGroups from '../humanString/stringGroups';
import Button from '../button/button';

function FormGroups(props){
  return (
    <div className='bodu-form'>
      <div className="zagolovok-form">
        <div >Классы</div>
      </div>
      <div className='conteiner-form'>
        <Button id="1"  > Добавить</Button >
        <StringGroups></StringGroups>
      </div>
    </div>
  )
}

export default FormGroups;