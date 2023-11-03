import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./LoginForm.css"
import axios from "axios"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const MySwal = withReactContent(Swal)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/login", {
                username: username,
                password: password,
            });
            //getting role response from the backend
            const role = response.data;
            //Handling the response as role based
            if (role === 'admin') {
                navigate("/admin",
                    { state: { username: username } });
            }
            else if (role === 'user') {
                navigate("/user",
                    { state: { username: username } });
                MySwal.fire({
                    icon: 'success',
                    title: 'Successfully Logged',
                    text: '',

                })
            } else {

                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid Credentials',

                })
            }
        }
        catch (error) {

            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to Log in',

            })
        }


    }
    const resetForm = () => {
        setUsername("");
        setPassword("");

    }



    return (
        <div className="cover">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >


                {/* username */}
                <input type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.username)} />


                {/* password */}
                <input type="text"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className="login-btn">
                    Login
                </button>
                <br />
                <button type="reset" className="reset-btn" onClick={resetForm}>
                    Reset
                </button>

            </form>



        </div>
    )
}

export default LoginForm
