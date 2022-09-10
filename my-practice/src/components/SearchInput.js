import {useState} from 'react' 

function SearchInput(){
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }


    return (
        <div>
            <input type = "text" placeholder="Enter keyword" value = {value} onChange = {onChange}></input>
        </div>
    )
}


export default SearchInput();