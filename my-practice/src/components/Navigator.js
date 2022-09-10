function Navigator({currentElement}){
    const list = ["element1", "element2", "element3", "element4"];

    return(
        <div>
            {list.map(element => (
                
                <div>
                    {element}
                </div>

            ))}
        </div>
    )


}


export default Navigator;