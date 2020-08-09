import React, {Component} from "react"

class Item extends Component{

  render(){
    return(
      <tr>
        <td>{this.props.item.nama}</td>
        <td>{this.props.item.email}</td>
        <td>{this.props.item.os}</td>
        <td>{this.props.item.github}</td>
        <td>{this.props.item.telegram}</td>
      </tr>
    )
  }
}

export default Item