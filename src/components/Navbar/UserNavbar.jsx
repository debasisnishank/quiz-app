import { useNavigate } from "react-router-dom"
// import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const UserNavbar = ({ username }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/")
  }


  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">Quiz App</div>
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              {username && (
                <span className="nav-link">Welcome, {username}!</span>
              )}
            </li>
          </ul>
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default UserNavbar
