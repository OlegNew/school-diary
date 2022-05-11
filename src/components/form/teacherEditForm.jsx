import React from 'react';
// import {Button,TeacherEditForm} from './components';

import Button from '../button/button';

function TeacherEditForm({props}){
    return (
        <div className='form-edit-teacher'>
            <div className='form-edit-teacher-zagolovok'>
                Учитель
            </div>
            <div className='form-edit-teacher-bodu'>
                <div className='foto-teacher'>
                
                </div>
                <div className='fields-teacher'>
                    <div className='pole-zapolnenia'>
                        <div>Фамилия</div>
                        <input  className='inpyt-edit' placeholder={"Фамилия"}  type={"text"}></input>
                    </div>
                    
                    <div className='pole-zapolnenia'>
                        <div>Имя</div>
                        <input  className='inpyt-edit' placeholder={"Имя"}  type={"text"}></input>
                    </div>
                    <div className='pole-zapolnenia'>
                        <div>Отчество</div>
                        <input  className='inpyt-edit' placeholder={"Отчество"}  type={"text"}></input>
                    </div>
                    
                    <div className='pole-zapolnenia'>
                        <div>Должность</div>
                        <input  className='inpyt-edit' placeholder={"Должность"}  type={"text"}></input>
                    </div>
                    <div className='pole-zapolnenia'>
                        <div className='checkbox-vibor-klassa'>
                            <input type="checkbox" атрибуты></input> <div>Куратор</div>
                            <select>
                                <option>5А</option>
                                <option>5В</option>
                            </select>
                        
                        </div>
                    </div>
                    
                    

                </div>
                <div className='edit-teacher-button'>
                    <Button>Добавить </Button>
                    
                    <Button >Редактирование </Button>
                    <Button>Отмена </Button>
                
                </div>
            </div>
        </div>
    )
}




export default TeacherEditForm;