import './App.css';
import Main from './Component/Main/Main';
import { Routes,Route } from 'react-router-dom';
import MealInfo from './Component/MealInfo/MealInfo';

function App() {
  return (
   <>


   
   <Routes>

  <Route path="/"  element={<Main />}></Route>
  <Route path='/:mealid' element={<MealInfo/>}></Route>
   </Routes> 
    {/* <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/:mealid' element={<MealInfo/>}/>
     </Routes> */}
   </>
  );
}

export default App;
