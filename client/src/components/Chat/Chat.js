import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import skio from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(()=> {
    const { name, room } = queryString.parse(location.search);
  });

  const sendMessage = (e) => {
    e.preventDefault();
  }

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages messages={message} name={name} />
        <Input message={message} setMeddage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;