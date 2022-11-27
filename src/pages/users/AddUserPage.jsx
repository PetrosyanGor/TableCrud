import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const AddUserPage = () => {

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });
  const navigate = useNavigate();


  const onInputChange = e =>{
    setUser({...user, [e.target.name]: e.target.value});
  }

  const onSubmit = async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:3000/users', user);
    navigate('/');
  }

  return (
    <div className="AddUserPage">
      <h2>ADD NEW USER</h2>
      <form onSubmit={onSubmit}>
        <div>
          Name: <input type="text" value={user.name} name='name' onChange={e=> onInputChange(e)} />
        </div>
        <div>
          UserName: <input type="text" value={user.username} name='username' onChange={e=> onInputChange(e)} />
        </div>
        <div>
          Email: <input type="text" value={user.email} name='email' onChange={e=> onInputChange(e)} />
        </div>
        <div>
          PHone: <input type="text" value={user.phone} name='phone' onChange={e=> onInputChange(e)} />
        </div>
        <div>
          WebSAte: <input type="text" value={user.website} name='website' onChange={e=> onInputChange(e)} />
        </div>
        <input type="submit" value="ADD NEW user" />
      </form>
    </div>
  )
}

export default AddUserPage