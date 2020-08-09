import React, {useState, useEffect} from "react"
import axios from "axios"
import "./DaftarMovie.css"
// belum jadi

const DaftarMovie = () => {
  
  const [daftarMovie, setDaftarMovie] =  useState(null)
  const [input, setInput]  =  useState({name: "", price: "", weight: 0})
  const [selectedId, setSelectedId]  =  useState(0)
  const [statusForm, setStatusForm]  =  useState("create")

  useEffect( () => {
    if (daftarMovie === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movie`)
      .then(res => {
        setDaftarMovie(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
      })
    }
  }, [daftarMovie])
  
  const handleDelete = (event) => {
    let idDataMovie = parseInt(event.target.value)

    let newdaftarMovie = daftarMovie.filter(el => el.id !== idDataMovie)

    axios.delete(`http://backendexample.sanbercloud.com/api/movie/${idDataMovie}`)
    .then(res => {
      console.log(res)
    })
          
    setDaftarMovie([...newdaftarMovie])
    
  }
  
  const handleEdit = (event) =>{
    let idDataMovie = parseInt(event.target.value)
    let dataMovie = daftarMovie.find(x=> x.id === idDataMovie)
    setInput({name: dataMovie.name, price: dataMovie.price, weight: dataMovie.weight})
    setSelectedId(idDataMovie)
    setStatusForm("edit")
  }

  const handleChange = (event) =>{
    let typeOfInput = event.target.name

    switch (typeOfInput){
        case "title":
            {
              setInput({...input, title: event.target.value});
              break
            }
            case "description":
              {
                setInput({...input, description: event.target.value});
                break
              }
            case "year":
            {
              setInput({...input, year: event.target.value});
              break
            }
      
            case "duration":
              {
                setInput({...input, duration: event.target.value});
                break
              }
            case "genre":
              {
                setInput({...input, genre: event.target.value});
                break
              }
             
            case "rating":
            {
              setInput({...input, rating: event.target.value});
                break
            }
          default:
            {break;}
    }
  }


  return(
    <>
      <h1>Daftar Movie</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Rating</th>

          </tr>
        </thead>
        <tbody>

            {
              daftarMovie !== null && daftarMovie.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.year}</td>
                    <td>{item.duration}</td>
                    <td>{item.genre}</td>
                    <td>{item.rating}</td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>

    </>
  )
}

export default DaftarMovie