import React, { useContext } from 'react'
import { CartDispatchContext, CartStateContext } from '../components/ContextReducer'

export default function Cart() {
    let data= useContext(CartStateContext);
    let dispatch= useContext(CartDispatchContext)

    var totalPrice= data.reduce((value,food)=>{return value+food.price},0);

    async function handleCheckOut(){

      var uri= "http://localhost:4000/api/addorder";
      var email= localStorage.getItem("email");

      var dataSend= {foodItems: data, email: email, date: new Date().toDateString()};

      var options={
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(dataSend)
       }

      const response= await fetch(uri,options);

      dispatch({type: "DROP"});

    }

    if(data.length===0)
    return <h1 className='text-white text-center m-3x'>Cart is empty!</h1>
    
  return <div>
    <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md bg-white' >
      <table className='table table-hover '>
        <thead className=' text-success fs-4'>
          <tr>
            <th scope='col' >#</th>
            <th scope='col' >Name</th>
            <th scope='col' >Quantity</th>
            <th scope='col' >Option</th>
            <th scope='col' >Amount</th>
            <th scope='col' ></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr>
              <th scope='row' >{index + 1}</th>
              <td >{food.title}</td>
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>{food.price}</td>
              <td ><button type="button" className="btn p-0" onClick={()=>{dispatch({type: "REMOVE", index: index})}}>delete</button> </td></tr>
          ))}
        </tbody>
      </table>
      <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
      <div>
        <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
      </div>
    </div>

  </div>
}