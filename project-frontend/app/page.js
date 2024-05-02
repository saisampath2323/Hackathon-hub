'use client'
import React, { useEffect, useState } from "react";
import Leaderboard from "./pages/Leaderboard";
import ReactDOM from 'react-dom';
import Homepage from "./pages/Homepage";
import Navbar from "./pages/navbar";
import Cookies from "js-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contestpage from "./pages/Contestpage";
import Loginpage from "./pages/Loginpage";
import CodingPlatforms from "./pages/codingPlatforms";
import OneHackathon from "./pages/Hackathons/oneHackathon";
import CreateHackathon from "./pages/Hackathons/CreateHackathon";
import AllHackathons from "./pages/allHackathons";

const page=()=>{
  // const i=Cookies.get('token')?2:1;
  const [number,setnumber]=useState(1);
  const logoutHandler = () => {
    Cookies.remove('token');
    // Redirect to login page or wherever appropriate
    setnumber(1);
  
};
  const setpage=(num)=>{
         setnumber(num);
  }
  
  
  
  
  
  return(
    <div>
      <div className="bg-slate-50" onClick={()=>{
        logoutHandler();
      }}> log hii</div>
      <Navbar  setpage={setpage} ></Navbar>
      <div >
        {number==1?<Loginpage setpage={setpage}></Loginpage>:console.log("1")}
        {number==2?<Homepage></Homepage>:console.log("2")}
    {number==3?<Contestpage className="my-7"></Contestpage>:console.log("3")}
    {number==4?<CreateHackathon ></CreateHackathon>:console.log("4")}
    {number==5?<AllHackathons  ></AllHackathons>:console.log("5")}
    {number==6?<Leaderboard></Leaderboard>:console.log("6")}
    </div>
     
       
    </div>
  )
  
}
export default page;



