
import { useState, useEffect } from 'react'
import { AdminNavbar } from '../Navbar/AdminNavbar'
import { DeleteUser, GetAllUser } from '../../Services/UserService'
import { useNavigate } from 'react-router-dom'

const ViewUserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUser();
  }, [])
  const getAllUser = () => {
    GetAllUser().then((response) => {
      console.log(response.data);
      setUsers(response.data);
    }).catch(error => console.log(error))
  }
  const handleUpdateUser = (id) => {
     navigate(`/update-user/${id}`);
  }
  
  const handleDeleteUser = (id) => {
    console.log(id);
    DeleteUser(id).then((response) => {
      getAllUser();
    }).catch((error => {
      console.log(error)
    }))
  }
   
}

export default ViewUserList
