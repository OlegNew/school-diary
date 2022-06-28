import React from 'react'
import Button from '../button/button';
import InformationLesson from '../schedules/informationLesson';
import InformationTimetable from '../schedules/informationTimetable';

function formScheduleTeachers(props){
  return (
    <div className='bodu-form'>
      <div className="zagolovok-form">
        <div >Расписание</div>
      </div>
      <div className='conteiner-form'>
        {/* <InformationTimetable week_day="Понидельник" date_lession="30.05.22" ></InformationTimetable>
        <InformationTimetable week_day="Вторник" date_lession="31.05.22" ></InformationTimetable> */}
        <InformationLesson></InformationLesson>
        
      </div>  
    </div>
  )
}

export default formScheduleTeachers;