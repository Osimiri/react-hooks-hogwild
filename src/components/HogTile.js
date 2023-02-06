import React, {useState} from "react";
// import HogStats from "./HogStats"

function HogTile({name,specialty,greased,weight,image,medal,hogs}){ 
    
    const [hogClicked,setHogClicked]= useState(false)
    function handleClick(){
        setHogClicked(hogClicked => !hogClicked);
    }    
    return(
    <div onClick={handleClick} className="ui card eight wide column pigTile">
        <h2 >{name}</h2>
        <img src={image} alt="Here Piggy Piggy"/>
        {/* <HogStats hogs={hogs} /> */}
           {hogClicked? 
                (<div>
                    <li>Specialty: {specialty}</li>
                    <li>Weight: {weight}</li>
                    <li>{greased? 'Greased' : 'Greaseless'}</li>
                    <li>Highest medal achieved: {medal.toUpperCase()}</li>
                </div>) : null};
    </div>
    )
}

export default HogTile;
{/* <div style={hogClicked? {display:'flex'} : {display : 'none'}}></div> */}