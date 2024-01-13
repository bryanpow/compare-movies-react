import React from "react";
import { signal, effect} from "@preact/signals-react";
import { getMovie } from "../../helpers";
const formData = signal()
function Form() {
    const [title, setTitle] = useState('');
    const [criticScore, setCriticScore] = useState('');
    const [viewerScore, setViewerScore] = useState('');
    const [boxOffice, setBoxOffice] = useState('');
    const [genre, setGenre] = useState('');

    const handleSearch = (title) => {
        getMovie(titleData)
    }
    const handleSubmit = () => {
        formData.value = {
            title: title,
            critic: criticScore,
            veiwer: viewerScore,
            box: boxOffice,
            genre: genre,
        }
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
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoComplete="off"
              required
            />
            <button id="titleSub" >
              Search
            </button>
          </div>
          <div className="in">
            <label htmlFor="critic">Critic Score: </label>
            <input
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
