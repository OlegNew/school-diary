


import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './App.css';
import {Button,  ButtonString,  Classrooms,  InformationTimetable, Subject, FormGroups, FormTeacher } from './components';

import ContentFirst from './components/form/formTeacher';
import ContentSecond from './components/form/formGroups';
import ContentSchedule from './components/form/formSchedule';


function App() {
    
    // const mysql = require("mysql");

    // //конфигурация

    // const conn = mysql.createConnection({
    // host: 'http://localhost:8080/',
    // user: 'root',
    // database: 'rct_school_diary',
    // pasword: '',
    // })

    // conn.connect(function (err) {
    //     if (err) {
    //         return console.error("Ошибка: " + err.message);
    //     }
    //     else {
    //         console.log("Подключение к серверу MySQL успешно установлено");
    //     }
    // });


    function showTeacherContent() {
        console.log('click')
    }
    
    return(
        <BrowserRouter>
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
                        <div className='left_menu_pynkt'>
                            <Link className="button-string" to="/">Учителя</Link>
                            <Link className="button-string" to="/students">Ученики</Link>
                            <Link className="button-string" to="/schedule">Расписание</Link>
                        </div>
                </div>
                

                {/* Здесь создаются роуты на страницы */}
                <Routes>
                    <Route path="/" element={<ContentFirst/>} />
                    <Route path="/students" element={<ContentSecond/>} />
                    <Route path="/schedule" element={<ContentSchedule/>} />
                </Routes>
                 {/* Здесь создаются роуты на страницы */}
           
               
            </div>
            
        </div>
        </BrowserRouter>
        
    )
  
}

export default App;
