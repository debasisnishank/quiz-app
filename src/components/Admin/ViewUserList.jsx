
import { useState } from 'react'
import { AdminNavbar } from '../Navbar/AdminNavbar'
const INITIAL_STATE = [
  { id: 1, name: 'Tommy', age: 21, hobby: 'coding' },
  { id: 2, name: 'Anna', age: 19, hobby: 'reading' },
  { id: 3, name: 'Bobby', age: 16, hobby: 'swimming' },
  { id: 4, name: 'Lauren', age: 25, hobby: 'running' }
]

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1)
}
const ViewUserList = () => {
  const [users, setUsers] = useState(INITIAL_STATE)

  const renderUsers = () => {
    return users.map(({ id, name, age, hobby }) => {
      return <tr key={id} >
        <td style={{ padding: '10px', border: '1px solid black' }}>{id}</td>
        <td style={{ padding: '10px', border: '1px solid black' }}>{name}</td>
        <td style={{ padding: '10px', border: '1px solid black' }}>{age}</td>
        <td style={{ padding: '10px', border: '1px solid black' }}>{hobby}</td>
      </tr>
    })
  }

  const renderHeader = () => {
    return <tr>
      {Object.keys(INITIAL_STATE[0]).map(key => <th>{capitalize(key)}</th>)}
    </tr>
  }

  const renderTable = () => {
    return (
      <table>
        {renderHeader()}
        <tbody>
          {renderUsers()}
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <AdminNavbar />
      <h2 style={{ textAlign: "center",marginTop:"5px",color:"#676767",fontWeight:"700" }}>Users Details</h2>
      <table className='table table-striped table-bordered' >
        <thead>
          <tr className='text-center'>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            INITIAL_STATE.map(employee => <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td style={{ textAlign: "center" }}>
                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                <button style={{ marginLeft: '10px' }} className='btn btn-danger' onClick={() => removeEmployee(employee.id)}>Delete</button>
              </td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  )
}

export default ViewUserList
