
import React from 'react';
import Button from './components/button/button';
import './App.css';
import HumanString from './components/humanString/humanString';



function App() {
    
    return(
        <div className='wrapper'>
            <div className='header'>
                <div name="name_school">
                    СОШ № 21
                </div>
                <div name="staff_school">
                    Люди
                </div>
                <div name="role_school">
                    Диспетчер
                </div>
                <Button />
            </div>
            <div className='main-content'>
                <div className='left-box'>
                        <div name="name_punct">
                            Учителя
                        </div>
                </div>
                <div className='main-read-content'>
                    <Button />
                    <HumanString />
                </div>
            </div>
            
        </div>
        
        
    )
  
}

export default App;
