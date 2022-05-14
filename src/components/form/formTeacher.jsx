import React from 'react'
import StringGroups from '../humanString/humanString';
import Button from '../button/button';
import HumanString from '../humanString/humanString';

function FormTeacher(props){
    return (
      <div className='bodu-form'>
          <Button  > Добавить</Button >
          {/* <StringGroups></StringGroups> */}
          <HumanString></HumanString>
      </div>
    )
  }
  
  export default FormTeacher;