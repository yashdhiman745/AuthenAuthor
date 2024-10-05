import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom';
import { TiEdit } from "react-icons/ti";


const Profile = () => {
    let [authuser,setAuthuser]=useState();
    let id=sessionStorage.getItem("id");

    useEffect(()=>{
        async function getusers(){
            let {data}=await axios.get(`http://localhost:5000/users/${id}`)
            setAuthuser(data)
        }
        getusers()
    },[id])
  return (
    <div className='profile-data'>
        <h2>Welcome {authuser?.name}</h2>
        <hr />
        <table  className="table" cellPadding={20} cellSpacing={15}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
            </tr>
            <tr>
                <td>{authuser?.name}</td>
                <td>{authuser?.email}</td>
                <td>{authuser?.city}</td>
                <td><Link to={`/edituser/${authuser?.id}`}><TiEdit /></Link></td>
            </tr>
        </table>

    </div>
  )
}

export default Profile