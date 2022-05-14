import React from 'react'
import Button from '../button/button';

function StringGroups(props) {
  return (
    <div className='humanString'>
        <div className='info-person'>
                <div className='name-person'>
                    Группа: {props.group} человек:{props.people}
                </div>
                <div className='position-person'>
                   Куратор: {props.kyrator}
                </div>
            </div>
            
            <div className='button-box-humanString'>
                <Button>Редактировать</Button>
                <Button>Удалить</Button>
            </div>
    </div>
  )
}


export default StringGroups;
