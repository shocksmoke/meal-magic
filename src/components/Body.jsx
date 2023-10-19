import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function Body(props){
    const [foodItems, setFoodItems]= useState([]);
    const [foodCategories, setFoodCategories]= useState([]);

    useEffect(()=>{
        async function loadData(){
            var uri= "http://localhost:4000/api/loadData";
            var response = await axios.get(uri);
            var data= response.data;
            setFoodItems(data[0]);
            setFoodCategories(data[1]);
        }

        loadData();
    }, []);


    function createCard(foodItem){
        return <div key={foodItem._id} className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <Card
            _id= {foodItem._id}
            title= {foodItem.name}
            img= {foodItem.img}
            options= {foodItem.options}
            description= {foodItem.description}
            />
        </div>
    }

    return (
        <div className="container">
          {
            foodCategories!=[] ? foodCategories.map((data, index) => {
            return <div className="row mb-3" key={data._id}>

                       <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div> 

                       <hr/>

                       {foodItems.filter((value)=>{
                        return (value.CategoryName==data.CategoryName && value.name.toLowerCase().includes(props.search));
                       }).map(createCard)}  

                </div>;
          }):<div>Anything</div>
          }
        </div>
      );

}