import ChatBot from 'react-simple-chatbot';



const App = () => {
  const step=[
    {
      id:'Greet',
      message:'Hello, Welcome To our GlitchCity'
    },
    {
      id:'Ask Name',
      message:'Please enter your name',
      trigger:'waiting1'
    },
    {
      id:'waiting1',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'Hi {previousValue},Please select your issue ',
      trigger:'issues'
    },
    {
      id:'issues',
      options:[{value:"React", label:"React", trigger:"React"},
      {value:"Angular", label:"Angular", trigger:"Angular"}
    ],
    },
    {
      id:'React',
      message:'Thanks For telling your react issue',
      end:true
    },
    {
      id:'Angular',
      message:'Thanks for telling your Angular issue',
      end:true
    }

  ]


  return (
    <div>
 
      <ChatBot steps={step}/>

      
    </div>
  )
}

export default App