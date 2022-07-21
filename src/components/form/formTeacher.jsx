import React from 'react'
import StringGroups from '../humanString/humanString';
import Button from '../button/button';
import HumanString from '../humanString/humanString';

function FormTeacher(props){

  console.log(props.data)


  let mappedUsers = props.data.map(item => {
    if(item.deleted) return  <HumanString key={item.id} data={item}/>
    
  })

    return (
      <div className='bodu-form'>
        <div className="zagolovok-form">
          <div >Учителя</div>
        </div>
        <div className='conteiner-form'>
          <Button  > Добавить</Button >
        
         {mappedUsers}
        </div>
      </div>
    )
  }
  
  export default FormTeacher;