import React, { Children } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Login from './Components/Login';

const PrivateRoute = ({children}) => {
    let id=sessionStorage.getItem("id");
  return (
    <div>{id?<>{children}</>:<Navigate to={"/login"}/>}</div>
  )
}

export default PrivateRoute