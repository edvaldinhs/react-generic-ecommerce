import { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import Trash from '../../../containers/ui/icons/icons8-lixo.svg';
import api from '../../../services/api'

function Register() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputEmail = useRef()
  const inputDate = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/user')

    setUsers(usersFromApi.data)
  }

  async function createUser(){
    await api.post('/user', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      date: inputDate.current.value + "T00:00:00.000Z"
    })

  }

  useEffect(() =>{
    getUsers()
  }, [])

  return (
    <div className={styles.container}>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="name" type="text" ref={inputName}/>
        <input name="email" type="text" ref={inputEmail}/>
        <input name="date" type="date" ref={inputDate}/>
        <button type="button" onClick={createUser}>Cadastrar</button>
      </form>
    
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Data de Nascimento: {new Date(user.date).toLocaleDateString()}</p>
          </div>
          <div>
            <button><img src={Trash} alt="Delete" /></button>
          </div>
        </div>
  ))}
     </div>
  );
}


export default Register;
