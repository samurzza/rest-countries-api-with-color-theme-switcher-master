import {useState , useEffect} from "react"
import "./OneCountryStyle.css"
import {Link} from "react-router-dom"

type CountyContextType = {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

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


export default function DataFromCountry({country}:CountyContextType){
        const [countries, setCountries] = useState<Country>()
        
        
        useEffect(()=>{
            fetch("data.json")
            .then(res => res.json())
            .then(data => data.find((e: Country) => e.alpha3Code === country))
            .then(result => setCountries(result))
        }, [country])

        function countryAdd(rr:Country){
            return(
                <div className="oneCountry"  key={rr.alpha3Code} >
                    <div className="img">
                    <img style={{width: `45dvw` }} src={rr.flags.svg} alt="" />
                    </div>
                    <div className="ditals">
                        <h2>{rr.name}</h2>

                        <div className="allP">
                            <p>Native Name: {rr.name}</p>
                            <p>population: {rr.population}</p>
                            <p>Region: {rr.region}</p>
                            <p>Sub Region: {rr.subregion}</p>
                            {rr.capital && <p>Capital: {rr.capital}</p>}
                            <p>Top Level Domain: {rr.topLevelDomain}</p>
                            <p>Currencies: {rr.currencies.map(e=> e.name)}</p>
                            <p>Languages: {rr.languages.map(e=>e.name)}</p>
                            {rr.capital && <p>Capital: {rr.capital}</p>}
                        </div>
                    </div>
                </div>
            )
        }
    return(
        <>
        <div className="goBack">
            <Link to={`/`}>
                <div className="toBack"><p>Go Back</p></div>
            </Link>
        </div>
        {countries && countryAdd(countries)}
    </>
    )
}