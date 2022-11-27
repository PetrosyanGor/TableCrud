import axios from 'axios';
import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const HomePage = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    loadUsers();
  }, []);

  const loadUsers = async()=>{
    const response = await axios.get('http://localhost:3000/users/');
    setUsers(response.data);
  }

  const deleteUser = async(id)=>{
    await axios.delete('http://localhost:3000/users/' + id);
    
    const newUsers = users.filter(el => el.id !== id);
    setUsers(newUsers);
  }

  return (
    <div className='HomePage'>
      <button onClick={()=> navigate('/users/add')}>ADD NEW USER</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
         {
          users.map(user=> (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={()=> navigate('/users/' + user.id)}>view</button>
                <button onClick={()=> navigate('/users/edit/' + user.id)}>edit</button>
                <button onClick={()=> deleteUser(user.id)}>delete</button>
              </td>
            </tr>
          ) )
         }
       </tbody>
      </table>
    </div>
  )
}

export default HomePage