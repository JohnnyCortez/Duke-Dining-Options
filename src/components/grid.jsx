import React from "react";
import Location from "../components/location";
import "../App.css"

const Grid = () => {
    return (
        <div>
        <div class="container">
            <div class="card">
                <Location image = "https://img.restaurantguru.com/cf01-Tandoor-Durham-food.jpg" name="Tandoor" des="Indian" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
            <div class="card">
                <Location image = "https://img.restaurantguru.com/cbab-Skillet-Durham-photo.jpg" name="Skillet" des="Breakfast" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
            <div class="card">
                <Location image = "https://10619-2.s.cdn12.com/c1/Restaurant-Ginger-Soy-meals.jpg" name="Ginger & Soy" des="Asian" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <Location image = "https://fastly.4sqi.net/img/general/600x600/142502550_PkRYK1rJA3uRfwUHrZFQmhPfCehKJdpKCIXi6620J6w.jpg" name="Farmstead & Sprout" des="Sandwhiches & more" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
            <div class="card">
                <Location image = "https://img.restaurantguru.com/c67a-Sazon-Durham-food.jpg" name="Sazon" des="Latin" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
            <div class="card">
                <Location image = "https://img.restaurantguru.com/cbf9-Restaurant-Gyotaku-photo-3.jpg" name="Gyotaku" des="Sushi & more" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <Location image = "https://www.cityofboise.org/media/5665/shutterstock_140549707.jpg?width=1200&mode=max&upscale=false" name="CAFE" des="Coffee & more" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
            <div class="card">
                <Location image = "https://img.restaurantguru.com/cb61-Il-Forno-Durham-pizza.jpg" name="IL Forno & Sazon" des="Italian" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
            <div class="card">
                <Location image = "https://pbs.twimg.com/media/CrHmmwbWAAA0G9A.jpg" name="JB's Roast & Chops" des="Steak chicken & more" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <Location image = "https://img.restaurantguru.com/c6d1-Pub-and-bar-Devils-Krafthouse-food-1.jpg" name="Devils Krafthouse" des="Burgers wings & more" link="https://netnutrition.cbord.com/nn-prod/duke#"/>
            </div>
        </div>
        </div>
    )
}

export default Grid;