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



function App() {
    function clickPoKnopke(){
        alert("fdsgfgsfd");

    }


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
                        </div>
                </div>


                {/* Здесь создаются роуты на страницы */}
                <Routes>
                    <Route path="/" element={<ContentFirst/>} />
                    <Route path="/students" element={<ContentSecond/>} />
                </Routes>
                 {/* Здесь создаются роуты на страницы */}
           
               
            </div>
            
        </div>
        </BrowserRouter>
        
    )
  
}

export default App;
