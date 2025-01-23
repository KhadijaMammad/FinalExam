import React, { useState } from 'react'

export default function Detail() {
    const [card, setCard] = useState([])



  return (
    <>
    <div className="container">
        <div className="detail-page">
            <div className="card-container">
                {card.map((item)=>(
                    <div className="card-body">
                        <img src={item.image} alt="" />
                        <h4 className="card-name">
                            {item.name}
                        </h4>
                        <p card-degrees>{item.degrees}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>


   
    
    </>
  )
}
