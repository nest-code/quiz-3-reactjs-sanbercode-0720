import React, {useContext, useEffect} from "react"
import axios from "axios"
import {DaftarMovieContext} from "./DaftarMovieContext"

const DaftarMovieList = () =>{
  const [daftarMovie, setDaftarMovie] = useContext(DaftarMovieContext)
  useEffect( () => {
    if (daftarMovie.lists === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movie`)
      .then(res => {
        setDaftarMovie({
          ...daftarMovie, 
          lists: res.data.map(el=>{ 
            return {id: el.id,
              title: el.title, 
              description: el.description, 
              year: el.year, 
              duration: el.duration, 
              genre: el.genre, 
              rating: el.rating
            }
          })
        })
      })
    }
  }, [setDaftarMovie])

  const handleEdit = (event) =>{
    let idDataMovie = parseInt(event.target.value)
    setDaftarMovie({...daftarMovie, selectedId: idDataMovie, statusForm: "changeToEdit"})
  }

  const handleDelete = (event) => {
    let idDataMovie = parseInt(event.target.value)
    let newLists = daftarMovie.lists.filter(el => el.id !== idDataMovie)

    axios.delete(`http://backendexample.sanbercloud.com/api/movie/${idDataMovie}`)
    .then(res => {
      console.log(res)
    })
          
    setDaftarMovie({...daftarMovie, lists: [...newLists]})
    
  }

  return(
    <>
      <h1>Daftar Harga Movie</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>genre</th>
            <th>Rating</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            {
              daftarMovie.lists !== null && daftarMovie.lists.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.year}</td>
                    <td>{item.duration}</td>
                    <td>{item.genre}</td>
                    <td>{item.rating}</td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>      
    </>
  )
}

export default DaftarMovieList