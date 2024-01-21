import React, { useEffect, useState } from 'react'
import { StarsCanvas } from './canvas'
import axios from "axios";

function Cheatsheet() {

    const [photos, setphotots] = useState([])
    const [sub, setsub] = useState('DSA')
    const [upl,setupl] = useState(false)



    useEffect(() => {

        axios.get('http://localhost:3001/api/get').then((res) => {
            console.log(res.data);
            setphotots(res.data)
        }).catch((e) => console.log(e))

    }, [])

    const search = ()=>{
        
        axios.post('http://localhost:3001/api/search',{subject:sub}).then((res) => {
            console.log(sub);
            setphotots(res.data)
        }).catch((e) => console.log(e))
    }

    const handlechange = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('photo', e.target.files[0])
        formData.append('subject', sub)

        
        axios.post('http://localhost:3001/api/save', formData,{subject:sub})
            .then((res) => {
                console.log(res);
                setupl(false)
            }).catch((e) => console.log(e))
    }

    return (
        <>
            <div className=' flex items-center justify-between fixed main w-[100vw] h-[100vh]' >
                <StarsCanvas /></div>
            <div className=' w-auto flex flex-col items-start justify-center h-auto' >

                <div className={`${upl?'':'hidden'}  fixed flex flex-wrap w-fit h-fit p-4  bg-[#461ca7] border-4 rounded-xl border-[#ae09dc9f] bg-opacity-[0.95] z-10 top-[50%] left-[50%]`} style={{ transform: 'translate(-50%,-50%)' }} >
                    

                    
                    <div>
                        <label className='p-4 text-[25px] text-white font-bold' htmlFor="">Subject</label>
                        <button  className='fixed right-8 top-4 ' onClick={()=>setupl(false)}  ><img src="./assets/close.svg" className=' w-[25px] h-[25px] '/></button>
                        <br />
                        <select name="class" onChange={e => setsub(e.target.value)} className='m-4 ml-4 p-1' id="class">
                            <option value="DSA">DSA</option>
                            <option value="Algorithm">Algorithm</option>
                            <option value="Computer-Networks">Computer-Networks</option>
                            <option value="Digital-Electronics">Digital-Electronics</option>
                            <option value="Python-programming">Python-programming</option>
                            <option value=">Web-Technology">Web-Technology</option>
                            <option value="Advanced-JAVA-Programming">Advanced-JAVA-Programming</option>
                            <option value="Software-Testing">Software-Testing</option>

                        </select>

                    </div>
                    
                    <div>
                        <label htmlFor='file_picker' className=' p-2 ml-4  text-white font-bold cursor-pointer border bg-[#461ca7] rounded-xl hover:bg-white hover:text-black ' >upload file</label>
                        <input className='hidden' type="file" name='file_picker' id='file_picker' onChange={(e) => handlechange(e)} />

                    </div>
                </div>

                <div className='z-10' >
                    <button onClick={()=>setupl(!upl)} className=' fixed right-8 bottom-8 text-white font-bold cursor-pointer border bg-[#461ca7] p-4 rounded-xl hover:bg-white hover:text-black '>{upl?"Cancel":"upload file"}</button>
                </div>

                <div className=' relative p-4 mt-20 mx-10 max-w-[800px] bg-[#461ca7] border-4 rounded-xl w-[91vw] border-[#ae09dc9f] bg-opacity-[0.9]' >
                    <div className=" flex h-[100px] ">
                        <div className="flex flex-col w-full ">
                            <label className='text-white font-bold  text-[18px]' >Subject</label>
                            <select name="class" onChange={e => setsub(e.target.value)} className=' rounded mx-2 p-2 mt-[10px]' id="class">
                            <option value="DSA">DSA</option>
                            <option value="Algorithm">Algorithm</option>
                            <option value="Computer-Networks">Computer-Networks</option>
                            <option value="Digital-Electronics">Digital-Electronics</option>
                            <option value="Python-programming">Python-programming</option>
                            <option value=">Web-Technology">Web-Technology</option>
                            <option value="Advanced-JAVA-Programming">Advanced-JAVA-Programming</option>
                            <option value="Software-Testing">Software-Testing</option>

                        </select>
                        </div>

                        <div className=" flex items-center text-black ">
                            <button
                                onClick={()=>search()}
                                className="rounded bg-white p-2 mt-3 w-[100px] font-bold hover:text-white hover:bg-black "
                                type="button"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className=' relative mt-20 mx-10 max-w-[800px] bg-[#461ca7] border-4 rounded-xl w-fit border-[#ae09dc9f] bg-opacity-[0.9]' >
                    <div className=' relative w-[90vw] max-w-[800px] flex flex-wrap items-start justify-start p-14 gap-10' >
                        <>
                            {photos.map(({ photo, _id }) => (
                                <div key={_id} className=" w-[250px] ">
                                    {console.log(photo, _id)}
                                    <a href={`http://localhost:3001/uploads/${photo}`} target='_blank' >
                                        <img
                                            src={`http://localhost:3001/uploads/${photo}`}
                                            alt=""
                                        /></a>
                                </div>
                            ))}
                        </>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cheatsheet
