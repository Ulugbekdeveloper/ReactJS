import React, {useState,useEffect} from "react"

const ReactHooks = ({item, status}) =>{
    const [count , setCount] =  useState(item)
    const [sta, SetStatus] = useState(status)
    useEffect(()=>{
        setCount(item)
        SetStatus(status)
        console.log("Hooks clicked");
    },[item, status])  
    return(
        <div>
         <div>ReactHooks version</div>
         <input
          placeholder="Hooks" 
          value={sta}
          onChange={(e)=>SetStatus(e.target.value)} />
         <h1>React Hooks: {count}</h1>
         <button onClick={()=>setCount(count+1)}>+</button>
         <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}

export default ReactHooks