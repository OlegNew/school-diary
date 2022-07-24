import React from 'react';
import Button from '../button/button';
import User from '../form/formUser';

function HumanString(props){

    console.log(props)

    const [deletedUser, setDeletedUser] = React.useState(props.data.deleted)

    const deleteUser = () => {
        console.log('click')
        setDeletedUser(prevValue => {
            return !prevValue;
        })
    }
    
    const editUser = () => {
        console.log('edit')
     
    }




    return (
        
        <div className='humanString' style={{display: deletedUser ? "flex" : "none"}}>
            <div className='info-person'>
                <div className='name-person'>
                   {props.data.name + ' ' + props.data.lastname}
                </div>
                <div className='position-person'>
                {props.data.role}
                </div>
                <div className='position-age'>
                {props.data.age}
                </div>
                <div className='position-photo'>
                <img src={props.data.age} alt="" />
                </div>
            </div>
            
            <div className='button-box-humanString'>
                <Button onClick={editUser}> Редактировать </Button >
                <Button onClick={deleteUser}  > Удалить</Button >
            </div>
        </div>
        
        
    )
}

export default HumanString;