import { Route, Switch } from "react-router-dom"
import Gifs from "./components/Gifs"

import Heading from "./components/Heading"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

import { ContextProvider } from "./context/GlobalContext"

// import { axios } from "./api/axios"
// import React, { useState, useEffect } from "react";

function App() {

  // const [gifs, setGifs] = useState([]);

  // console.log("Gifs: ", gifs);

  // const getGifs = async () => {
  //   const baseURL = ("https://api.giphy.com/v1/gifs/random?api_key=YEovNuiHI4JkifcrTf8s6ntiBH5mxeQC&tag=&rating=g")
  //   const response = await axios.get(baseURL).catch((err) => console.log("Error", err))
  //   console.log(response)

  //   if(response && response.data) setGifs(response.data)
    
  // }

  // useEffect(() => {
  //   getGifs();
  // }, []);


  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
              <Heading />
              <Switch>
                <Route path="/" component={TaskList} exact />
                <Route path="/add" component={TaskForm}/>
                <Route path="/edit/:id" component={TaskForm}/>
                <Route path="/gifs" component={Gifs}/>
              </Switch>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
