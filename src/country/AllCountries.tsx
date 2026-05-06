import { useEffect, useState } from 'react'
import Searsh from "./Searsh"
import "./searshStyle.css"
import "./county.css"
import {Link} from "react-router-dom"
import {useContext} from "react"
import { searshContext } from "../context/searshContext.tsx"

interface Country {
  name: string
  population: number
  region: string
  capital?: string  // ? لأن مو كل دولة عندها عاصمة
  flags: {
    svg: string
    png: string
  }
  alpha3Code: string
}


function AllCountries(){
    const [countries, setCountries] = useState<Country[]>([])
    const [allSearch, setAllSearch] = useState<Country[]>([])
    
    const [country, setCountry] = useState<string>()

    const { search } = useContext(searshContext);

    
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    useEffect(()=>{
       if(search != ""){
           countries.filter((e:Country) =>{
           e.name.toLowerCase().includes(search.toLowerCase()) ? setAllSearch(e) : "" 
        })
       }
       
       console.log(allSearch)
    },[search])

    console.log(country)
    

    function allCountryesContent(e: Country) {
        return (
            <Link to={`/${e.alpha3Code}`}>
                <div className="country" onClick={()=>{setCountry(e.alpha3Code)}}>
                    <img className='imgg' src={e.flags.svg} alt="" />
                    <h2>{e.name}</h2>
                    <p>Population: {e.population}</p>
                    <p>Region: {e.region}</p>
                    {e.capital && <p>Capital: {e.capital}</p>}
                </div>
            </Link>
    )
}

function allCountry(ccc){
    return(
        ccc.map((country) => (
        <div key={country.alpha3Code}>
            {allCountryesContent(country)}
        </div>
        ))
    )
}



    return( 
        <>
            <div className="searsh">
                <Searsh/>
            </div>

            <div className="atharCountryes">
                {allSearch !== `` ?allCountry():searchCounty() }
            </div>
        </>
    )
}

export default AllCountries