import React, { useState, useEffect } from "react";
import '../../assets/styles/table.css'

export default function Table() {
   const [card, setCard] = useState([]);
 
   function getData() {
    fetch("http://localhost:5000/sell")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="add-table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Degrees</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item, index)=>(
                 <tr key={index}>
                 <td>
                   <img src={item.image} alt={item.name} style={{width:'150px'}}/>
                 </td>
                 <td>{item.name}</td>
                 <td>{item.degreese}</td>
                 <td>{item.description}</td>
               </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}