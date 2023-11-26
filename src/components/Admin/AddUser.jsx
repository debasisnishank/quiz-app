import { useEffect, useState } from 'react';
import { AdminNavbar } from '../Navbar/AdminNavbar';
import "./style/AddUser.css"
import { GetUserById, InsertUser, UpdateUser } from '../../Services/UserService';
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom';

const AddUser = () => {
    // const [errors, setError] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const { id } = useParams();
    const navigator = useNavigate();
    useEffect(() => {
        if (id) {
            GetUserById(id).then((response) => {
                console.log(response)
                setEmail(response.data.email)
                setPassword(response.data.password)
                setUsername(response.data.username)
            })

        }
    }, [id])
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const user = { email, password, username }
    //     InsertUser(user).then((response) => {
    //         console.log(response);
    //         setEmail("");
    //         setPassword("");
    //         setUsername("");
    //         if (response.status == 200) {
    //             Swal.fire({
    //                 icon: "success",
    //                 title: "New User Added",
    //                 text: "Successfully"
    //             });
    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                text: 'Something went wrong!',
    //             })
    //         }
    //     }).catch(error =>
    //         console.log(error))
    // }
    const pageTitle = () => {
        if (id) {
            return <h2 className='text-center'>Update User</h2>
        }
        else {
            return <h2 className='text-center'>Add User</h2>
        }
    }
   const saveOrupdate = (e) =>{ 
    e.preventDefault();
  
    const user = {email,password,username};
      if(id){ 
        UpdateUser(user,id).then((response)=>{
        console.log(response.data);
        navigator("/admin/viewusers")
        })
      }
      else{ 
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
    })
      }
    }



    return (
        <div>
            <AdminNavbar />
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                <form onSubmit={saveOrupdate}>
                    <div className='main'>
                        {

                            pageTitle()
                        }
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                            <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )



}

export default AddUser
