import React from "react";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Cookies from "js-cookie";
const Signuppage = ({setpage}) => {
    
    //const navigate=useNavigate();
    let token=null;
    useEffect(()=>{
        if(Cookies.get('token')!=null){
          setpage(2);
        }
      })
      const [email,setemail]=useState(null);
      const [password,setpassword]=useState(null);
      const [codechefId,setCodechefId]=useState(null);
      const [leetcodeId,setleetcodeId]=useState(null);
      
    const loginhandler=async()=>{
       const  data={
            
            email:`${email}`,
            password:`${password}`,
            codechefId:`${codechefId}`,
            leetcodeId:`${leetcodeId}`
            
           }
           console.log(data);
           const res = await fetch("http://localhost:3001/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },

      mode: "cors",
    });

    if (res.ok) {
      const responseData = await res.json();
      token = responseData.token;
      console.log(token);
      Cookies.set("token", responseData.token);
        
      console.log(Cookies.get("token"));
      
     setpage(2);
   
    } else {
      console.error("Error:", res.status, res.statusText);
    }
    }
    return (
        <div className="flexx">
             <div className="container" id="container">
               {/* <div className=" sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="input-container">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="tel" placeholder="Phone Number" />
                            <input type="text" placeholder="CodeChef ID" />
                            <input type="text" placeholder="LeetCode ID" />
                            <input type="text" placeholder="College Name" />
                            <label htmlFor="graduation-year">Year of Graduation:</label>
                            <select id="graduation-year" name="graduation-year">
                                <option value="">Select Year</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                        <button onSubmit={(e)=>{
                              e.preventDefault();
                              loginhandler();
                        }}>Sign Up</button>
                    </form>
                </div> */}
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign Up</h1>
                       
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                         </div>
                        <span>Enter your details</span> 
                        
                       
                        <input onChange={(e)=>{
                                 setemail(e.target.value);
                        }} type="email" placeholder="Email" />
                        <input onChange={
                            (e)=>{
                            setpassword(e.target.value);
                            }
                        } type="password" placeholder="Password" />
                         <input onChange={(e)=>{
                                 setCodechefId(e.target.value);
                        }} type="text" placeholder="Codechef Id" />
                        <input onChange={
                            (e)=>{
                            setleetcodeId(e.target.value);
                            }
                        } type="text" placeholder="Leetcode Id" />
                        
                       
                        <button onClick={(e)=>{
                           e.preventDefault();
                            loginhandler();
                        }}>Sign up</button>
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle" >
                        <div className="toggle-panel toggle-left">
                            <br/><br/><br/><br/><br/><br/>
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all site features</p>
                            <br/>
                            <button className="hidden" id="login">Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <button className="hidden" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signuppage;
