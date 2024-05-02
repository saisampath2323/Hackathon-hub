import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";
const CreateHackathon=()=>{
    const [hackathonData, setHackathonData] = useState({
        name: "",
        conductedBy:"",
        prizeMoney: "",
        teamSize: "",
        lastDate: "",
        details: "",
        contact: "",
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setHackathonData({
          ...hackathonData,
          [name]: value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
       
        console.log("Hackathon data:", hackathonData);
        try {
            const token = Cookies.get('token');
            const requestOptions = {
              method: 'POST',
              headers: {
                'authorization':token,
                'Content-Type': 'application/json'
                
              }
              ,body:JSON.stringify(hackathonData)
            };
            const response = await fetch("http://localhost:3001/hackathons/createHackathon", requestOptions);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            else{
                console.log(response)
                alert("Hackathon created");
            }
        
          } catch (error) {
            console.error('Error:', error);
            // Handle error
          }
      };
    
      return (<div className="flex ">
        
        <div className="hackathonImage">

        </div>
        <form onSubmit={handleSubmit} className=" absolute formFor">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg my-3 font-medium ">
              Name of Hackathon
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={hackathonData.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="conductedBy" className="block text-lg font-medium ">
              conductedBy
            </label>
            <input
              type="text"
              id="conductedBy"
              name="conductedBy"
              value={hackathonData.conductedBy}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prizeMoney" className="block text-lg font-medium">
              Prize Money
            </label>
            <input
              type="text"
              id="prizeMoney"
              name="prizeMoney"
              value={hackathonData.prizeMoney}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="teamSize" className="block text-lg font-medium ">
              Team Size
            </label>
            <input
              type="text"
              id="teamSize"
              name="teamSize"
              value={hackathonData.teamSize}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
              />
          </div>
          <div className="mb-4">
            <label htmlFor="lastDate" className="block text-lg font-medium ">
              Last Date
            </label>
            <input
              type="date"
              id="lastDate"
              name="lastDate"
              value={hackathonData.lastDate}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block text-lg font-medium ">
              Details of Hackathon
            </label>
            <textarea
              id="details"
              name="details"
              value={hackathonData.details}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
              ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-lgfont-medium ">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={hackathonData.contact}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
              />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
           onClick={handleSubmit}
            >
            Create 
          </button>
        </form>
              </div>
       
      );
}
export default CreateHackathon;