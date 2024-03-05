import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCq_QBZCozLq8Nv1cagW1c--QaK3Hm_b-U",
  authDomain: "mitiendaverde-13f7b.firebaseapp.com",
  projectId: "mitiendaverde-13f7b",
  storageBucket: "mitiendaverde-13f7b.appspot.com",
  messagingSenderId: "1046743400138",
  appId: "1:1046743400138:web:3cf3e5f71eb3f4fff13e33"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
