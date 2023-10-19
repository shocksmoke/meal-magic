import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body"
import Carousel from "../components/Carousel";
import { useState } from "react";
import ContextReducer from "../components/ContextReducer";

export default function Home(){

    const [search, setsearch] = useState("");

    function handleOnchange(newSearch){
        setsearch(newSearch);
    }

    return (
        <div>
            <Navbar/>
            <Carousel onChange={handleOnchange}/>
            <Body search={search}/>
            <Footer/>
        </div>
    );
}