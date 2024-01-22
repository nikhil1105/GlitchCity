import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';




const Bot = () => {
 
  return (
    <div className='fixed right-10 bottom-10' >
      <div>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Welcome TO The GlitchCity',
              trigger: '2',
            },
            {
              id: '2',
              message: 'Please enter your name',
              trigger: '3',
            },
            {
              id: '3',
              user: true,
              trigger: '4',
            },
            {
              id: '4',
              message: 'Hi {previousValue}, Please Select Your Favourite Language',
              trigger: '5',
            },
            {
              id: '5',
              options: [
                { value: 1, label: 'Java', trigger: '6' },
                { value: 2, label: 'JavaScript', trigger: '7' },
                { value: 3, label: 'Python', trigger: '8' },
                { value: 4, label: 'Php', trigger: '9' },
              ],
            },
            {
              id: '6',
              component: (
                <div>
                  <p>
                    You selected Java! Check out the Java tutorial on Code with Harry:
                  </p>
                  <a
                    href="https://www.codewithharry.com/videos/java-tutorial-in-hindi-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code with Harry Java Tutorial
                  </a>
                </div>
              ),
              end: true, // This step ends the conversation
            },
            {
              id: '7',
              component: (
                <div>
                  <p>
                    You selected Javascript! Check out the Best Javascript tutorial :
                  </p>
                  <a
                    href="https://javascript.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Javascript Tutorial
                  </a>
                </div>
              ),
              end: true, // This step ends the conversation
            },
            {
              id: '8',
              component: (
                <div>
                  <p>
                    You selected Python! Check out the Python tutorial on Code with Harry:
                  </p>
                  <a
                    href="https://www.codewithharry.com/tutorial/python/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code with Harry Python Tutorial
                  </a>
                </div>
              ),
              end: true, // This step ends the conversation
            },
            {
              id: '9',
              component: (
                <div>
                  <p>
                    You selected PHP! Check out the PHP tutorial on Code with Harry:
                  </p>
                  <a
                    href="https://www.codewithharry.com/tutorial/php/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code with Harry PHP Tutorial
                  </a>
                </div>
              ),
              trigger: '10', // This step ends the conversation
            },
            {
              id: '10',
              message: 'Thankyou!',
              end: true
            },

          ]}
        />
      </div>
    </div>
  );
};

export default Bot;
