import React from 'react';

function InformationLesson(props){
    var newProps = JSON.parse(JSON.stringify(props));
    if(newProps.week_day === undefined) newProps.week_day = "Среда";
    if(newProps.date_lession === undefined) newProps.date_lession = "09.05.22";
    if(newProps.class_name === undefined) newProps.class_name = "11A";
    return (
        <div className="lesson-table">
            {/* даные урока*/}
            <div className="lesson-title">
                <div>{newProps.week_day} {newProps.date_lession}</div>
                <div>{newProps.class_name}</div>
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
                    {newProps.time}08:00
                    </div>
                    <div className='lession-info-table'>
                        <div className='lession-name-table'> {newProps.lesson_subject}Иностранный. язык</div>
                        <div className='lession-teacher-name-table'>{newProps.teacher_name}Ольга Владимировна</div>
                    </div>
                    <div className='lession-info-kabinet'>
                    {newProps.kab} 122
                    </div>

                </div>
            </div>
            <div className="lesson-bodu">
                    <div className='table-lession-info'>
                    <div className='lession-info-time'>
                    {newProps.time}09:50
                    </div>
                    <div className='lession-info-table'>
                        <div className='lession-name-table'> {newProps.lesson_subject}Биология</div>
                        <div className='lession-teacher-name-table'>{newProps.teacher_name}Наталья николаевна</div>
                    </div>
                    <div className='lession-info-kabinet'>
                    {newProps.kab} 312
                    </div>

                </div>
            </div>
            <div className="lesson-bodu">
                    <div className='table-lession-info'>
                    <div className='lession-info-time'>
                    {newProps.time}10:45
                    </div>
                    <div className='lession-info-table'>
                        <div className='lession-name-table'> {newProps.lesson_subject}Геометрия</div>
                        <div className='lession-teacher-name-table'>{newProps.teacher_name}Александр иванович</div>
                    </div>
                    <div className='lession-info-kabinet'>
                    {newProps.kab} 356
                    </div>

                </div>
            </div>

        </div>
    )

}


export default InformationLesson;