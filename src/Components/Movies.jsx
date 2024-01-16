import React, { useEffect, useState } from 'react'
import Form, { formData } from './Form'
import NavBar from './NavBar'
import Footer from './Footer'
import { getCard, setCard, getDefault } from '../../localStorage'
import { renderDef } from '../../helpers'
import defaultMov from "../../public/movie-data.json";
import LoadingIcons from 'react-loading-icons'
import { addMovie } from '../../helpers'
import { sanitizeInput } from '../../helpers'
import { loading } from './App'
function Movies() {
const [movies, setMovies] = useState([])
const [moviesKey, setMoviesKey] = useState(0)
const [loaded, setLoaded] = useState(false)
const [stillLoading, setStillLoading] = useState(false)
const [expanded, setExpanded] = useState(false)
setTimeout(() => {
    setLoaded(true)
},100)

useEffect(() => {
    const unsubscribe = loading.subscribe(() => {
        setStillLoading(loading.value)
        console.log(loading.value)
    })
},[loading])

const renderAll = () => {
    const addedMovies = getCard() || [];
    const defaultMovies = getDefault() || [];
    // Combine added and default movies
    const combinedMovies = [...(addedMovies.reverse()), ...defaultMovies];

    // Use a Set to filter out duplicates based on title
    const uniqueMovieTitles = new Set();
    const uniqueMovies = combinedMovies.filter(movie => {
        const isDuplicate = uniqueMovieTitles.has(movie.title);
        uniqueMovieTitles.add(movie.title);
        return !isDuplicate;
    });

    // Convert unique movie data into JSX elements
    const movieElements = uniqueMovies.map((movie) => {
        return addMovie(movie)
    });
    
    // Set to state
    setMovies(movieElements);
}



useEffect(() => {
     renderAll()
    
    ; // Initial render

    const handleLocalStorageChange = () => {
        renderAll(); // Re-render when local storage changes
    };

    window.addEventListener('localStorageMoviesUpdated', handleLocalStorageChange);

    // Cleanup
    return () => {
        window.removeEventListener('localStorageMoviesUpdated', handleLocalStorageChange);
    };
}, []);
   
    const handleExpand = () => {
        if (expanded === false){
            setExpanded(true)
        } else {
            setExpanded(false)
        }

        
    }


  return (
    <div>
        <NavBar color='light' />
        <div id="moviePage">
              <div id="movieIntro">
                  <div  id="textMov">
                      <h1>Movies</h1>
                      
                      <p>Easily add new movies to the lineup and discover pre-populated data for recognized titles, or double-click to remove a movie. Immerse yourself in the cinematic world as you delve into insightful charts comparing movie ratings and box office performance.</p>
                  </div>
              </div>
              <div id="movies">
                  <div  id="add-movie">
                    <Form expand={expanded} handleExpand={handleExpand}/>
                  </div>
              </div>
              <div id="m">
                  <div key={moviesKey} id="display-movies">
                      {stillLoading && <LoadingIcons.ThreeDots style={{marginTop: '30px'}}  stroke="black" fill='black' />}
                      {!stillLoading && movies}
                  </div>
              </div>
          </div>
          
          {loaded && !stillLoading &&  <Footer /> }
    </div>
  )
}

export default Movies