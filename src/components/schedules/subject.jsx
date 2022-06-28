import React from 'react'
import Button from '../button/button';
function Subject(props){
  var newProps = JSON.parse(JSON.stringify(props));
  if(newProps.predmet === undefined)  newProps.predmet = "математика";
  return (
    <div className='bodu-form'>
        <div className='zagolovok-form'>
          <div >Предметы</div>
        </div>
        <div className='conteiner-form'>
          <div className='subject'> 
            <div className='subject-conteiner'>{newProps.predmet}</div>
            
            <div>
              <Button >Редактирование </Button>
              <Button >Удалить </Button>
            </div>
          </div>
          
          

        </div>

    </div>
  )
}

export default Subject;