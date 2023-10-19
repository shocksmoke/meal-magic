import React,{useEffect, useRef, useState} from 'react'
import { useContext } from 'react';
import { CartDispatchContext,CartStateContext } from './ContextReducer';

export default function Card(props) {
  const [size, setsize] = useState("");
  const [qty, setQty] = useState(1);

  let priceRef= useRef();

  let dispatch= useContext(CartDispatchContext);
  let data= useContext(CartStateContext);

  const handleAddToCart=async()=>{

    for (const element of data) {
      if (element._id === props._id && element.size === size) {
        await dispatch({ type: "UPDATE", _id: props._id, size: size, qty: qty, unitPrice: parseInt(props.options[0][size])  });
        console.log("Item updated");
        return; // Return early after the update
      }
    }

    console.log("i mma add something");

    await dispatch({type: "ADD", _id: props._id, title: props.title, qty: qty, size: size, price: finalPrice});
  }

  useEffect(()=>{
    setsize(priceRef.current.value);
  },[])


  let finalPrice= qty* parseInt(props.options[0][size])

  return (
        <div className="card m-3" style={{width: "18rem"}}>
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body container">
    <div >
        <h5 className="card-title">{props.title}</h5>
    </div>
    <div >
        <select className='bg-success rounded m-2' onChange={(e)=>{setQty(e.target.value)}} >
            {Array.from(Array(6),(e,i)=>{ 
              return (<option key={i+1} value={i+1}> {i+1}</option>)
            })}
        </select>
        <select ref={priceRef} className='bg-success rounded m-2' onChange={(e)=>{setsize(e.target.value)}}>
            {
              Object.keys(props.options[0]).map((key)=>{
                return  <option key={key} value={key}> {key}-{props.options[0][key]} </option>
              })
            }
        </select>

      <button className='btn bg-success rounded p-2' onClick={handleAddToCart}> Add to cart</button>

    </div>
    <hr/>
    <div className='container'>

      <div>Total Price: {finalPrice}</div>
    </div>

  </div>
    </div>
  )
}
