import React from 'react'

function NavBar() {
  return (
    <div>
        <header>
                  <div
                      id="logo"
                      style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                      <img
                          id="log2"
                          src="/public/video-player.png"
                          alt="Logo"
                          width="40"
                          height="40" />
                      <h2 id="logg" style={{ fontWeight: "normal" }}>
                          MovieMetrics
                      </h2>
                  </div>
                  <div id="nav">
                      <div id="settings">
                          <p id="se" className="change">
                              Settings ↓
                          </p>
                          <div id="op">
                              <p
                                  id="clearDef"
                                  style={{ border: "2px solid black", color: "white" }}
                              >
                                  My List
                              </p>
                              <p
                                  id="restoreDefault"
                                  style={{ border: "2px solid black", color: "white" }}
                              >
                                  Restore Defaults
                              </p>
                          </div>
                      </div>

                      <div id="pop">
                          <p id="dro" style={{ fontSize: "50px" }}>
                              ☰
                          </p>
                          <div id="aa">
                              <div className="let">
                                  <p id="ho" className="gr change">
                                      Movies
                                  </p>
                              </div>
                              <div className="let">
                                  <p id="char" className="gr change">
                                      Charts
                                  </p>
                              </div>
                              <a href="/#br" id="source">
                                  <p className="gr change">Sources</p>
                              </a>
                              <p
                                  className="change"
                                  id="sett"
                                  style={{ fontSize: "20px", textAlign: "center" }}
                              >
                                  Settings
                              </p>
                              <p id="clearDef2" style={{ fontSize: "20px" }}>
                                  My List
                              </p>
                              <p id="restoreDefault2" style={{ fontSize: "20px" }}>
                                  Restore Defaults
                              </p>
                          </div>
                      </div>
                  </div>
              </header>
    </div>
  )
}

export default NavBar