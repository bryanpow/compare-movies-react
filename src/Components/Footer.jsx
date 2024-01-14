import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Footer(aos) {
    useEffect(() => {
        AOS.init()
    }, [])
  return (
    <div>
        <footer style={{boxShadow: 'none'}} id="br">
              <div data-aos='fade-in' style={{ boxShadow: '0px -1px 0px 0px rgba(169, 169, 169, 0.05)', paddingTop: '20px'}} data-aos-duration='1000' id="border">
                  <div id="info" style={{border: 'none'}}>
                      <div data-aos="fade-in" data-aos-duration="1000" className="foot" id="comp">
                          <h3>MOVIEMETRICS</h3>
                          Explore, compare, and discover your favorite movies through
                          insightful charts and data.
                      </div>
                      <div data-aos="fade-in" data-aos-duration="1000" className="foot" id="features">
                          <h3>FEATURES</h3>
                          <p>Display</p>
                          <p>Movie Data</p>
                          <p>Charts</p>
                          <p>Comparisons</p>
                      </div>
                      <div data-aos="fade-in" data-aos-duration="1000" className="foot" id="link">
                          <h3>SOURCES</h3>
                          <a
                              className="bub"
                              id="white3"
                              href="https://www.omdbapi.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              API
                          </a>
                          <a
                              className="bub"
                              id="white"
                              href="https://storyset.com/home"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Graphic 1 (StorySet)
                          </a>
                          <a
                              className="bub"
                              id="white2"
                              href="https://www.flaticon.com/"
                              target="__blank"
                              rel="noopener noreferrer"
                          >
                              All Icons
                          </a>
                      </div>
                      <div data-aos="fade-in" data-aos-duration="1000" className="foot" id="contact">
                          <h3>CONTACT</h3>
                          <div className="con">
                              <img
                                  className="cont"
                                  style={{
                                      backgroundColor: "white",
                                      padding: "2px",
                                      borderRadius: "100%",
                                  }}
                                  src="/public/home.png"
                                  alt="Home Icon"
                                  width="20"
                                  height="20" />
                              <p>New York, U.S.</p>
                          </div>
                          <div  className="con">
                              <img
                                  className="cont"
                                  style={{
                                      backgroundColor: "white",
                                      padding: "2px",
                                      borderRadius: "100%",
                                  }}
                                  src="/public/mail.png"
                                  alt="Mail Icon"
                                  width="20"
                                  height="20" />
                              <p>RamosBusiness</p>
                          </div>
                          <div  className="con">
                              <img
                                  className="cont"
                                  style={{
                                      backgroundColor: "white",
                                      padding: "2px",
                                      borderRadius: "100%",
                                  }}
                                  src="/public/telephone.png"
                                  alt="Telephone Icon"
                                  width="20"
                                  height="20" />
                              <p>+01 347-564-3844</p>
                          </div>
                      </div>
                  </div>

                  <div  id="bot"  style={{border: 'none'}}>
                      <div   id="copy">
                          <p>©2023 Bryan Ramos</p>
                      </div>
                      <div  id="icons">
                          <a
                              href="https://www.linkedin.com/in/bryan-ramos-174826279/"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <img
                                  style={{ backgroundColor: "white", borderRadius: "100%" }}
                                  src="/public/social.png"
                                  alt="LinkedIn"
                                  width="50" />
                          </a>
                          <a 
                              href="https://github.com/bryanpow"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <img
                                  style={{
                                      backgroundColor: "white",
                                      padding: "5px",
                                      borderRadius: "100%",
                                  }}
                                  src="/public/github.png"
                                  alt="GitHub"
                                  width="35" />
                          </a>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  )
}

export default Footer