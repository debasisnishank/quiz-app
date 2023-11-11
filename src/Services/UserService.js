import axios from 'axios'
const BASE_URL = "http://localhost:8080/api/users";

export const GetAllUser = () => axios.get(BASE_URL)
export const InsertUser = (user) => axios.post(BASE_URL,user)
export const DeleteUser = (userid) => axios.delete(BASE_URL+"/"+userid)
export const UpdateUser = (user,userid) => axios.put(BASE_URL+"/"+userid,user)