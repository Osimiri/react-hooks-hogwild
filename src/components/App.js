import React, {useState} from "react";
import Nav from "./Nav";
import HogCollection from "./HogCollection";
import HogFilter from "./HogFilter"
import hogs from "../porkers_data";

function App() {
	const [greasy,setGreasy]= useState(false)
	
	const filteredHogs = hogs.filter((hog) => {return greasy ? hog.greased : hog})
	// console.log(filteredHogs);

	const [isSorted, setIsSorted] = useState("All");


    const sortedHogs = [...filteredHogs].sort(( a, b ) => {
        if (isSorted === "Name" ){
            
            if ( a.name < b.name){
              return -1;
            }
            if ( a.name > b.name ){
              return 1;
            }
            return 0;
        } else if (isSorted === "Weight"){
            return filteredHogs;
        } else {
            return filteredHogs;
        }
      })
// console.log(sortedHogs);
	

	return (
		<div className="App">
			<Nav />
			<HogFilter setGreasy={setGreasy} setIsSorted = {setIsSorted}/>
			<HogCollection hogs={sortedHogs}/>
		</div>
	);
}

export default App;