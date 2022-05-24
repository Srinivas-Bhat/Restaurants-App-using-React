import React from 'react'

const Restaurant = ({el}) => {
    // console.log(el.name)
  return (
    <div key={el.id} className="card">
    <img width="254" height="160px" src={el.image} />
    <div className="restaurant-details">
        <div className="restaurant-title">{el.name}</div>
        <div className="restaurant-subtitle">
          {el.category.join(", ")}
        </div>
    </div>
    <div className="restaurant-info">
        <div className="restaurant-ratings">
            <i className="material-icons star-icon">star</i> {el.rating}
        </div>
         .<div className="restaurant-delivery-timings"> {el.deliveryTimings}</div> .
        <div className="restaurant-cost-for-two">₹{el.costForTwo} FOR TWO</div>
    </div>
    <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text">{el.offers.join(" | ")}</span>
    </div>
</div>
  )
}

export default Restaurant