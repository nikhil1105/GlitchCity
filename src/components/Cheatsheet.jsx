import React, { useEffect, useState } from 'react'
import { StarsCanvas } from './canvas'
import axios from "axios";

function Cheatsheet() {

    const [photos, setphotots] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/api/get').then((res) => {
            console.log(res.data);
            setphotots(res.data)
        }).catch((e) => console.log(e))

    }, [])


    const handlechange = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('photo', e.target.files[0])
        axios.post('http://localhost:3001/api/save', formData)
            .then((res) => {
                console.log(res);
            }).catch((e) => console.log(e))
    }

    return (
        <>
        <div className='fixed main w-[100vw] h-[100vh]' ><StarsCanvas /></div>
        <div className=' w-auto flex flex-col items-start justify-center h-auto' >

            <div className='z-[20]' >
                <label htmlFor='file_picker' className=' fixed right-8 bottom-8 text-white font-bold cursor-pointer border bg-[#461ca7] p-4 rounded-xl hover:bg-white hover:text-black ' >upload file</label>
                <input className='hidden' type="file" name='file_picker' id='file_picker' onChange={(e) => handlechange(e)} />
            </div>

            <div className=' relative p-4 mt-20 mx-10 max-w-[800px] bg-[#461ca7] border-4 rounded-xl w-[91vw] border-[#ae09dc9f] bg-opacity-[0.9]' >
                <div className=" flex h-[100px] ">
                    <div className="flex flex-col p-2 w-full ">
                        <label className='text-white font-bold text-[18px]' >Title:</label>
                        <input
                            type="text"
                            className='rounded p-2'
                            placeholder="What's the title of your To Do?"
                        />
                    </div>
                   
                    <div className=" flex items-center text-black ">
                        <button
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
                            <div key={_id} className=" w-[100px] ">
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
