import React, { useState } from 'react';
import {gapi} from 'gapi-script'


const API_KEY = "AIzaSyBZNi_TKu2GdUDussB5BXU6HvGbuiEkvok"

const Client_Id = "225456017758-0sksq740ba8of8cv4funrvs2f9e291le.apps.googleusercontent.com"

function GmailApi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  const handleLoginSuccess = (response) => {
    setIsAuthenticated(true);
    setAccessToken(response.accessToken);
    fetchMessages(response.accessToken);
  };
  const handleLoginFailure = (error) => {
    console.error("Login failed:", error);
  };
  const fetchMessages = async (token) => {
    gapi.load("client", async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
        ],
      });

      const response = await gapi.client.gmail.users.messages.list({
        userId: "me",
        maxResults: 20,
        access_token: token,
      });

      const messages = response.result.messages || [];
      const fullMessages = await Promise.all(
        messages.map(async (msg) => {
          const message = await gapi.client.gmail.users.messages.get({
            userId: "me",
            id: msg.id,
            access_token: token,
          });
          return message.result;
        })
      );
      setMessages(fullMessages);
    });
  };

  const openMessage = (messageId) => {
    const url = `https://mail.google.com/mail/u/0/#all/${messageId}`;
    window.open(url, "_blank");
  };

  const deleteMessage = async (id) => {
    await gapi.client.gmail.users.messages.modify({
      userId: "me",
      id,
      resource: {
        removeLabelIds: ["INBOX"], // Remove from Inbox
        addLabelIds: ["TRASH"],   // Move to Trash
      },
      access_token: accessToken,
    });
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const starMessage = async (id) => {
    await gapi.client.gmail.users.messages.modify({
      userId: "me",
      id,
      resource: {
        addLabelIds: ["STARRED"], // Add the "STARRED" label
      },
      access_token: accessToken,
    });
    alert("Message starred successfully!");
  };
    return (  
    <div className="container mt-5">
      <h1>Gmail Messages</h1>
      {!isAuthenticated ? (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          scope="https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.modify"
        />
      ) : (
        <div>
          <ul className="list-group">
            {messages.map((message) => (
              <li
                key={message.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong>
                  {message.payload.headers.find((h) => h.name === "Subject")
                    ?.value || "No Subject"}
                </strong>
                <div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => openMessage(message.id)}
                    className="me-2"
                  >
                    Open
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => starMessage(message.id)}
                    className="me-2"
                  >
                    Star
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteMessage(message.id)}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GmailApi;


