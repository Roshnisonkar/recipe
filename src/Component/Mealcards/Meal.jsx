import React from 'react'
import'./Meal.css';
import { NavLink } from 'react-router-dom';

const Meal = ({detail}) => {
    console.log(detail);
  return (
    <>
    <div className="meals">
        {!detail ? "" : 
        detail.map((curVAl)=>{
            return (
                <div className='mealImg'>
                <img src={curVAl.strMealThumb} alt="mealimg" className='mealImg' />
                <p>{curVAl.strMeal}</p>
                {/* <NavLink to={`/${curVAl.idMeal}`}><button>Recipe</button></NavLink> */}
                <NavLink to={`/${curVAl.idMeal}`}><button>Recipe</button></NavLink>
            </div>
            )
        })
        }
    </div>
    </>
  )
}

export default Meal