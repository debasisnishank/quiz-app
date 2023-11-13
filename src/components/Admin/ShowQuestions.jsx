import  { useEffect, useState } from 'react'
import {AdminNavbar} from "../Navbar/AdminNavbar"
import axios from 'axios'
import EditQuestionModal from './EditQuestionModal'
const ShowQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState("");
    const [editedQuestion, setEditedQuestion] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
  
    useEffect(() => {
      fetchQuestions();
    }, []);
 
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/questions/getAllQuestion"
        );
        setQuestions(response.data);
      } catch (error) {
        setError("Failed to fetch questions");
      }
    };
  
    const handleDeleteQuestion = async (id) => {
      console.log("Delete question with id: ", id);
      try {
        await axios.delete(`http://localhost:8080/api/questions/${id}`);
        fetchQuestions(); // Refresh the question list
      } catch (error) {
        setError("Failed to delete question");
      }
    };
  
    const handleEditQuestion = (question) => {
      setEditedQuestion(question);
      setShowEditModal(true);
    };
  
    const handleUpdateQuestion = async (updatedQuestion) => {
      try {
        await axios.put(
          `http://localhost:8080/api/questions/${updatedQuestion.id}`,
          updatedQuestion
        );
        fetchQuestions(); // Refresh the question list
        setShowEditModal(false); // Close the edit modal
      } catch (error) {
        setError("Failed to update question");
      }
    };
  return (
     )
}

export default ShowQuestions
