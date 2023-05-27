import React from "react"

class ClassComponent extends React.Component {
    render(){
        return(
            <div>
                {/* <div>ID:{this.props.id}</div>  
                <div>Name:{this.props.name }</div>
                <div>Status:{this.props.status }</div> */}
                {/* <table border={1}>
                    <tr>
                        <th>ID:</th>
                        <th>Name:</th>
                        <th>Status:</th>
                    </tr>
                    {
                    this.props.data.map((value , index)=> {
                      return(
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.status}</td>
                        </tr>
                      )
                    })
                    }
                    </table> */}
            </div>
        )
    }   
}

export default ClassComponent