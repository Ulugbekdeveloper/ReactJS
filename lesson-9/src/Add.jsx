import React, {useState , useContext} from "react";
import { Developers } from "./context";

const Add =() => {
    const [developer, setDeveloper] = useContext(Developers)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const onAdd = () => {
        if(name.length !== 0 && price.length !== 0){
            setDeveloper((previous) => 
            [...previous ,
            {id:previous.length + 1, developer:name, price:price},
          ])
        }
    setName("")
    setPrice("")
    }
    return(
        <div>
             <input onChange={(e)=>setName(e.target.value)} value={name} placeholder="name"/>
             <input onChange={(e)=>setPrice(e.target.value)} value={price} placeholder="price"/>
             <button onClick={onAdd}>Add</button>
        </div>
    )
}
export default Add