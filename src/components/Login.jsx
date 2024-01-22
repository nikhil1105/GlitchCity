import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import { useLocation, useNavigate,Link } from "react-router-dom";
import { StarsCanvas } from './canvas';

function Login() {

  const [name, setname] = useState('')
  const [pass, setpass] = useState('')
  const navigate = useNavigate()
  const location = useLocation();
  const currentPath = location.pathname;
  

  useEffect(() => {
    fetchUsers();
      
  }, [])

  const fetchUsers = () => {
    axios.get('http://localhost:3001/register').then((res) => {
    }).catch((e) => {
      console.log('error', e);
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post('http://localhost:3001/login', { username: name, password: pass })
      const token = response.data.token
      setname('')
      setpass('')
      fetchUsers();
      navigate(`/${currentPath == '/login' ? 'dashboard' : currentPath}`)
      window.location.reload();
      localStorage.setItem('token', token)
    } catch (error) {
      console.log('Login Error', error)
    }
  }



  return (
    <div className=" main flex items-center justify-center bg-[#222020] w-[100vw] h-[100vh] gap-10 "  >
      <form onSubmit={handleLogin} className="border-4  border-[#ae09dc9f] p-20 bg-[#4c20b1] max-w-[90vw] bg-opacity-[0.7]  rounded-xl">
        <div className="text-[30px] font-bold text-white ">Login </div>

        <div className=" m-2 ">
          <div className=" my-2 text-white font-semibold ">Username</div>
          <input className=" m-2 rounded w-full " onChange={(e) => setname(e.target.value)} name="username" /><br />
          <div className=" my-2 text-white font-semibold ">Password</div>
          <input type='password' className=" m-2 rounded w-full " onChange={(e) => setpass(e.target.value)} name="password" /><br />

          <button className="border-2 hover:bg-black bg-[#ae09dc9f] hover:border-white text-white rounded-xl font-bold px-4 py-2 my-4" type="submit">
            Login
          </button><br/>
          <Link to='/signup' className=" my-2 text-white font-semibold capitalize ">Not Have Account Sign-up Here </Link>

        </div>
        
      </form>

       
    <StarsCanvas />
    </div>
  )
}

export default Login
