import {
BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import LoginForm from './components/LoginForm'
import './App.css'

function App() {
  

  return (
   <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
   </Router>
  )
}

export default App
