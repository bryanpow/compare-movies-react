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
        // Reverse the order of movies so that new ones come first
        const reversedAdded = [...added].reverse();
        const movieElements = reversedAdded.map(movie => addMovie(movie));
        setMovies(currentMovies => {
            const existingMovieTitles = new Set(currentMovies.map(movie => movie && movie.title));
            const newMovies = movieElements.filter(movie => movie && !existingMovieTitles.has(movie.title));
            // Prepend new movies to the existing movies in state
            return [...newMovies, ...currentMovies];
        });
    }
}, []);


useEffect(() => {
   
    const unsubscribe = defaultMovies.subscribe(() => {
        if (defaultMovies.value) {
            setMovies(currentMovies => {
                const currentTitles = new Set(currentMovies.map(movie => movie.title));
                
          // Filter out the new movies that are already in the currentMovies
          const uniqueNewMovies = defaultMovies.value.filter(movie => !currentTitles.has(movie.title));
    
          // Return the combined array of current movies and unique new movies
          return [...currentMovies, ...uniqueNewMovies];
            })
        }
       
    })
    return () => unsubscribe()


}, [defaultMovies])


   
useEffect(() => {
    if (formData.value) {
        const unsubscribe = formData.subscribe(() => {
            const data = addMovie(formData.value[formData.value.length - 1])
            setMovies(currentMovies => Array.isArray(currentMovies) ? [data, ...currentMovies] : [data])
        })

        return () => unsubscribe()
    }
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
          <Footer aos='fade' />
    </div>
  )
}

export default Movies