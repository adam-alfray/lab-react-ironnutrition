import './App.css';
import React, { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";

import foods from "./foods.json";

//components
import Foodbox from './Components/FoodBox'
import AddFood from './Components/AddFoodForm'





function App() {
  const [foodState, setFoodState] = useState(foods)
  
  const addFood = (newFood) => {
    setFoodState(foods => [newFood, ...foods])
  }

  return (
    <div className="App">
    <AddFood foodInfo={foodState} setFoodState={setFoodState} addFood={addFood}/>
    <Foodbox foodInfo={foodState} />
  
    </div>
  );
}

export default App;
