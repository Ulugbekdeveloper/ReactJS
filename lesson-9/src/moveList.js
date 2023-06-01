import React, {useContext} from "react";
import {Developers} from "./context"
import Movies from "./movie"


const MoveList =()=>{
    const [dev, setDeveloper] = useContext(Developers)
    return(
       <div>
    {
        dev.map((value, index)=>{
            return(
               <Movies key={value.id} data={value}/> 
            )
        })
    }
       </div>
    )
}

export default MoveList