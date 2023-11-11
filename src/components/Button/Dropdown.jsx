import { Link } from "react-router-dom"
import "./Dropdown.css"

const CustomDropdown = () => {

    return (

        <div className="dropdown">
            <div className="dropbtn">Manage User
                <i className="fa fa-caret-down"></i>
            </div>
            <div className="dropdown-content">
                <Link to="/admin/adduser">Add User</Link>
                <Link to="/admin/viewusers">See UserList</Link>

            </div>
        </div>



    )
}

export default CustomDropdown
