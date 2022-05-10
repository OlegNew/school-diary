import React from 'react';

function InformationLesson(props){
    //чтоб глаза не мозолило
    if(props.week_day === undefined) props.week_day = "Среда";
    if(props.date_lession === undefined) props.date_lession = "09.05.22";
    if(props.class_name === undefined) props.class_name = "11A";
    return (
        <div className="lesson-table">
            {/* даные урока*/}
            <div className="lesson-title">
                <div>{props.week_day} {props.date_lession}</div>
                <div>{props.class_name}</div>
            </div>


            {/* строка на каждый урок*/}
            <div className="lesson-bodu">
                <div className='table_ontents_lession'>
                    <div className='lession-info-time'> Время </div>
                    <div className='lession-info-table'> Предмет / Имя учителя  </div>
                    <div className='lession-info-kabinet'> каб</div>
                </div>
                <div className='table-lession-info'>
                    <div className='lession-info-time'>
                    {props.time}08:00
                    </div>
                    <div className='lession-info-table'>
                        <div className='lession-name-table'> {props.lesson_subject}Математика</div>
                        <div className='lession-teacher-name-table'>{props.teacher_name}Ольга</div>
                    </div>
                    <div className='lession-info-kabinet'>
                    {props.kab} 356
                    </div>

                </div>
            </div>

        </div>
    )

}


export default InformationLesson;