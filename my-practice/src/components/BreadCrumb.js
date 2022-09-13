function BreadCrumb({currentPageList}){
    return(
        <div>
            {currentPageList.map(element => (
                <div>{`${element} >`}</div> // Link로 해당 Page로 이동가능하게?
            ))}
        </div>
    )
}

export default BreadCrumb;