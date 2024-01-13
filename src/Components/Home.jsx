import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Home() {
    useEffect(() => {
        AOS.init({
            once: true
        })
    }, [])
  return (
    <div>
        <NavBar />
        <div id="landp">
              <div id="land">
                  <div id="desc">
                      <h2 id="tit2">Discover MovieMetrics</h2>
                      <p id="goto">
                          Your go-to destination for comprehensive movie analysis. Dive
                          into dynamic charts, effortlessly compare ratings and earnings,
                          and stay informed about domestic cinematic trends—all in one
                          intuitive platform.
                      </p>
                      <button
                          style={{ alignSelf: "flex-start" }}
                          className="start"
                          id="start"
                      >
                          Get Started
                      </button>
                  </div>
                  <div id="force">
                      <img
                          id="graphic"
                          src="/public/Videotape-amicoBLACK.svg"
                          alt="Graphic"
                          width="670"
                          height="700" />
                  </div>
                  <button className="start" id="start2">
                      Get Started
                  </button>
              </div>
              <div id="pos">
                  <div className="homeInfo">
                      <div className="right" data-aos="fade-right" data-aos-duration="900">
                          <h1>Movie Search and Display 🔍</h1>
                          <p>Explore the vast world of cinema with our intuitive movie search and display feature. Easily discover and retrieve automated data for popular titles. Whether you're looking for your favorite classics or the latest blockbusters, our search engine makes it a breeze to find and display detailed information for any movie.</p>
                      </div>
                  </div>
                  <div className="homeInfo">
                      <div className="right" data-aos="fade-right" data-aos-duration="900">
                          <h1>Interactive Movie Comparison Charts 📊</h1>
                          <p>Dive into the data-driven experience of our interactive movie comparison charts. Uncover insights into box office performance, ratings, and the intriguing contrast between critic and audience opinions. Visualize the data in beautifully crafted charts that allow you to compare and contrast the movies you love.</p>
                      </div>
                  </div>
                  <div className="homeInfo">
                      <div className="right" id="one" data-aos="fade-right" data-aos-duration="900">
                          <h1>Personalized Movie Insights 🎬</h1>
                          <p>Our platform empowers you to curate your own collection of movies, explore their data, and make informed decisions about your next cinematic journey. Your movie-watching experience just got a whole lot smarter.</p>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
    </div>
  )
}

export default Home
