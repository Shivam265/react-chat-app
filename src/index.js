import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQHtlHxSp3xblIQZbVfUUbFdZPdWJfyQ",
  authDomain: "chats-app-e3c1a.firebaseapp.com",
  databaseURL: "https://chats-app-e3c1a-default-rtdb.firebaseio.com",
  projectId: "chats-app-e3c1a",
  storageBucket: "chats-app-e3c1a.appspot.com",
  messagingSenderId: "665268070931",
  appId: "1:665268070931:web:ce54839e1caa7627b92de6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
