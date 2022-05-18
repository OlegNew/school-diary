import React from 'react'
import Button from '../button/button';

function StringGroups(props) {
  var tempProps = JSON.parse(JSON.stringify(props));
  if(tempProps.group === undefined) tempProps.group = "ПО-114";
  if(tempProps.people === undefined) tempProps.people = "22";
  if(tempProps.kyrator === undefined) tempProps.kyrator = "Наместников Леонид Николаевич";

  return (
    <div className='humanString'>
        <div className='info-person'>
                <div className='name-person'>
                    Группа: {tempProps.group} человек:{tempProps.people}
                </div>
                <div className='position-person'>
                   Куратор: {tempProps.kyrator}
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
