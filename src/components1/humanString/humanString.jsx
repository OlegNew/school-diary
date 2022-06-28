import React from 'react';
import Button from '../button/button';

function HumanString(props){
    return (
        <div className='humanString'>
            <div className='info-person'>
                <div className='name-person'>
                    Наместников Леонид Николаевич
                </div>
                <div className='position-person'>
                    доктор физико-математических наук, профессор
                </div>
            </div>
            
            <div className='button-box-humanString'>
                <Button />
                <Button />
            </div>
        </div>
        
        
    )
}

export default HumanString;