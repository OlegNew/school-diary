import React from 'react'
import StringGroups from '../humanString/humanString';
import FormGroups from '../form/formGroups';
import Subject from '../form/subject';
import FormTeacher from '../form/formTeacher';
import Classrooms from '../lists/classrooms';
import InformationTimetable from '../schedules/informationTimetable';

function ContentFirst(props){
    return (
        <div className='main-read-content'>
                
        <FormTeacher></FormTeacher>
        <Classrooms classrooms={["5А","5B","5Д","6А","6B","6Д",]}> </Classrooms>
        

            
        <div className='lesson-schedule'>
            {/* <TeacherEditForm>
            
            </TeacherEditForm> */}
            {/* <InformationLesson week_day="Среда" date_lession="09.05.22" class_name="11A"></InformationLesson >
            <InformationLesson week_day="Среда" date_lession="09.05.22" class_name="11A"></InformationLesson >
            <InformationLesson week_day="Среда" date_lession="09.05.22" class_name="11A"></InformationLesson > */}
            <InformationTimetable></InformationTimetable>
        </div>
        <FormGroups></FormGroups>
        <Subject predmet="математика" ></Subject>
    </div>
    )
  }
  
  export default ContentFirst;