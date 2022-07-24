import React from 'react';
import Button from '../button/button';
import User from '../form/formUser';
import axios from 'axios';

function HumanString(props){

    // console.log(props)

    const [deletedUser, setDeletedUser] = React.useState(props.data.deleted)

    const deleteUser = () => {
        console.log('click')
        setDeletedUser(prevValue => {
            return !prevValue;
        })
    }
    
    const editUser = () => {
        // console.log('edit')
        axios.put('http://localhost:3001/update', {name: 'dsda', id: 11})
        .then(response => {
            console.log('update')
        })
    }




    return (
        
        <div className='humanString'>
            <div className='info-person'>
                <div className='name-person'>
                   {props.data.name}
                </div>
                <div className='position-person'>
                {props.data.role}
                </div>
                <div className='position-age'>
                {props.data.age}
                </div>
                <div className='position-photo'>
                <img src={props.age} alt="" />
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