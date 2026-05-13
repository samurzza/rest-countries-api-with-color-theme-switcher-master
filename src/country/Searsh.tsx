import { useContext , useState } from "react";
import { searshContext } from "../context/searshContext";
import { SelectContext } from "../context/SelectContext";
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { MoodContext } from "../context/MoodContext.tsx"


    
    export default function SearshCountyes(){
        
        const { search, setSearch } = useContext(searshContext);
        
        const { select , setSelect } = useContext(SelectContext);
        
        const { mood } = useContext(MoodContext);

    // console.log(select)

    // const [regionCommit , setRegionCommit] = useState<string>(``)

    const [selectHidin , setSelectHidin] = useState<string>(`none`)
    const [calssModd , setClassMood] = useState<string>(`left`)


    function clickFunction(name:string){
            setSelect(name)
            // setRegionCommit(name)
                if(selectHidin === `block`){
                    setSelectHidin(`none`)
                    setClassMood(`top`);

                }else if(selectHidin === `none`){
                    setSelectHidin(`block`)
                    setClassMood(`bottum`);
                }
    }
    
    const styleStele = {
        display:selectHidin,
        backgroundColor:mood===`Dark Mood` ? `hsl(209, 23%, 22%)`: `hsl(0, 0%, 100%)` ,
        color:mood===`Dark Mood`?`white`:`black`
    }
// 

    function chinge(){
    if(selectHidin === `block`){
        setSelectHidin(`none`)
        setClassMood(`top`);

    }else if(selectHidin === `none`){
        setSelectHidin(`block`)
        setClassMood(`bottum`);
    }
    }

    return(
        <   >
        <div>
            <SearchIcon  style={{transform: `translate(45px, 5px)`, color:`#a8a8a8`}} />
        <input className="searchInput" style={{backgroundColor:mood===`Dark Mood` ? `hsl(209, 23%, 22%)`: `hsl(0, 0%, 100%)` , color:mood===`Dark Mood`?`white`:`black` ,boxShadow:mood===`Dark Mood` ?`2px 1px 14px 1px rgb(45 45 45 / 77%)`:`5px 4px 9px 1px #c0c0c0`}} type="search" value={search} placeholder="country name" onChange={(e)=>{setSearch(e.target.value)}} />
        </div>
            
        <div className="region">
            <div onClick={chinge} id="delectField" style={{backgroundColor:mood===`Dark Mood` ? `hsl(209, 23%, 22%)`: `hsl(0, 0%, 100%)` , color:mood===`Dark Mood`?`white`:`black` ,boxShadow:mood===`Dark Mood` ?`2px 1px 14px 1px rgb(45 45 45 / 77%)`:`5px 4px 9px 1px #c0c0c0`}}>
                <p>{select || "Filter By Region"}</p>
                <p><span  className={calssModd }><ArrowCircleDownIcon /></span></p>
            </div>  

            <ul style={styleStele}>
                <li onClick={() => clickFunction("Africa")}>Africa</li>
                <li onClick={() => clickFunction("Americas")}>Americas</li>
                <li onClick={() => clickFunction("Asia")}>Asia</li>
                <li onClick={() => clickFunction("Europe")}>Europe</li>
                <li onClick={() => clickFunction("Oceania")}>Oceania</li>
            </ul>    
        </div>
        </>
    )
}
