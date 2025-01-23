import React, { useEffect, useState } from "react";
import "../assets/styles/card.css";

export default function Card() {
  const [card, setCard] = useState([]);
  const [searchName, setSearchName] = useState("");

  function getData() {
    fetch("http://localhost:5000/sell")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }

  useEffect(() => {
    getData();
  });

  function deleteCard(id) {
    fetch(`localhost:5000/sell/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setCard(card.filter((card) => card._id !== id));
        } else {
          console.error("Failed to delete card");
        }
      })
      .catch((error) => console.error("Error deleting card:", error));
  }

  const filteredCards = card.filter((x) =>
    x.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="product-page">
          <div className="product-heading">
            <h5
              style={{
                opacity: "70%",
              }}
            >
              Popular Products
            </h5>
            <h1>Our Products</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel
              ut eveniet aut consequatur laboriosam ipsam.
            </p>
          </div>
          <div className="search">
            <input
            className="search-btn"
              type="text"
              placeholder="Search.."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div className="card-container">
            {filteredCards.map((item) => (
              <div key={item._id} className="card-body">
                <img src={item.image} alt="" className="card-image" />
                <h4 className="card-name">{item.name}</h4>
                <p  className="card-degrees">{item.degrees.toFixed(1)}  <i class="fa-solid fa-star" style={{color: 'yellow'}}></i></p>
                <p style={{opacity:'70%'}} className="card-description">{item.description}</p>
                <div className="card-buttons">
                    <button className="detail"><i style={{color:'blue'}} class="fa-solid fa-circle-info"></i></button>
                    <button onClick={()=>deleteCard(item.id)} className="delete"><i style={{color: 'green'}} class="fa-solid fa-trash"></i></button>
                    <button className="basket"><i style={{color: 'orange'}} class="fa-solid fa-cart-shopping"></i></button>
                    <button className="favorite"><i style={{color: 'red'}} class="fa-solid fa-heart"></i></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
