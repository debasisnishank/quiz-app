
import { useState } from "react"
import "./LoginForm.css"

const LoginForm = () => {

    const [popupError, showPopupError] = useState("hide")
    const popup = () => {
        showPopupError("login-popup")
        setTimeout(() => showPopupError("hide"), 2000)

    }

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" name="username" placeholder="username" />
            <input type="text" name="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>
            <div className={popupError}>
                <h3>
                    Login Failed
                </h3>
                <p>
                    username or password incorrect
                </p>
            </div>

        </div>
    )
}

export default LoginForm
