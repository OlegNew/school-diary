import React from 'react'
import Button from '../button/button';
import InformationLesson from '../schedules/informationLesson';
import InformationTimetable from '../schedules/informationTimetable';

function FormSchedule(props){
  return (
    <div className='bodu-form'>
      <div className="zagolovok-form">
        <div >Расписание</div>
      </div>
      <div className='conteiner-form'>
        <InformationLesson></InformationLesson>
        
      </div>  
    </div>
  )
}

export default FormSchedule;