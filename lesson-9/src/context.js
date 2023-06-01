import React, {useState, createContext} from "react";

export const Developers = createContext()

export const FilmProvider = ({children}) => {
    const [developers, setDevelopers] = useState([
        {id:1, developer:"Temurbek Sello", status:"Frontend", price:"100$"},
        {id:2, developer:"Abdumalik", status:"IOS", price:"200$"},
        {id:3, developer:"Ulug'bek", status:"Full Stack", price:"9000$"},
        {id:4, developer:"Temurbek", status:"Backend", price:"400$"},
    ])
return(
    <div>
    <div>
    <Developers.Provider value={[developers , setDevelopers]}>
     {children}
    </Developers.Provider>
    </div>
    </div>

)
}

