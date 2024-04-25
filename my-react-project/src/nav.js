import React from "react";

function NavBar(movies){
    return(
        <div id='nav' style={{display: "flex"}}>
            <h1 style={{color: '#17699e', fontSize: 30}}>Universal Theaters</h1>
            <a href="#home" style={{padding: 30, color: '#17699e'}}>Home</a>
            <a href="#location" style={{padding: 30, color: '#17699e'}}>Locations</a>
            <a href="#movieList" style={{padding: 30, color: '#17699e'}}>Movies</a>
            
        </div>
        
    )
}

export default NavBar;