import React from 'react'
import Button from '../button/button';
function formSchedule(props){
  var tempProps = JSON.parse(JSON.stringify(props));
  if(tempProps.predmet === undefined)  tempProps.predmet = "математика";
  return (
    <div className='bodu-form'>
        <div className='zagolovok-form'>
          <div >Предметы</div>
        </div>
        <div className='conteiner-form'>
          <div className='subject'> 
            <div className='subject-conteiner'>{tempProps.predmet}</div>
            
            <div>
              <Button >Редактирование </Button>
              <Button >Удалить </Button>
            </div>
          </div>
          
          

        </div>

    </div>
  )
}

export default formSchedule;