import { Route, Switch } from "react-router-dom"
import Gifs from "./components/Gifs"

import Heading from "./components/Heading"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

import { ContextProvider } from "./context/GlobalContext"

// import { axios } from "./api/axios"
// import React, { useState, useEffect } from "react";

function App() {


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
