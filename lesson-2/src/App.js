import Fruit from "./Fruit"
import './App.css';

const data = [
  {id:1, img:"./", title:"Apple1", uom:"02", size:"020",unit:"$8.99" ,total:"$417.78"},
  {id:2, img:"./", title:"Apple2", uom:"02", size:"021",unit:"$6.99" ,total:"$13.78"},
  {id:3, img:"./", title:"Apple3", uom:"02", size:"022",unit:"$4.99" ,total:"$127.78"},
  {id:4, img:"./", title:"Apple4", uom:"02", size:"023",unit:"$3.99" ,total:"$173.78"},
  {id:5, img:"./", title:"Apple5", uom:"02", size:"024",unit:"$7.99" ,total:"$1.78"},
  {id:6, img:"./", title:"Apple6", uom:"02", size:"025",unit:"$2.99" ,total:"$127.78"},
  {id:7, img:"./", title:"Apple7", uom:"02", size:"026",unit:"$8.99" ,total:"$27.78"},
  {id:8, img:"./", title:"Apple8", uom:"02", size:"027",unit:"$7.99" ,total:"$317.78"},
  {id:9, img:"./", title:"Apple9", uom:"02", size:"028",unit:"$9.99" ,total:"$617.78"},
  {id:10, img:"./", title:"Apple10", uom:"02", size:"102",unit:"$1.99" ,total:"$177.78"},
  {id:11, img:"./", title:"Apple11", uom:"02", size:"302",unit:"$5.99" ,total:"$178.78"},
  {id:12, img:"./", title:"Apple12", uom:"02", size:"202",unit:"$9.99" ,total:"$217.78"},
]

function App() {
  return (
    <div className="container">
      {
        data.map((value ,index)=>{
          return(
         <div>
          <Fruit data={value}/>
         </div>
          )
        })
      }
    </div>
  );
}

export default App;
