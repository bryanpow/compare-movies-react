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
import { renderDef } from '../../helpers.jsx';

export const defaultMovies = signal()

function App() {
  useEffect(() => {
    
      const fetchMovies = async () => {
        const moviesData = await renderDef(defaultMov);
        defaultMovies.value = moviesData
    }
    fetchMovies()
  }, [])
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Movies' element={<Movies />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
