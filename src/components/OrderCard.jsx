import React from 'react'

export default function OrderCard(props) {
  var foodItems= props.details.foodItems;
  var date= props.details.date;

  console.log(props.details);

  return (
    <div className='row card bg-success text-white m-3' key={props.index}>
        <div>
          <span className='card-title'>Date of order: {date}</span>
          <ul>
            {foodItems.map((food)=>{
              return <li>
                Title: {food.title } {" "}
                Quantity: {food.qty }{" "}
                Size: {food.size}{" "}
                Price: {food.price}
              </li>
            })}
          </ul>
        </div>

    </div>
  )
}
