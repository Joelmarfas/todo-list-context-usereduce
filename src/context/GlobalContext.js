import { createContext, useEffect, useReducer } from "react"
import appReducer from "./AppReducer"
import { v4 } from "uuid"
import Axios from "axios"
// import { AUTH_TOKEN } from "../api/AxiosAuth"

const initialState = {

  tasks: JSON.parse(localStorage.getItem("tasksSaved")) || []
}

export const GlobalContext = createContext (initialState);


export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState)


  const APICall = async () => {
    const APIResponse =
    await Axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=YEovNuiHI4JkifcrTf8s6ntiBH5mxeQC&limit=25&rating=g`
      )
      console.log(APIResponse.data.data)
  }

  useEffect (() => {
    localStorage.setItem("tasksSaved", JSON.stringify(state.tasks));
    APICall();
  }, [state]);



  const addTask = (task) => {
    // console.log(task)
    dispatch({type: "ADD_TASK", payload: {...task, id: v4(), done: false }})
  }

  const deleteTask = (id) => {
    dispatch({type: "DELETE_TASK", payload: id})
  }

  const updateTask = (task) => {
    console.log(task)
   dispatch({type: "UPDATE_TASK", payload: task})
  }

  const toggleTaskDone = id => dispatch({type: "TOGGLE_TASK_DONE", payload: id})
    

  return (
  <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, toggleTaskDone, APICall }}>
    {children}
  </GlobalContext.Provider>
  );
};