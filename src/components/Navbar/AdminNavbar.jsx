
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export const AdminNavbar = ({ username }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">
                            Add Question
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/show-questions">
                            Show Question
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/generate-quiz">
                            Generate Quiz
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/showuserrecord">
                            Show User Response Quiz
                        </Link>
                    </li>

                    <li className="nav-item">
                        {username && <span className="nav-link">Welcome, {username}!</span>}
                    </li>
                </ul>
                <button className="btn btn-outline-light" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    )
}

