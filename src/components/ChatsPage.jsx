import React from 'react'
import { useNavigate } from "react-router-dom";
import { MultiChatSocket,MultiChatWindow,useMultiChatLogic } from "react-chat-engine-advanced";
import { PrettyChatWindow } from 'react-chat-engine-pretty';

function ChatsPage(props) {
  const chatprops = useMultiChatLogic('7e825660-9562-4e60-9295-d53db2c005b8',props.user.username,props.user.secret)
  const navigate = useNavigate()
  return (
    // <div className='h-[100vh]' >
    //     <MultiChatSocket {...chatprops}/>
    //     <MultiChatWindow {...chatprops} style={{height:"100%"}} />
    // </div>
    <div className='h-[100vh]' >
      <button onClick={()=>navigate('/home')} className='fixed hover:bg-black hover:text-white font-bold bg-white rounded-md p-2 bottom-4 left-4 ' > Go Back </button>
      <PrettyChatWindow
      projectId="7e825660-9562-4e60-9295-d53db2c005b8"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
    </div>
  )
}

export default ChatsPage
