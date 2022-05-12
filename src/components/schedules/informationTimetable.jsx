import React from 'react';

function InformationTimetable(props){
    //чтоб глаза не мозолило
    var newProps = JSON.parse(JSON.stringify(props));//чтозв? ну вот "Вы должны создать копию propsиспользования JSON.parse()иJSON.stringify()"
    if(newProps.week_day === undefined) newProps.week_day = "Среда";
    if(newProps.date_lession === undefined) newProps.date_lession = "09.05.22";
    if(newProps.class_name === undefined) newProps.class_name = "11A";
    return (
        <div className="timetable-table">
            {/* даные урока*/}
            <div className="lesson-title">
                <div>{newProps.week_day} {newProps.date_lession}</div>
            </div>


            {/* строка на каждый урок*/}
            <div className="lesson-bodu">
                <div className='table_ontents_timetable'>
                    <div className='timetable-info-time'> Время </div>
                    <div className='timetable-info-table'> Предмет / Имя учителя  </div>
                    <div className='timetable-info-kabinet'> Каб.</div>
                    <div className='timetable-info-klass'> Класс</div>
                </div>
                <div className='table-timetable-info'>
                    <div className='timetable-info-time'>
                    {props.time}08:00
                    </div>
                    <div className='timetable-info-table'>
                        <div className='timetable-name-table'> {props.lesson_subject}Математика</div>
                       
                    </div>
                    <div className='timetable-info-kabinet'>
                    {props.kab} 356
                    </div>
                    <div className='timetable-info-klass'>
                    <div>{newProps.class_name}</div>
                    </div>

                </div>
            </div>

        </div>
    )

}


export default InformationTimetable;