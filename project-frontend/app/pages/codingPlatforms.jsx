import React, {useState, useEffect } from "react";
import Cookies from "js-cookie";

const CodingPlatforms=(token)=>{
   const [data,setdata]=useState(null);
   const [cdata,setcdata]=useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = Cookies.get('token');
            const requestOptions = {
              method: 'GET',
              headers: {
                'authorization':token
              }
            };
            const response = await fetch("http://localhost:3001/api/leetcode", requestOptions);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
        const pdata = await response.json();
         setdata(pdata);
         console.log(pdata);
          } catch (error) {
            console.error('Error:', error);
            // Handle error
          }
        };
        const fetchDataC = async () => {
            try {
              const token = Cookies.get('token');
              const requestOptions = {
                method: 'GET',
                headers: {
                  'authorization':token
                }
              };
              const response = await fetch("http://localhost:3001/api/codechef", requestOptions);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
          const pdata = await response.json();
           setcdata(pdata);
           console.log(pdata);
            } catch (error) {
              console.error('Error:', error);
              // Handle error
            }}
    
        fetchDataC();
        fetchData();
        }, []);
    
    return (
        <section className="service" id="service">
        <h1 className="heading">Coding Platform Details</h1>
        <div className="box-container">
            <div className="box">
                <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb" width="100" alt="CodeChef" />
                <div className="info flex gap-4">
                    <div className="text-3xl">CodeChef</div>
                    <div>Name:<a> {cdata?.name}</a></div>
                    <div>Global Rank:<a> {cdata?.globalRank}</a></div>
                    <div>Countrt Rank:<a> {cdata?.countryRank}</a></div>
                    <div>Current rating:<a> {cdata?.currentRating}</a></div>
                    <div>Highest Rating:<a> {cdata?.highestRating}</a></div>

                </div>
            </div>

            <div className="box">
                <img src="https://ih1.redbubble.net/image.4319740842.7776/ur,mouse_pad_small_flatlay,square,600x600.jpg" alt="" />
                <div className="info flex gap-4">
                    <div className="text-3xl">LeetCode</div>
                    <div>Global Rank:<a> {data?.ranking}</a></div>
                    <div>Easy rated problems<a> {data?.easySolved}/{data?.totalEasy}</a></div>
                    <div>Medium rated Problems <a> {data?.mediumSolved}/{data?.totalMedium}</a></div>
                    <div>hard rated solved:<a> {data?.hardSolved}/{data?.totalHard}</a></div>
                    
                    
                </div>
            </div>
        </div>
    </section>
    )
}
export default CodingPlatforms;