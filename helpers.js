import defaultMov from "./public/movie-data.json";
import {
    getCard,
    setCard,
    addCard,
    removeCard,
    getDefault,
    setDefault,
    addDefault,
    removeDef,
  } from "./localStorage";

//sanitizes input from form
export const sanitizeInput = (input) =>  {
    return input.replace(/[&<>"']/g, function (match) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[match];
    });
  }

  //saves default movies to local storage
  const saveDefault = async () => {
    const jMovies = defaultMov;
    localStorage.removeItem("default");
    for (const movie of jMovies) {
      const apiKey = "191759f3";
      let url = `http://www.omdbapi.com/?apikey=${apiKey}&&t=${movie.title}`;
      const response = await fetch(url);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const cardStore = {
        img: jsonResponse["Poster"],
        title: movie.title,
        critic: movie.criticScore,
        veiwer: movie.audienceScore,
        box: movie.domestic,
        genre: movie.genre,
      };
  
      addDefault(cardStore);
    }
  };

  //renders default movies
  const renderDef = async (critic, viewer, box, genre, img ) => {
    if (!getDefault()) {
      const def = await saveDefault();
      console.log(def);
    }
  
    const defaultSaved = localStorage.getItem("default");
    const defaults = getDefault();
    console.log(defaults);
    defaults.forEach((card) => {
      return (
      <div key={title} className={doneLoading && ' card loaded'}
       onDoubleClick={() => {
        removeDef(title);
        console.log("done")
       }}
      >
        <div class='cardInfo'>
      <p class='titleVal' style='font-weight:bold; padding-top: 5px'>${
        card.title
      }</p>
      <p class='criticVal'>Critic-score: {critic}%</p>
      <p class='veiwerVal'>Viewer-score: ${viewer}%</p>
      <p class='boxVal'>Box-Office: ${
        box
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
          .split(".")[0]
      }</p>
      <p class='genreVal'>Genre:    ${genre}</p>
      </div>
  
      <img src = ${img} width='100%' height='100%' class='cardPicture'></img>
      </div>
      );
      // console.log(movieCard);
      // console.log(movieCard)
    });
  };



  //get movie data from api
  export const getMovie = async () => {
    const apiKey = "191759f3";
    let url = `http://www.omdbapi.com/?apikey=${apiKey}&&t=${titleData}`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    if (jsonResponse["Response"] === "True") {
      const img = jsonResponse["Poster"];
      localStorage.setItem(`Image`, img);
      if (jsonResponse["Title"]) {
        setTitle(jsonResponse["Title"]);
      }
      if (jsonResponse["Ratings"].length > 1) {
        setCriticScore(jsonResponse["Ratings"][1][
          "Value"
        ].replace(/%/g, ""));
      setViewerScore(parseFloat(
          jsonResponse["Ratings"][0]["Value"].split("/")[0] * 10
        ));
      } else {
        setCriticScore(null);
        setViewerScore(null)
      }
  
      if (jsonResponse["BoxOffice"] !== "N/A") {
        setBoxOffice(jsonResponse["BoxOffice"]);
      } else {
        setBoxOffice(null);
      }
    } else {
      localStorage.setItem(
        `Image`,
        "https://viterbi-web.usc.edu/~zexunyao/itp301/Assignment_07/img.jpeg"
      );
      //to do:  if movie not found, set form display to none, display message on top of form div for a few seconds
        const message = "Movie not found. Check spelling or insert your own data";
    }
}