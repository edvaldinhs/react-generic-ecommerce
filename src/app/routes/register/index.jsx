import { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import Trash from '../../../containers/ui/icons/icons8-lixo.svg';
import api from '../../../services/api'
import Sidebar from '../../../containers/layout/aside';

function Register() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputEmail = useRef()
  const inputDate = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/user')

    setUsers(usersFromApi.data)
  }

  async function createUser() {
    await api.post('/user', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      date: inputDate.current.value + "T00:00:00.000Z"
    })

  }

  useEffect(() => {
    getUsers()
  }, [])

  async function deleteUser(id) {
    try {
      await api.delete(`/user/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }

  return (
    <div className={styles.displayFlex}>
      <Sidebar logoEnabled={true} />
      <div className={styles.container}>
        <form>
          <h1>Cadastro de Usuários</h1>
          <h3>Nome</h3>
          <input name="name" type="text" ref={inputName} />
          <h3>Email</h3>
          <input name="email" type="text" ref={inputEmail} />
          <h3>Data</h3>
          <input name="date" type="date" ref={inputDate} />
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
              <button><img src={Trash} onClick={() => deleteUser(user.id)} alt="Delete" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Register;
