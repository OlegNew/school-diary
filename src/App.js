
import React from 'react';
import './App.css';
import {Button, HumanString, ButtonString, InformationLesson} from './components';



function App() {
    function clickPoKnopke(){
        alert("fdsgfgsfd");

    }
    
    return(
        <div className='wrapper'>
            <div className='header'>
                <div name="name_school" className='name_school'>
                    СОШ № 21
                </div>
                <div className='top_menu'>
                    <div name="staff_school" className='name_frame'>
                        Учителя:
                    </div>

                </div>
                <div className='top_menu_right'>
                    <div name="role_school" className='top_menu_role'>
                        Диспетчер
                    </div>
                    <Button id="2" > Ярик </Button >
                </div>
            </div>
            <div className='main-content'>
                <div className='left-box'>
                        {/* <div name="name_punct">
                            Учителя
                        </div> */}
                        <div className='left_menu_pynkt'>
                            <ButtonString elementStringButton ="Учителя"> </ButtonString>
                            <ButtonString elementStringButton ="Люди"> </ButtonString>
                            <ButtonString elementStringButton ="Объявлениячителя"> </ButtonString>
                        </div>
                </div>
                <div className='main-read-content'>
                <Button id="1" onClick={clickPoKnopke} > Добавить</Button >
                    <HumanString />
                    <div className='lesson-schedule'>
                        <InformationLesson week_day="Среда" date_lession="09.05.22" class_name="11A"></InformationLesson >
                        <InformationLesson week_day="Среда" date_lession="09.05.22" class_name="11A"></InformationLesson >
                        <InformationLesson week_day="Среда" date_lession="09.05.22" class_name="11A"></InformationLesson >
                        <InformationLesson week_day="Среда" date_lession="09.05.22" class_name="11A"></InformationLesson >
                        <InformationLesson week_day="Среда" date_lession="09.05.22" class_name="11A"></InformationLesson >
                        <InformationLesson week_day="Среда" date_lession="09.05.22" class_name="11A"></InformationLesson >
                    </div>
                </div>
            </div>
            
        </div>
        
        
    )
  
}

export default App;
