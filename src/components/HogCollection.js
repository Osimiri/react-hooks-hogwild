import React from "react";
import HogTile from "./HogTile";

function HogCollection({hogs}){
const hogList = hogs.map((hog) => {
    return <HogTile key ={hog.name} 
        name={hog.name}
        specialty = {hog.specialty}
        greased= {hog.greased}
        weight= {hog.weight}
        image= {hog.image}
        medal= {hog["highest medal achieved"]}
    />
})

return(
    <div className="ui three stackable cards">
       {hogList}
    </div>
)
}
export default HogCollection;