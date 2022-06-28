import React from 'react';
import Button from '../button/button';

function HumanString(props){
    return (
        <div className='humanString'>
            <div className='info-person'>
                <div className='name-person'>
                    Трофимов Александр Иванович
                </div>
                <div className='position-person'>
                    Учитель геомметрии, математики
                </div>
            </div>
            
            <div className='button-box-humanString'>
                <Button   > Редактировать</Button >
                <Button   > Удалить</Button >
            </div>
        </div>
        
        
    )
}

export default HumanString;