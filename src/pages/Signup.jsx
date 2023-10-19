import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",address:""});

    function updateCredentials(event){
        const {name,value}= event.target;
        setcredentials({...credentials, [name]:value });
    }

    async function handleSubmit(e){
        e.preventDefault();

        var uri= "http://localhost:4000/user/addUser";

        var options={
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(credentials)
        }

        const response= await fetch(uri,options).then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Handle the data
            console.log(data);
          })
          .catch((error) => {
            console.error('Fetch error:', error);
          });

    }


  return (
    <section className="vh-100 bg-image"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius:"15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit}>

                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                <div className="form-outline mb-4">
                  <input name="name" value={credentials.name} type="text" id="form3Example1cg" className="form-control form-control-lg"  onChange={updateCredentials}/>
                </div>

                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                <div className="form-outline mb-4">
                  <input name="email" value={credentials.email} type="email" id="form3Example3cg" className="form-control form-control-lg"  onChange={updateCredentials}/>
                </div>

                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                <div className="form-outline mb-4">
                  <input name="password" value={credentials.password} type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={updateCredentials} />
                </div>

                <label className="form-label" htmlFor="form3Example4cdg">Address</label>
                <div className="form-outline mb-4">
                  <input name="address" value={credentials.address} type="string" id="form3Example4cdg" className="form-control form-control-lg" onChange={updateCredentials} />
                </div>


                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                    className="fw-bold text-body"><u>Login here</u></Link></p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
