import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"

import './App.css'
import QuizPage from "./components/User/QuizPage"
import AdminLogin from "./components/Admin/AdminLogin"
import ShowQuestions from "./components/Admin/ShowQuestions"
import QuizGenerator from "./components/Admin/QuizGenerator"
import ShowUserResponse from "./components/Admin/ShowUserResponse"
import Logins from "./components/Logs/Logins"
import LoginForm from "./components/Logs/LoginForm"
import AddUser from "./components/Admin/AddUser"
import ViewUserList from "./components/Admin/ViewUserList";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logins />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user" element={<QuizPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/show-questions" element={<ShowQuestions />} />
        <Route path="/admin/generate-quiz" element={<QuizGenerator />} />
        <Route path="/admin/showuserrecord" element={<ShowUserResponse />} />
        <Route path="/admin/adduser" element={<AddUser />} />
        <Route path="/admin/viewusers" element={<ViewUserList />} />

      </Routes>
    </Router>
  )
}

export default App
