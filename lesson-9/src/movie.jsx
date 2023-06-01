import React,{useContext} from "react";
import { Developers } from "./context";

const Movies =({data})=>{
    const [developer, setDeveloper] = useContext(Developers)
    const onDelete = (e) => {
      setDeveloper((delet)=> delet.filter((value)=>{
        return value.id !== e
      }))
    }
    return(
     <div> 
    <h1>Name: {data.developer}</h1>
    <h3>Price: {data.price}</h3>
    <button onClick={()=>onDelete(data.id)}>Delete</button>
    <hr/>
    </div>          
    )
}

export default Movies