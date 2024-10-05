import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";
import toast from 'react-hot-toast';

const Signup = () => {
  const[input,setInput]=useState({name:"",email:"",password:"",city:""});
  let navigate=useNavigate();


  function handlechange(e){
    let {name,value}=e.target;
    setInput({...input,[name]:value})
  }
  function handlemit(e){
    e.preventDefault();
    console.log(input);
    
    axios.post("http://localhost:5000/users",input).then(()=>{console.log("data sent")
      setInput({name:"",email:"",password:"",city:""})
      toast.success("Signup successfully")
      navigate("/login")
    }).catch(()=>console.log("data not sent")
    )
  }

  return (
    <div className='container'>
        <form action="" onSubmit={handlemit}>
          <input type="text" name='name' placeholder='Enter Name' onChange={handlechange} value={input.name} />
          <input type='email' name="email" placeholder='Enter Email' onChange={handlechange} value={input.email}/>
          <input type='password' name="password" placeholder='Enter Password' onChange={handlechange} value={input.password}/>
          <input type='text' name="city" onChange={handlechange} placeholder='Enter City' value={input.city}/>
          <input type='submit' value="Signup"/>
        </form>
    </div>
  )
}

export default Signup