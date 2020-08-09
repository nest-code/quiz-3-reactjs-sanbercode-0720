import React, { Component } from 'react'
import Item from './Item'


class About extends Component {
  
  render() {
    let dataDiri = [
      {
      name: "Ernesto Andre Yulian Manurung", 
      email: "ernestoandreyulian@gmail.com",
      os:"Windows 10",
      github: "github.com/nest-code",
      telegram : "@ernestomanurung"
      }
    ]
    
    return (
      <>
       <h1 style={{textAlign : "center"}}> Daftar Harga Buah</h1>
        <table style={{border: "1px solid", width: "40%", margin: "0 auto"}}>
           
            {dataDiri.map((el, index)=> {
              return (
                <>
                  <Item item={el} key={index}/>
                </>
                )
              })}
 
        </table>
      </>
    )
  }
}

export default About