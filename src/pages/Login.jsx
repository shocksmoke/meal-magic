import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login(){
    const [credentials, setcredentials] = useState({email:"",password:""});
    let navigate= useNavigate();

    function updateCredentials(event){
        const {name,value}= event.target;
        setcredentials({...credentials, [name]:value });
    }

    async function handleSubmit(e){
        e.preventDefault();

        var uri= "http://localhost:4000/user/loginUser";

        var options={
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(credentials)
        }

        const response= await fetch(uri,options);

        const data= await response.json();

        console.log(data);

        if(data.success){
          var token= data.authToken;
          localStorage.setItem("authToken",token);
          localStorage.setItem("email",credentials.email)
          navigate("/");
        }
        else{
          alert("Invalid credentials")
        }
            
    }

    return <section className="vh-100 bg-image"
    style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{borderRadius:"15px"}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Login</h2>
  
                <form onSubmit={handleSubmit}>
  
           
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                  <div className="form-outline mb-4">
                    <input name="email" value={credentials.email} type="email" id="form3Example3cg" className="form-control form-control-lg"  onChange={updateCredentials}/>
                  </div>
  
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  <div className="form-outline mb-4">
                    <input name="password" value={credentials.password} type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={updateCredentials} />
                  </div>
  

  
                  <div className="d-flex justify-content-center">
                    <button type="submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                  </div>
  
                  <p className="text-center text-muted mt-5 mb-0">Not Registered?
                    <Link to="/register"
                      className="fw-bold text-body"><u>Register here</u></Link>
                      </p>
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}