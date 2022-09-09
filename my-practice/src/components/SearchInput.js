import {useState} from 'react' 

function SearchInput(){
    const [value, setValue] = useState("");


    return (
        <div>
            <input type = "text" placeholder="Enter keyword"></input>
        </div>
    )
}


export default SearchInput();