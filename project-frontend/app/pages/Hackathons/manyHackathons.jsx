import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import Cookies from "js-cookie";
import { RiTeamFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import CodingPlatforms from "../codingPlatforms";
import "./onehackathon.css"
import { FiUsers } from "react-icons/fi";
const ManyHackathons=({name,conductedBy,teamSize,lastDate,details,contact,prizeMoney,registeredPeople,id})=>{
    const handleSubmit=async()=>{
        try {
            const token = Cookies.get('token');
            const requestOptions = {
              method: 'GET',
              headers: {
                'authorization':token
              }
            };
            const response = await fetch(`http://localhost:3001/hackathons/register/${id}`, requestOptions);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
        
        const pdata = await response.json();
         console.log(pdata);
         alert("registerd sucessfully");
        
        
          } catch (error) {
            console.error('Error:', error);
            // Handle error
          }
    }
    return(
        
            <div className="myhackathon11">
        <div className="myhackathon1 m-3 " >
           
            <div className="hackImage1 "></div>
            <div className=" inko1 flex flex-row ">
                    
                    <div className="matter1">
                        <div className="title1 flex">
                      
                        {name}
                        </div>
                        <div className="submatter1 flex items-center">
                        <GrLocation></GrLocation>  <a className="mx-2">  {conductedBy}</a>
                        </div>
                        <div className="details1">{details}</div>
                        <div className="iconnns1 flex gap-5">

                        <div className="icons1 flex items-center"><BsCalendar2Date></BsCalendar2Date><div className="Date1">{lastDate}</div> </div>
                        <div className="icons1 flex items-center"><FiUsers></FiUsers><div className="Date1">{registeredPeople}<a className="grayy1">rigistered</a></div> </div>
                        </div>
                        <div className="contact1 flex items-center"><IoMdContact></IoMdContact><div className="grayy1 contact11"> {contact}</div></div>
                         </div>
                        
            </div>
           
        </div>
        <div className="submatter11">{details}</div>
<div className="below1 flex gap-9 items-start justify-around">

    <div className=" prize1 flex items-center"> <RiTeamFill></RiTeamFill> <div className="prize11">{teamSize}</div> </div>
    <div className=" prize1 flex items-center"> <FaAward></FaAward> <div className="prize11">{prizeMoney} </div> </div>
    <div className=" prize1 flex items-center"> <FiUsers></FiUsers> <div className="prize11">{registeredPeople}</div> </div>
    </div>   

    <button
            type="submit"
            className="w-56 h-14 mx-96 my-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
            >
            register
          </button> 
    
        </div>
        
        
    )
    
}
export default ManyHackathons