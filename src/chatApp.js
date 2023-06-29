import React, {useEffect,useState} from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const ChatApp = () => {
    const [message, setMessage] = useState('');
    const [message, setMessage] = useState([]);

   useEffect(()=>{
     socket.on('message',message =>{
        setMessage(prevMessages => [...prevMessages,message]);
     });
     return() => {
        socket.disconnect();
     };
   },[]);

   const handleSendMessage = e =>{
    e.preventDefault();

    if (message.trim()!== ''){
        socket.emit('message',message);
        setMessage('');
    }
   };

   return (
    <div>
        <h1>Chat Application</h1>
        <div>
            {message.map(msg,index)=>(
                <div key = {index}>{msg}</div>
            ))}
            </div>
            <form onSubmit={handleSendMessage}>
                <input type = "text" value = {message} onChange={e=>setMessage(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
            </div>
            
   );
};

export default ChatApp;