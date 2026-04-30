import {  useEffect} from 'react'
import Searsh from "./Searsh"
import "./searshStyle.css"

function AllCountries(){
    
    function allCountryesContent(e){
        return(
            <div>{e[0]}</div>
        )
    }


    useEffect(()=>{
        fetch("data.json").then(
            e=> e.json()
        ).then(
            e=> allCountryesContent(e)
        )
    },[])
    return(
        <>
            <div className="searsh" >
                <Searsh/>
            </div>
            <div className="atharCountryes">
        {allCountryesContent}
            </div>
        </>
    )
}

export default AllCountries