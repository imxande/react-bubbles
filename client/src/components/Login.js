import React, {useState} from "react";
import axios from 'axios';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input, 'Input here it works!')
    axios
         .post('http://localhost:5000/api/login', input)
         .then(res =>{
           console.log(res)
           localStorage.setItem('token', res.data.payload)
           props.history.push('/bubble')
         })
         .catch(err => console.log(err)) 
  }

  const handleChange = e => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      <form onSubmit = {handleSubmit}>
        <label htmlFor = 'username'>UserName: </label>
        <input 
          type = 'text'
          value = {input.username}
          name = 'username'
          onChange = {handleChange}
        />

        <label htmlFor = 'password'>Password: </label>
        <input 
          type = 'password'
          value = {input.password}
          name = 'password'
          onChange = {handleChange}
        />
        <button type = 'submit'>LOGIN</button>        
      </form> 
      
    </>
  );
};

export default Login;
