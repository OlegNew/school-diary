import React from 'react'
import StringGroups from '../humanString/stringGroups';
import Button from '../button/button';

function FormGroups(props){
  return (
    <div className='bodu-form'>
        <Button id="1"  > Добавить</Button >
        <StringGroups></StringGroups>
    </div>
  )
}

export default FormGroups;