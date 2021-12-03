import React from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";


export default function FoodBox(props) {
    console.log(props)

    // THIS IS TO MAP THRU foodInfo
    const foodCard =  props.foodInfo.map(food => {
        console.log('the food', food)
        return ( 
            <Col>
        <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
             >
            <img src={food.image} style= {{height: '60px'}} />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>
            <Button type="primary"> Delete </Button>
        </Card>
        </Col>
        )
    }) 
return (
        <div>
        {foodCard}
            {/* <Col> */}
           
                {/* <Card
                    title={props.foodInfo.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                     >
                    <img src={props.foodInfo.image} style= {{height: '60px'}} />
                    <p>Calories: {props.foodInfo.calories}</p>
                    <p>Servings: {props.foodInfo.servings}</p>
                    <p>
                        <b>Total Calories: {props.foodInfo.calories * props.foodInfo.servings} </b> kcal
                    </p>
                    <Button type="primary"> Delete </Button>
                </Card> */}
            {/* </Col> */}

        </div>
    )
}
