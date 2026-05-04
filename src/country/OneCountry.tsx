import {useState , useEffect} from "react"
import "./OneCountryStyle.css"
import {Link} from "react-router-dom"
import {useParams} from 'react-router-dom'

interface Country {
  name: string
  population: number
  region: string
  subregion: string          // Sub Region
  capital?: string
  flags: {
    svg: string
    png: string
  }
  alpha3Code: string
  nativeName: string         // Native Name
  topLevelDomain: string[]   // Top Level Domain - array
  currencies: {              // Currencies
    code: string
    name: string
    symbol: string
  }[]
  languages: {               // Languages
    name: string
    nativeName?: string
    iso639_1?: string
    iso639_2?: string
  }[]
}


export default function DataFromCountry(){
        const [countries, setCountries] = useState<Country>()
        
        const {contry} = useParams()
        
        useEffect(()=>{
            fetch("data.json")
            .then(res => res.json())
            .then(data => data.find((e: Country) => e.alpha3Code === contry))
            .then(result => setCountries(result))
        }, [contry])

        function renderCountry(country:Country){
            return(
                <div className="oneCountry"  key={country.alpha3Code} >
                    <div className="img">
                    <img style={{width: `45dvw` }} src={country.flags.svg} alt="" />
                    </div>
                    <div className="ditals">
                        <h2>{country.name}</h2>

                        <div className="allP">
                            <p>Native Name: {country.name}</p>
                            <p>population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Sub Region: {country.subregion}</p>
                            {country.capital && <p>Capital: {country.capital}</p>}
                            <p>Top Level Domain: {country.topLevelDomain}</p>
                            <p>Currencies: {country.currencies.map(e=> e.name)}</p>
                            <p>Languages: {country.languages.map(e=>e.name)}</p>
                            {country.capital && <p>Capital: {country.capital}</p>}
                        </div>
                    </div>
                </div>
            )
        }
    return(
        <>
        <div className="goBack">
            <Link to={`/`}>
                <div className="toBack"><p>{`<--`} Go Back</p></div>
            </Link>
        </div>
        {countries && renderCountry(countries)}
    </>
    )
}