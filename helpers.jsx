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
import { updateLocalStorageMovies } from "./src/Components/App";

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
  export const saveDefault = async (data) => {

      const jMovies = data;
      localStorage.removeItem("default");
      for (const movie of jMovies) {
        const apiKey = import.meta.env.VITE_API_KEY;
        let url = `https://www.omdbapi.com/?apikey=${apiKey}&&t=${movie.title}`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log(jsonResponse)
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
  export const renderDef = async (data) => {
    if (!getDefault()) {
      const def = await saveDefault(data);
      console.log(def);
    }
  
    const defaults = getDefault();
    console.log(defaults);
   return defaults.map((card) => {
      return (
      <div key={card.title} className='card loaded'
       onDoubleClick={() => {
        removeDef(card.title);
        console.log("done")
       }}
      >
        <div className='cardInfo'>
      <p className='titleVal' style={{fontWeight:'bold', paddingTop: '5px'}}>{card.title}</p>
      <p className='criticVal'>Critic-score: {card.critic}%</p>
      <p className='veiwerVal'>Viewer-score: {card.veiwer}%</p>
      <p className='boxVal'>Box-Office: {
        card.box
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
          .split(".")[0]
      }</p>
      <p className='genreVal'>Genre:    ${card.genre}</p>
      </div>
  
      <img src = {card.img} width='100%' height='100%' class='cardPicture'></img>
      </div>
      );
      // console.log(movieCard);
      // console.log(movieCard)
    });
  };



  //Search for movie data using api
  export const  getMovie = async (titleData) => {
    let title = null;
    let critic = null;
    let viewer = null;
    let box = null;
    let genre = null;
    let img = null;
    let placeHolder = true
    const apiKey = import.meta.env.VITE_API_KEY;
    let url = `https://www.omdbapi.com/?apikey=${apiKey}&&t=${titleData}`;
  
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      if (jsonResponse["Response"] === "True") {
        img = jsonResponse["Poster"] || "https://viterbi-web.usc.edu/~zexunyao/itp301/Assignment_07/img.jpeg"; 
        title = jsonResponse["Title"];
  
        if (jsonResponse["Ratings"].length > 1) {
          critic = jsonResponse["Ratings"][1]["Value"].replace(/%/g, "");
          viewer = parseFloat(jsonResponse["Ratings"][0]["Value"].split("/")[0] * 10);
        }
  
        if (jsonResponse["BoxOffice"] !== "N/A") {
          box = jsonResponse["BoxOffice"];
        }
  
      } else {
        img = "https://viterbi-web.usc.edu/~zexunyao/itp301/Assignment_07/img.jpeg";
        placeHolder= false
        
      }
    } catch (error) {
      console.error("Fetching movie data failed:", error);
    }
  
    return { title, critic, viewer, box, genre, img, placeHolder };
  };


  //adds new movie to list
  export const addMovie =  (card) => {
    const handleDelete  = () => {
      removeCard(card.title);
      removeDef(card.title)
      updateLocalStorageMovies()
    }
    return (
      <div onDoubleClick={() => handleDelete()} key={card.title}  className='card loaded'>
      <div  className='cardInfo'>
      <p className='titleVal' style={{fontWeight:'bold', paddingTop: '5px'}}>{card.title}</p>
      <p className='criticVal'>Critic-score: {card.critic}%</p>
      <p className='veiwerVal'>Viewer-score: {card.veiwer}%</p>
      <p className='boxVal'>Box-Office: {
        card.box
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
          .split(".")[0]
      }</p>
      <p className='genreVal'>Genre:    {card.genre}</p>
      </div>
  
      <img src = {card.img} width='100%' height='100%' className='cardPicture'></img>
      </div>
      );
   
  }