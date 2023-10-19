import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Cart from "../pages/Cart";
import { CartStateContext } from "./ContextReducer";

export default function Navbar(){
    const [viewCart, setviewCart] = useState(false);

    let data= useContext(CartStateContext);




    let navigate = useNavigate();
    function handleLogout(){
      localStorage.clear("authToken");
      navigate("/login");
    }


    return <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
Meal Magic</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav me-auto fs-5">
          <Link className="btn active" aria-current="page" to="/">Home</Link>
          {
            localStorage.getItem("authToken") ?  <Link className="btn active" aria-current="page" to="/myorders">My orders</Link>
            : null
          }
        </div>
        <div className="d-flex ">
        {
          localStorage.getItem("authToken") ?
          <div>
          <button className="btn mx-2 bg-success rounded text-white p-1 fs-6" onClick={()=> setviewCart(true)}  >
             My Cart {" "}
             <span className="badge bg-danger text-white">{data.length}</span>
            </button> 

            {
              viewCart? <Modal onClose={()=> setviewCart(false)}> <Cart/></Modal>: null
            }
          <button className="btn mx-2 bg-danger rounded text-white p-1 fs-6" onClick={handleLogout} > Logout</button>
          </div>
          :
          <div>
          <Link className="btn mx-2 bg-success rounded text-white p-1 fs-6" to="/login">Login</Link>
          <Link className="btn mx-2 bg-success rounded text-white p-1 fs-6" to="/signup">Signup</Link>
          </div>
        }
          </div>
      </div>
    </div>
  </nav>;
}