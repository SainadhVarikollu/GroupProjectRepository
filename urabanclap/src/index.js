import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import BookingList from "./pages/BookingList";
import BookService from "./pages/BookService";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="bookings" element={<BookingList />} />
        <Route path="bookservice" element={<BookService />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

