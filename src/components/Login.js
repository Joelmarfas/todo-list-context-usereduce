import React from 'react'
import { Formik } from 'formik';

function Login() {


  return (

    <Formik 
      
    >
      {() => ( //estructura renderer prop
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="Joel Martinez"/>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="example@example.com"/>
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </Formik>
  )
}

export default Login
