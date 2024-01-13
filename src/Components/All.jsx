import React from "react";
import Form from "./Form";

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
                    <Form />
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
