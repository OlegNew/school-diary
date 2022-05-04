
import React from 'react';
import Button from './components/button/button';
import './App.css';
import HumanString from './components/humanString/humanString';
import ButtonString from './components/button/buttonString';



function App() {
    
    return(
        <div className='wrapper'>
            <div className='header'>
                <div name="name_school" className='name_school'>
                    СОШ № 21
                </div>
                <div className='top_menu'>
                    <div name="staff_school" className='top_menu_school'>
                        Люди
                    </div>
                    <div name="new_school" className='top_menu_school top_menu_obyavlenia' >
                        Объявления
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
                            <ButtonString />
                        </div>
                </div>
                <div className='main-read-content'>
                <Button id="1" > Добавить</Button >
                    <HumanString />
                </div>
            </div>
            
        </div>
        
        
    )
  
}

export default App;
