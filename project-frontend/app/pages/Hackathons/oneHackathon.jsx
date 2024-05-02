import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import "./onehackathon.css"
const OneHackathon=({name,conductedBy,date,number,id,setoid})=>{
    
    return(
        <div className="myhackathon m-3" onClick={()=>{
            setoid(id);
        }} >
            <div className="hackImage"></div>
            <div className="flex flex-row">
                    
                    <div className="matter">
                        <div className="title">
                           {name}
                        </div>
                        <div className="submatter">
                            {conductedBy}
                        </div>
                        <div className="iconnns flex gap-5">

                        <div className="icons flex "><BsCalendar2Date></BsCalendar2Date><div className="Date">{date}</div> </div>
                        <div className="icons flex "><FiUsers></FiUsers><div className="Date">{number} <a className="grayy">rigistered</a></div> </div>
                        </div>
                         </div>
            </div>
            <div className=""></div>
        </div>
    )
}
export default OneHackathon;