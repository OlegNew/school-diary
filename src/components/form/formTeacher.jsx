import React from 'react'
import StringGroups from '../humanString/humanString';
import Button from '../button/button';
import HumanString from '../humanString/humanString';
import axios from 'axios';
import Modal from './modal/modal';


function FormTeacher(props){

  const [formData, setFormData] = React.useState(
    {
        name: "", 
        role: "", 
        age: "", 
    }
)

  const [modalActive, setModalActive] = React.useState(false)

  const [users, setUsers] = React.useState([])

  let mappedUsers = users.map(item => {
    return  <HumanString key={item.id} data={item}/>
    
  })

  console.log(users)


  function handleChange(event) {
    console.log(event)
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  const addUser = () => {
    axios.post('http://localhost:3001/create', {
        name: formData.name,
        role: formData.role,
        age: formData.age,
    }).then(() => {
      setUsers(prev => {
        return [...prev, {
          name: formData.name,
          role: formData.role,
          age: formData.age,
        }]
      })
      setModalActive(prev => !prev)
    })
}


  console.log(formData)

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get('http://localhost:3001/users')
    .then((response) => {
      setUsers(response.data)
    })
    setModalActive(prev => {
      return !prev;
    })
  }


  const close = () => {
    setModalActive(prevValue => {
      return !prevValue;
    })
  }

    return (
      <div className='bodu-form'>
        <div className="zagolovok-form">
          <div >Учителя</div>
        </div>
        <div className='conteiner-form'>
          <Button onClick={getUsers}> Добавить</Button >
        
         {mappedUsers}
        </div>

        <Modal active={modalActive} setActive={setModalActive}>
            <div className="modal-wrapper">
            <span onClick={close} class="modal__close">&times;</span>

                <div className="modal-item">
                  <label>Имя:</label>
                  <input type="text" 
                    onChange={handleChange}
                    name="name"
                    value={formData.name}/>
                </div>

                <div className="modal-item">
                  <label>Должность:</label>
                  <input type="text"
                    onChange={handleChange}
                    name="role"
                    value={formData.role} />
                </div>

                <div className="modal-item">
                  <label>Возраст:</label>
                  <input type="age" 
                    onChange={handleChange}
                    name="age"
                    value={formData.age}/>
                </div>

                <button onClick={addUser} className="button-standart button">Добавить</button>

            </div>
       
        </Modal>

      </div>
    )
  }
  
  export default FormTeacher;