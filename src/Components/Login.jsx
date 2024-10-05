import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";
import toast from 'react-hot-toast';

const Login = () => {
  const[input,setInput]=useState({name:"",email:"",password:"",city:""});
  let[users,setUsers]=useState();
  let navigate=useNavigate(); 

//   fetching all user
useEffect(()=>{
    async function fetchusers(){
        let {data}=await axios.get('http://localhost:5000/users')
        setUsers(data)
    }
    fetchusers()
},[])

  function handlechange(e){
    let {name,value}=e.target;
    setInput({...input,[name]:value})
  }

  function handlemit(e){
    e.preventDefault();
    console.log(input);
    // find authenticated user
    let authuser=users?.find((user)=>{
        return user.email===input.email && user.password===input.password;
    })
    if(authuser){
        toast.success(`welcome ${authuser.name}`)
        sessionStorage.setItem("id",authuser.id)
        navigate("/profile")
    }
    else{
        toast.error("not registered")
        navigate("/signup")
    }
  }

  return (
    <div className='container'>
        <form action="" onSubmit={handlemit}>
          <input type='email' name="email" placeholder='Enter Email' onChange={handlechange} value={input.email}/>
          <input type='password' name="password" placeholder='Enter Password' onChange={handlechange} value={input.password}/>
          <input type='submit' value="Login"/>
        </form>
    </div>
  )
}

export default Login;