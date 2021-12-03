import React, { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";


export default function AddFoodForm(props) {
    // console.log('props', props)
        
    // PROPS FOR ADDFOODFORM
    const [nameState, setNameState] = useState('')
    const [imageState, setImageState] = useState('')
    const [caloriesState, setCaloriesState] = useState(0)
    const [servingsState, setServingsState] = useState(0)
        
    // name change 
    const handleNameChange = event => {
        setNameState(event.target.value)
    }

    // image change
    const handleImageChange = event => {
        setImageState(event.target.value)
    }

    // calories change
    const handleCaloriesChange = event => {
        setCaloriesState(event.target.value)
    }

    // servings change
    const handleServingsChange = event => {
        setServingsState(event.target.value)
    }

        
    const handleSubmit = event => {
        const newFood = { nameState, imageState, caloriesState, servingsState }
            console.log('newfood', newFood)
        props.addFood(newFood)

    }

    return (
        
        <div>
            <form onSubmit={handleSubmit} >

            <label htmlFor="nameState">Name:</label>
            <Input value={nameState} type="text" onChange={handleNameChange} />

            <label htmlFor="imageState">Image URL:</label>
            <Input value={imageState} type="text" onChange={handleImageChange} />

            <label htmlFor="caloriesState">Calories:</label>
            <Input value={caloriesState} type="number" onChange={handleCaloriesChange} />

            <label htmlFor="servingsState">Servings:</label>
            <Input value={servingsState} type="number" onChange={handleServingsChange} />
            
            <Button type='submit' onClick={handleSubmit}>Add Food</Button>
            </form>
        </div>
    )
}
