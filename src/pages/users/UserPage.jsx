import axios from "axios"
import { useState, useEffect } from "react"
import {useParams, useNavigate} from 'react-router-dom'


export const UserPage = () => {

  const [user, setUser] = useState({});
  const {id} = useParams();
  const navigate = useNavigate(-1);

  useEffect(()=>{
    loadUser();
  }, []);

  const loadUser = async()=>{
    const response = await axios.get('http://localhost:3000/users/' + id);
    setUser(response.data);
  }

  return (
    <div className="UserPage">
      <button onClick={()=> navigate(-1)}>GO BACK</button>
      <h2>Name: {user.name}</h2>
      <ul>
        <li><b>USer Name:</b> {user.name}</li>
        <li><b>USer UserName:</b> {user.username}</li>
        <li><b>USer Email:</b> {user.email}</li>
        <li><b>USer Phone:</b> {user.phone}</li>
        <li><b>USer WebSite:</b> {user.website}</li>
      </ul>
    </div>
  )
}
