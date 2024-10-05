import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  let {id}=useParams()
  let navgt=useNavigate();
  const[user,setUser]=useState();

  // getting user data
  useEffect( ()=>{
   async function getuser(){
    let {data}=await axios.get(`http://localhost:5000/users/${id}`,user);
    setUser(data)
   }
   getuser()
  },[id])

  function handlechange(e){
    let {name,value}=e.target;
    setUser({...user,[name]:value})
  }
  function handlemit(e){
    e.preventDefault();
    axios.put(`http://localhost:5000/users/${id}`,user).then(()=>{console.log("data sent")
    }).catch(()=>console.log("data not sent")
    )
    navgt(-1)
  }
  return (
    <div className='container'>
      <fieldset>
        <form action="" onSubmit={handlemit}>
          <label htmlFor="">Name</label>
          <input type="text" name='name' onChange={handlechange} value={user?.name} />
          <label htmlFor="">Country Code</label>
          <input type='text' name="code" onChange={handlechange} value={user?.code}/>
          <input type='submit' value="update"/>
        </form>
      </fieldset>
      </div>
  )
}

export default Edit