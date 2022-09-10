function BreadCrumb({currentPageList}){
    return(
        <div>
            {currentPageList.map(element => (
                <div>{`${element} >`}</div>
            ))}
        </div>
    )
}

export default BreadCrumb;