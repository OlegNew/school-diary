import React from 'react'
import StringGroups from '../humanString/humanString';
import Button from '../button/button';
import HumanString from '../humanString/humanString';

function FormTeacher(props){
    return (
      <div className='bodu-form'>
        <div className="zagolovok-form">
          <div >Учителя</div>
        </div>
        <div className='conteiner-form'>
          <Button  > Добавить</Button >
          {/* <StringGroups></StringGroups> */}
          <HumanString></HumanString>
        </div>
      </div>
    )
  }
  
  export default FormTeacher;