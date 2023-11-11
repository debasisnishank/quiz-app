import { useState } from 'react';
import { AdminNavbar } from '../Navbar/AdminNavbar';
import "./style/AddUser.css"
const AddUser = () => {
    const [errors, setError] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    return (
        <div>
            <AdminNavbar />
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                <form>
                    <div className='main'>
                        <h2>Add User</h2>
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
