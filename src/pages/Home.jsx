import React, { useState } from 'react'
import './Home.css'
const Home = () => {
    const [value, setValue] = useState(0);
    

    return (
        <div className="bg-image test position-relative">
           <h2 className="font-style ml-sm  ">Sunset Run Malmö</h2>
           <p className="text-position position-absoulute text-style">Malmös <span style={{textDecoration: "Underline"}}>vackraste</span> motionslopp!</p>

           <button onClick={() => setValue((prev) => prev +=1 )}>SÄTTA ANMÄLAN</button>
        
            

        </div>
    )
}

export default Home
