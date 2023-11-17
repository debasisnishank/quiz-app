import { useState } from 'react';
import { AdminNavbar } from '../Navbar/AdminNavbar';
import "./style/AddUser.css"
import { InsertUser } from '../../Services/UserService';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
const AddUser = () => {
    // const [errors, setError] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const {id} = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = { email, password, username }
        InsertUser(user).then((response) => {
            console.log(response);
            setEmail("");
            setPassword("");  
            setUsername("");
            if (response.status == 200) {
                Swal.fire({
                    icon: "success",
                    title: "New User Added",
                    text: "Successfully"
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        }).catch(error =>
            console.log(error))
    }
    const pageTitle = (id) => { 
        if(id){ 
          return <h2 className='text-center'>Update User</h2>
        }
        else{ 
          return <h2 className='text-center'>Add User</h2>
        }
      }
    return (
        <div>
            <AdminNavbar />
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                <form onSubmit={handleSubmit}>
                    <div className='main'>
                        { 
                        
                        pageTitle()
                        }
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddUser
