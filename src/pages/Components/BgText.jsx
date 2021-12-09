import React from 'react'
import './BgText.css'
const BgText = () => {
    return (
        <div>
            <h2 className="font-style ml-sm  ">Sunset Run Malmö</h2>
        <p className="text-position position-absoulute text-style">
          Malmös <span style={{ textDecoration: "Underline" }}>vackraste</span>{" "}
          motionslopp!
        </p>
        </div>
    )
}

export default BgText
