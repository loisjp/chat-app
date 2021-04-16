import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #ffffff;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 700px;
  border: 1px solid grey;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  width: 87%;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-family: 'Lato';
  font-size: 17px;
  background-color: transparent;
  border: 1px solid grey;
  outline: none;
  color: black;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: grey;
  }
`;

const Button = styled.button`
width: 8%;
height: 47px;
margin-top: 10px;
border-radius: 10px;
background-color: transparent;
border: 1px solid grey;
background-color: #3F0E40;
border-top-right-radius: 90%;
border-bottom-right-radius: 90%;
outline: none;
`;

const Form = styled.form`
  width: 700px;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 90%;
  background-color: #3F0E40;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  margin-left: 5px;
  text-align: left;
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 90%;
  background-color: transparent;
  color: #3F0E40;
  border-radius: 10px;
  border: 1px solid #3F0E40;
  padding: 10px;
  margin-left: 5px;
  text-align: left;
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
`;

const App = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      setYourID(id);
    })

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    })
  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <Page>
      <Container>
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <MyRow key={index}>
                <MyMessage>
                  {message.body}
                </MyMessage>
              </MyRow>
            )
          }
          return (
            <PartnerRow key={index}>
              <PartnerMessage>
                {message.body}
              </PartnerMessage>
            </PartnerRow>
          )
        })}
      </Container>
      <Form onSubmit={sendMessage}>
        <TextArea value={message} onChange={handleChange} placeholder="Message" />
        <Button />
      </Form>
    </Page>
  );
};

export default App;