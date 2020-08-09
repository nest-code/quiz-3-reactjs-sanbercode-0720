import React, {useContext, useState, useEffect} from "react"
import axios from "axios"
import {DaftarMovieContext} from "./DaftarMovieContext"


const DaftarMovieForm = () =>{
  const [daftarMovie, setDaftarMovie] = useContext(DaftarMovieContext)
  const [input, setInput] = useState({title: "", description: "", year: 0, duration: 0, genre: "", rating:0})

  useEffect(()=>{
    if (daftarMovie.statusForm === "changeToEdit"){
      let dataMovie = daftarMovie.lists.find(x=> x.id === daftarMovie.selectedId)
      setInput({ description: dataMovie.description, description: dataMovie.description, year: dataMovie.year, duration: dataMovie.duration, genre: dataMovie.genre, rating: dataMovie.rating})
      setDaftarMovie({...daftarMovie, statusForm: "edit"})
    }
  },[daftarMovie])

  const handleChange = (event) =>{
    let typeOfInput = event.target.title

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
  
  const handleSubmit = (event) =>{
    event.preventDefault()

    let title = input.title
    let description = input.description
    let year = input.year.toString()
    let duration = input.duration.toString()
    let genre = input.genre
    let rating = input.rating.toString()


    if (title.replace(/\s/g,'') !== "" && description.replace(/\s/g,'') !== "" && year.replace(/\s/g,'') !== "" && duration.replace(/\s/g,'') !== "" && genre.replace(/\s/g,'') !== "" && rating.replace(/\s/g,'') !== "" ){      
      if (daftarMovie.statusForm === "create"){        
        axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title: input.title, description: input.description , year: input.year , duration: input.duration , genre: input.genre , rating: input.rating})
        .then(res => {
            setDaftarMovie(
              {statusForm: "create", selectedId: 0,
              lists: [
                ...daftarMovie.lists, 
                { id: res.data.id, 
                  title: input.title,
                  description: input.description,
                  year: input.year, 
                  duration: input.duration, 
                  genre: input.genre, 
                  rating: input.rating
                }]
              })
        })
      }else if(daftarMovie.statusForm === "edit"){
        axios.put(`http://backendexample.sanbercloud.com/api/movies/${daftarMovie.selectedId}`, {title: input.title, description: input.description , year: input.year , duration: input.duration , genre: input.genre , rating: input.rating})
        .then(() => {
            let dataMovie = daftarMovie.lists.find(el=> el.id === daftarMovie.selectedId)
            dataMovie.title = input.title
            dataMovie.description = input.description
            dataMovie.year = input.year
            dataMovie.duration = input.duration
            dataMovie.genre = input.genre
            dataMovie.rating = input.rating
            setDaftarMovie({statusForm: "create", selectedId: 0, lists: [...daftarMovie.lists]})
        })
      }

      setInput({title: "", description: "", year: 0, duration: 0, genre: "", rating: 0})
    }

  }
  return(
    <>
      <h1>Form  Movie</h1>

      <div style={{width: "50%", margin: "0 auto", display: "block"}}>
        <div style={{border: "1px solid #aaa", padding: "20px"}}>
          <form onSubmit={handleSubmit}>

            <label style={{float: "left"}}>
              title:
            </label>

            <input style={{float: "right"}} type="text" name="title" value={input.title} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
             Desription
            </label>
            <textarea name="description" onChange={handleChange} >
            {input.description}
              </textarea>
            <br/>
            <br/>
            <label style={{float: "left"}}>
             Tahun
            </label>
            <input style={{float: "right"}} type="number" name="year" value={input.year} onChange={handleChange}/>
            <br/>
            <br/>

            <label style={{float: "left"}}>
             Durasi
            </label>
            <input style={{float: "right"}} type="number" name="duration" value={input.duration} onChange={handleChange}/>
            <br/>
            <br/>

            <label style={{float: "left"}}>
              Genre
            </label>
            <input style={{float: "right"}} type="texr" name="genre" value={input.genre} onChange={handleChange}/>
            <br/>
            <br/>

            <label style={{float: "left"}}>
              Rating
            </label>

            <input style={{float: "right"}} type="number" name="rating" value={input.rating} onChange={handleChange}/>
            <br/>
            <br/>
            <div style={{width: "100%", paddingBottom: "20px"}}>
              <button style={{ float: "right"}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DaftarMovieForm