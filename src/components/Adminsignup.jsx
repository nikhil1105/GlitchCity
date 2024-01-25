import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { StarsCanvas } from './canvas';
import Nav from './Navbar';

function Adminsup() {
  const [name,setname] = useState('')
  const [pass,setpass] = useState('')
  const [clgpass,setclgpass] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    fetchUsers();
  },[])

  const fetchUsers = () => {
    axios.get('http://localhost:3001/adminreg').then((res)=>{
        console.log(res.data);
    }).catch((e)=>{
      console.log('error',e);
    })
  }

  const handlesubmit= (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/adminreg',{clgpass,username:name,password:pass})
    .then((res)=>{
      setname('')
      setpass('')
      setclgpass('')
      fetchUsers()
      navigate('/adminlogin')
    }).catch((e)=>{
      console.log('error',e);
    })
  } 
  

  return (
    <div className=" main flex items-center justify-center bg-[#222020] w-[100vw] h-[100vh] "  ><Nav/>
      <form onSubmit={handlesubmit}  className="border-4  border-[#ae09dc9f] p-20 bg-[#4c20b1] max-w-[90vw] bg-opacity-[0.7] rounded-xl">
        <div className="text-[30px] font-bold text-white ">Admin Registration </div>

        <div className=" m-2 ">
          
          <div className=" my-2 text-white font-semibold ">Username</div>
          <input required className=" m-2 rounded w-full " onChange={(e)=>setname(e.target.value)} name="username" /><br />
          <div className=" my-2 text-white font-semibold ">Password</div>
          <input required type='password' className=" m-2 rounded w-full " onChange={(e)=>setpass(e.target.value)} name="password" /><br />
          <div className=" my-2 text-white font-semibold ">College Password</div>
          <input required type='password' className=" m-2 rounded w-full " onChange={(e)=>setclgpass(e.target.value)} name="password" /><br />

          <button className="border-2 hover:bg-black bg-[#ae09dc9f] hover:border-white text-white rounded-xl font-bold px-4 py-2 my-4" type="submit">
            Sign-in
          </button>
          <br/>
          <Link to='/adminlogin' className=" capitalize my-2 text-white font-semibold ">Already Have Account Login Here </Link>
        </div>
      </form>
      <StarsCanvas/>
    </div>
  )
}

export default Adminsup
