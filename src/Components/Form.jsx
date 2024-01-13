import React, { useState } from "react";
import { signal, effect} from "@preact/signals-react";
import {getMovie} from "../../helpers";
import { addCard } from "../../localStorage";
export const formData = signal(
    [
    {
        title: '',
        critic: '',
        veiwer: '',
        box: '',
        genre: '',
        img: ''
    }
]
)
function Form() {
    const [title, setTitle] = useState('');
    const [criticScore, setCriticScore] = useState('');
    const [viewerScore, setViewerScore] = useState('');
    const [boxOffice, setBoxOffice] = useState('');
    const [genre, setGenre] = useState('');
    const [img, setImg] = useState('https://viterbi-web.usc.edu/~zexunyao/itp301/Assignment_07/img.jpeg')
    const [ph, setPh] = useState(true)
    
    const handleSearch = async(titleData) => {
        setTitle('');
        setCriticScore('');
        setViewerScore('');
        setBoxOffice('')
        setImg('')
        const movie = await getMovie(titleData)
        if (!movie) setPh('Movie Not found')
        setTitle(movie.title);
        setCriticScore(movie.critic);
        setViewerScore(movie.viewer);
        setBoxOffice(movie.box)
        setImg(movie.img)
        setPh(movie.placeHolder)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.value.length > 0) {
            formData.value = [...formData.value, 
                {
                    title: title,
                    critic: criticScore,
                    veiwer: viewerScore,
                    box: boxOffice,
                    genre: genre,
                    img: img
                }
            ]
        } else {
            formData.value =
                {
                    title: title,
                    critic: criticScore,
                    veiwer: viewerScore,
                    box: boxOffice,
                    genre: genre,
                    img: img
                }
        }
        setTitle(null);
        setCriticScore(null);
        setViewerScore(null);
        setBoxOffice(null)
        setImg(null)
        addCard({
            title: title,
            critic: criticScore,
            veiwer: viewerScore,
            box: boxOffice,
            genre: genre,
            img: img
        })
  
    }
    
  return (
    <div>
      <form id="movieForm">
        <h3 id="formTitle" style={{ fontWeight: 400 }}>
          Add Movie +
        </h3>
        <div id="formItems">
          <div className="in">
            <label htmlFor="title">Movie-Title: </label>
            <input
              placeholder={(!ph && 'Movie not found') || 'Enter Movie title' }
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoComplete="off"
              required
            />
            <button onClick={() => handleSearch(title)} id="titleSub" >
              Search
            </button>
          </div>
          <div className="in">
            <label htmlFor="critic">Critic Score: </label>
            <input
            placeholder={'Enter Critic Score'}
              type="number"
              name="critic"
              id="critic"
              value={criticScore}
              onChange={e => setCriticScore(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="in">
            <label htmlFor="audience">Viewer Score: </label>
            <input
            placeholder={'Enter Viewer Score'}
              type="number"
              name="audience"
              id="audience"
              value={viewerScore}
              onChange={e => setViewerScore(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="in">
            <label htmlFor="box">Box Office: </label>
            <input
            placeholder={'Enter Gross'}
              type="text"
              name="box"
              id="box"
              value={boxOffice}
              onChange={e => setBoxOffice(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="in">
            <label htmlFor="genre">Genre:</label>
            <select id="genre" name="genre" value={genre} onChange={e => setGenre(e.target.value)} autoComplete="off" required>
              <option value="" disabled selected>
                Select genre
              </option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="documentary">Documentary</option>
              <option value="musical">Musical</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>
          <div id="butts">
            <button id="formSub" onClick={handleSubmit} className="in">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;
