import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import App from './App';
import Profile from "./Screen/Profile.js"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// linking to an internal has to be done with the link command
// linking to external uses the a tag