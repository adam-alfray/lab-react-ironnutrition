import React, { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";


export default function AddFoodForm(props) {
    // console.log('props', props)
        
    // PROPS FOR ADDFOODFORM
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
        
    // name change 
    const handleNameChange = event => {
        setName(event.target.value)
    }

    // image change
    const handleImageChange = event => {
        setImage(event.target.value)
    }

    // calories change
    const handleCaloriesChange = event => {
        setCalories(event.target.value)
    }

    // servings change
    const handleServingsChange = event => {
        setServings(event.target.value)
    }

        
    const handleSubmit = event => {
        const newFood = { name, image, calories, servings }
            console.log('newfood', newFood)
        props.addFood(newFood)

    }

    return (
        
        <div>
            <form onSubmit={handleSubmit} >

            <label htmlFor="nameState">Name:</label>
            <Input value={name} type="text" onChange={handleNameChange} />

            <label htmlFor="imageState">Image URL:</label>
            <Input value={image} type="image" onChange={handleImageChange} />

            <label htmlFor="caloriesState">Calories:</label>
            <Input value={calories} type="number" onChange={handleCaloriesChange} />

            <label htmlFor="servingsState">Servings:</label>
            <Input value={servings} type="number" onChange={handleServingsChange} />
            
            <Button type='submit' onClick={handleSubmit}>Add Food</Button>
            </form>
        </div>
    )
}
