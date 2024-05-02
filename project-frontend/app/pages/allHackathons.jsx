import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import OneHackathon from "./Hackathons/oneHackathon";
import ManyHackathons from "./Hackathons/manyHackathons";
const AllHackathons=()=>{
  const [oid,setoid]=useState(null);
    const[data,setdata]=useState(null);
    const [manydata,setmanydata]=useState(null)
    const fetchData1 = async (id) => {
      try {
        const token = Cookies.get('token');
        const requestOptions = {
          method: 'GET',
          headers: {
            'authorization':token
          }
        };
        const response = await fetch(`http://localhost:3001/hackathons/findHackathon/${id}`, requestOptions);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    const pdata = await response.json();
     console.log(pdata);
     setmanydata(pdata);
    
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    };
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const token = Cookies.get('token');
              const requestOptions = {
                method: 'GET',
                headers: {
                  'authorization':token
                }
              };
              const response = await fetch("http://localhost:3001/hackathons/allHackathons", requestOptions);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
          const pdata = await response.json();
           setdata(pdata);
          
            } catch (error) {
              console.error('Error:', error);
              // Handle error
            }
          };
          fetchData();
    },[])
    return(
        <div className="flex">
         
          <div className="thisLeft mx-3 flex-row "> 
          {
            data?.map(element => {
              return <OneHackathon setoid={fetchData1} id={element._id} name={element.name} conductedBy={element.conductedBy} date={element.lastDate} number={element.registeredPeople.length}></OneHackathon>
            })
          }
               
          </div>
         <div className="thisRight mx-2">
          {manydata?<ManyHackathons name={manydata.name} id={manydata._id} conductedBy={manydata.conductedBy} prizeMoney={manydata.prizeMoney} teamSize={manydata.teamSize}
          lastDate={manydata.lastDate} details={manydata.details} contact={manydata.contact} registeredPeople={manydata.registeredPeople.length}></ManyHackathons>:console.log("hi")}

         </div>
        </div>
    )
}
export default AllHackathons;