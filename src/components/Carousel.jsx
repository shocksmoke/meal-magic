import React,{useState} from 'react'

export default function Carousel(props) {
  const [search, setsearch] = useState("");

  function handleOnchange(e){
    setsearch(e.target.value);
    props.onChange(search);
  }


  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
  <div className='carousel-caption z-1'>
    <div className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleOnchange} />
    </div>

  </div>
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlYCILkCsevKsmKU_QyQpY-gFCnne2jWB9SW-MH2FzupsrqdPzcdIvgsHL2_DG5kUMYA&usqp=CAU" className="d-block w-100" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlYCILkCsevKsmKU_QyQpY-gFCnne2jWB9SW-MH2FzupsrqdPzcdIvgsHL2_DG5kUMYA&usqp=CAU"/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlYCILkCsevKsmKU_QyQpY-gFCnne2jWB9SW-MH2FzupsrqdPzcdIvgsHL2_DG5kUMYA&usqp=CAU" className="d-block w-100" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlYCILkCsevKsmKU_QyQpY-gFCnne2jWB9SW-MH2FzupsrqdPzcdIvgsHL2_DG5kUMYA&usqp=CAU"/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlYCILkCsevKsmKU_QyQpY-gFCnne2jWB9SW-MH2FzupsrqdPzcdIvgsHL2_DG5kUMYA&usqp=CAU" className="d-block w-100" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlYCILkCsevKsmKU_QyQpY-gFCnne2jWB9SW-MH2FzupsrqdPzcdIvgsHL2_DG5kUMYA&usqp=CAU"/>
    </div>
    <nav className="navbar navbar-light bg-light">
</nav>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  );
}
