import { useEffect, useState } from 'react'
import { signal, effect} from "@preact/signals-react";
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from './Movies';
import defaultMov from "../../public/movie-data.json";
import {
  getCard,
  setCard,
  addCard,
  removeCard,
  getDefault,
  setDefault,
  addDefault,
  removeDef,
} from "../../localStorage.js";
import { renderDef, saveDefault } from '../../helpers.jsx';
import ChartPage from './ChartPage.jsx';
export const loading = signal(false)

export const updateLocalStorageMovies = () => {
    const event = new Event('localStorageMoviesUpdated');
    window.dispatchEvent(event);
};

export const fetchDefault = async () => {
  loading.value = true
  await saveDefault(defaultMov);
  loading.value = false;
  updateLocalStorageMovies()
}
function App() {
  useEffect(() => {
      if(!getDefault()) {
        const fetchMovies = async () => {
          await fetchDefault()
          console.log('hi')
      }
      fetchMovies()
      }
      
  }, [])
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Movies' element={<Movies />} />
      <Route path='/Charts' element={<ChartPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
