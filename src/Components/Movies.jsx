import React, { useEffect, useState } from 'react'
import Form, { formData } from './Form'
import NavBar from './NavBar'
import Footer from './Footer'
import { getCard, setCard, getDefault } from '../../localStorage'
import { renderDef } from '../../helpers'
import defaultMov from "../../public/movie-data.json";
import { defaultMovies } from './App'
import { addMovie } from '../../helpers'
import { sanitizeInput } from '../../helpers'
function Movies() {
const [movies, setMovies] = useState([])

useEffect(() => {
    const added = getCard();
    if (added) {
        const movieElements = added.map(movie => addMovie(movie));
        setMovies(currentMovies => movieElements.concat(currentMovies));
    }
    
}, []);



    useEffect(() => {
    const unsubscribe = defaultMovies.subscribe(() => {
        setMovies(defaultMovies.value)
    })
    return () => unsubscribe()
    },[defaultMovies])

    useEffect(() => {
        const unsubscribe = formData.subscribe(() => {
            const data = addMovie(formData.value[formData.value.length - 1])
            setMovies(currentMovies => Array.isArray(currentMovies) ? [data, ...currentMovies] : [data])
        })

        return () => unsubscribe()
    }, [formData])
   
  return (
    <div>
        <NavBar />
        <div id="moviePage">
              <div id="movieIntro">
                  <div id="textMov">
                      <h1>Movies</h1>
                      <p>Easily add new movies to the lineup and discover pre-populated data for recognized titles, or double-click to remove a movie. Immerse yourself in the cinematic world as you delve into insightful charts comparing movie ratings and box office performance.</p>
                  </div>
              </div>
              <div id="movies">
                  <div id="add-movie">
                    <Form />
                  </div>
              </div>
              <div id="m">
                  <div id="display-movies">
                      {movies}
                  </div>
              </div>
          </div>
          <Footer />
    </div>
  )
}

export default Movies