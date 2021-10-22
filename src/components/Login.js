import React from 'react'
import { Formik } from 'formik';

function Login() {


  return (

    <Formik 
      initialValues={{
        name: "",
        email: ""

      }}
      validate={(values) => {
        if(!values.name) {
          console.log("")
        }
      }}
      onSubmit={(values) =>{
        console.log(values);
        console.log("formulario enviado");
      }}
    >
      {({values, handleSubmit, handleChange, handleBlur}) => ( //estructura renderer prop
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="Joel Martinez" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="example@example.com" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </Formik>
  )
}

export default Login
