import React, { useState } from 'react'
import './Main.css'
import Meal from '../Mealcards/Meal';

const Main = () => {

    const[ data, setData ] = useState();
    const[search, setsSearch ] = useState();
    const[message , setMessage ]= useState("");

const handleInput = (event) =>{
setsSearch(event.target.value);
}

const handlebutton = async () =>{
  if(search == "")
  {
setMessage("Please Enter Something");
console.log("iujfsnf")
  }
  else{
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData = await get.json();
    // console.log(jsonData.meals);
    setData(jsonData.meals)
    setMessage("");
  }
}

console.log(data);
  return (
    
    <>
    <h1 className="head">FOOD RECIPE APP</h1>
    <div className="container">
        <div className="searchbar">
            <input type="text" placeholder='Enter Dishe'  onChange={handleInput}/>
            <button onClick={handlebutton}>Search</button>
        </div>
        <h4 className='error'>{message}</h4>
        <div>
         <Meal detail={data}/>
        </div>
    </div>
    </>
  )
}

export default Main