import React, { useState } from 'react'
import './MealInfo.css'
import { useParams } from 'react-router-dom'

const MealInfo = () => {

  const {mealid} = useParams();
  console.log(mealid);

  const [info , setInfo ] = useState();

  const getinfo = async()=>{
    const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
    const jsonData = await get.json();
    console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0])
  }
  if(info != "")
  {
    getinfo();
  }
  return (
  <>  

  { !info ? "Data Not Found" :
  <div className="mealinfo">
  <img src={info.strMealThumb} alt="" />
  <div className='info'> 
    <h1>Recipe detail</h1>
    <button>{info.strMeal}</button>
    <h2>Instruction's</h2>
    <p>{info.strInstructions}</p>
  </div>
  </div>
  
  }
  
  </>
  )
}

export default MealInfo