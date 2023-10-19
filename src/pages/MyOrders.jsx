import React, { useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import OrderCard from "../components/OrderCard";

export default function MyOrders() {
    const [orders, setOrders] = useState([])


    async function findOrders(){
        var uri= "http://localhost:4000/api/myorders";
        var email= localStorage.getItem("email");

        var options={
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({email: email})
        }

        const response= await fetch(uri,options);

        const resJson= await response.json();


        setOrders(resJson.orderList);
    }

    useEffect(()=>{
        findOrders();

    },[])

  return (
    <div>
        <Navbar/>
        <div className='container'>
            {
                orders.map((order,i)=>{
                    return <OrderCard key={i+1} details={order} index={i+1} />
                })
            }
        </div>

        
    </div>
  )
}
