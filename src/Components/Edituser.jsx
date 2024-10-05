import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./Signup.css";
import toast from 'react-hot-toast';

const Edituser = () => {
  const[input,setInput]=useState();
  let {id}=useParams()
  let navigate=useNavigate();

  useEffect(()=>{
    async function getuser(){
        let {data}=await axios.get(`http://localhost:5000/users/${id}`)
        setInput(data)
    }
    getuser()
  },[])


  function handlechange(e){
    let {name,value}=e.target;
    setInput({...input,[name]:value})
  }
  function handlemit(e){
    e.preventDefault();
    console.log(input);
    
    axios.put(`http://localhost:5000/users/${id}`,input).then(()=>{console.log("data updated")
      setInput({name:"",email:"",password:"",city:""})
      toast.success("Updated")
      navigate("/profile")
    }).catch(()=>console.log("data not sent")
    )
  }

  return (
    <div className='container'>
        <form action="" onSubmit={handlemit}>
          <input type="text" name='name' placeholder='Enter Name' onChange={handlechange} value={input?.name} />
          <input type='email' name="email" placeholder='Enter Email' onChange={handlechange} value={input?.email}/>
          <input type='password' name="password" placeholder='Enter Password' onChange={handlechange} value={input?.password}/>
          <input type='text' name="city" onChange={handlechange} placeholder='Enter City' value={input?.city}/>
          <input type='submit' value="Update"/>
        </form>
    </div>
  )
}

export default Edituser