import BreadCrumb from "./components/BreadCrumb";
import Navigator from "./components/Navigator";
import SearchInput from "./components/SearchInput";


function Home(){

    return(
        <div>
            <Navigator currentElement = "Home" />
            <SearchInput />
        </div>
    )
}

export default Home;