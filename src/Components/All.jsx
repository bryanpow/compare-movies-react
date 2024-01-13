import React from "react";

function All() {
  return (
   <><div>
          <div id="app">
              
          </div>

          
          <div id="moviePage">
              <div id="movieIntro">
                  <div id="textMov">
                      <h1>Movies</h1>
                      <p>Easily add new movies to the lineup and discover pre-populated data for recognized titles, or double-click to remove a movie. Immerse yourself in the cinematic world as you delve into insightful charts comparing movie ratings and box office performance.</p>
                  </div>
              </div>
              <div id="movies">
                  <div id="add-movie">
                      <form id="movieForm">
                          <h3 id='formTitle' style={{ fontWeight: 400 }}>Add Movie +</h3>
                          <div id="formItems">
                              <div className="in">
                                  <label htmlFor="title">Movie-Title: </label>
                                  <input type="text" name="title" id="title" autoComplete="off" required />
                                  <button id="titleSub" type="submit">Search</button>
                              </div>
                              <div className="in">
                                  <label htmlFor="critic">Critic Score: </label>
                                  <input type="number" name="critic" id="critic" autoComplete="off" required />
                              </div>
                              <div className="in">
                                  <label htmlFor="audience">Viewer Score: </label>
                                  <input type="number" name="audience" id="audience" autoComplete="off" required />
                              </div>
                              <div className="in">
                                  <label htmlFor="box">Box Office: </label>
                                  <input type="text" name="box" id="box" autoComplete="off" required />
                              </div>
                              <div className="in">
                                  <label htmlFor="genre">Genre:</label>
                                  <select id="genre" name="genre" autoComplete="off" required>
                                      <option value="" disabled selected>Select genre</option>
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
                                  <button id="formSub" className="in">Add</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
              <div id="m">
                  <div id="display-movies">
                      {/* Content for display-movies */}
                  </div>
              </div>
          </div>
          <div id="container">
              <div id="top">
                  <canvas id="bar"></canvas>
              </div>
              <div id="p">
                  <canvas id="pie"></canvas>
              </div>
              <div id="s">
                  <canvas id="scatter"></canvas>
              </div>
          </div>
      </div></>
    
   
  );
}
export default Home;
