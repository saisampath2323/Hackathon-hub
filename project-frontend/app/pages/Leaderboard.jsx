import React, { useEffect, useState } from "react";

const Leaderboard = () => {
    const [dataa, setDataa] = useState(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch("http://localhost:3001/hackathons/getLeaderboard/660666a93c6840ae099ec855");
                const data = await response.json();
                setDataa(data);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };

        fetchLeaderboard();
    }, []); // Empty dependency array to run once when component mounts

    return (
        <div>
            <div className="text-white"> Leaderboard</div>
            <div className="text-white">

            {dataa?.map((element, index) => (
                <div key={index}>{element.user}-----{element.rank}</div>
                ))}
                </div>
        </div>
    );
};

export default Leaderboard;
