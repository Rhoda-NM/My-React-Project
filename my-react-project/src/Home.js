import React from 'react';
import NavBar from './nav';




function Home() {
    const locations = [
        {building: "GreenSpur Mall", address: "4th Street along Uhuru Highway", city: "Nairobi"},
        {building: "Harolds Mall", address: "Musseum lane Moi Avenue", city: "CapeTown"},
        {building: "Water Front Mall", address: "Along ExpressHighway", city: "Mombasa"},
        {building: "Blixen Mall", address: "5th Avenue", city: "Kigali"}
    ]

    
    return (
        <div id="home">
            <NavBar />
            <div>
            <p>Welcome to the home of all your favourite Movies</p>
            <h2>Our Locations</h2>

            <ul id="location">
                {locations.map((location) => {
                    return <li key={location.building}>{location.building} - {location.address} - {location.city}</li> 
                })}
            </ul>
            </div>
        </div>
    )
}

export default Home;