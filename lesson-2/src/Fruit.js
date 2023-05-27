import React from "react";
import  "./fruit.css"


function Fruit(info){
    return(
        <div className="main">
            <div className="image">
                <img src="https://5.imimg.com/data5/SELLER/Default/2021/8/YN/SE/FV/72826034/red-apple-500x500.jpg" alt="img" width="100%" height="100%"/>
            </div>
            <div className="details">
                <div className="top">
                    <h1>{info.data.title}</h1>
                    <button className="button">Add</button>
                </div>
                <div className="bottom">
                    <div className="data">
                    <p className="title">UOM</p>
                    <p className="value">{info.data.uom}</p>
                    </div>
                    <div className="data">
                    <p className="title">Pack Size</p>
                    <p className="value">{info.data.size}</p>
                    </div>
                    <div className="data">
                    <p className="title">Per Unit</p>
                    <p className="value">{info.data.unit}</p>
                    </div>
                    <div className="data">
                    <p className="title">Total</p>
                    <p className="value">{info.data.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
       
    

export default Fruit