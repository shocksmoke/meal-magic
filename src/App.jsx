import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContextReducer from "./components/ContextReducer";
import MyOrders from "./pages/MyOrders";

export default function App(){
    return <ContextReducer>

        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/myorders" element={<MyOrders/>} />
            </Routes>
          </div>
        </BrowserRouter>
      ;
      
      </ContextReducer>
}