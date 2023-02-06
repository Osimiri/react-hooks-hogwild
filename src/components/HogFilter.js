import React from 'react';

function HogFilter({setGreasy, setIsSorted}) {
    return (
        
        <div>
            <label>Greasy Hog Check</label>
            <input onChange = {(e) => setGreasy(e.target.checked)} type = "checkbox"></input>
            <select onChange = {(e) => setIsSorted(e.target.value)}>
                <option>All</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
        </div>
    )
}

export default HogFilter