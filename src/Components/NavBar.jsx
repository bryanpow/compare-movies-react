import Aos from 'aos'
import React, {useEffect, useState} from 'react'
import { signal, effect} from "@preact/signals-react";
import { Link } from 'react-router-dom'
import { fetchDefault, updateLocalStorageMovies } from './App'
import { loading } from './App';

function NavBar({settings, color, sources}) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileSettings, setMobileSettings] = useState(false)
    const [drop, setDrop] = useState('fadeAway')
    const handleDropdown = () => { 
        if (drop === 'fadeAwayActive') {
            setDrop('fadeAway')
        } else if (drop === 'fadeAway') {
            setDrop('fadeAwayActive')
        }
    }
    const userList = (e) => {
        e.stopPropagation();
        loading.value = true
        localStorage.removeItem('default');
        updateLocalStorageMovies()
        setTimeout(() => {
            loading.value = false
        }, 500)
    }
    const allMovies = (e) => {
        e.stopPropagation();
        localStorage.removeItem('default')
        fetchDefault()
    }
    const defaultMovies = () => {
        
        localStorage.removeItem('cards');
        localStorage.removeItem('default')
        fetchDefault();
    }
    
    const handleMobileDrop = () => {
        mobileOpen === false? setMobileOpen(true): setMobileOpen(false)
    }

    const handleMobileSettings = () => {
        mobileSettings === false? setMobileSettings(true) : setMobileSettings(false)
    }
 if(color === 'light') {
    return (
        <div>
            <header className='navChart'>
                      <Link to='/'>
                      <div
                          
                          id="logo"
                          style={{ display: "flex", alignItems: "center", gap: "10px", }}
                      >
                          <img
                              id="log2"
                              src="/video-player.png"
                              alt="Logo"
                              width="40"
                              height="40" />
                          <h2 className='navChart' id="logg" style={{ fontWeight: "normal" }}>
                              MovieMetrics
                          </h2>
                      </div>
                      </Link>
                      <div id="nav">
                          <div  className={settings} id="settings"  >
                              <p onClick={() => handleDropdown()} id="se" style={{visibility: 'visible', zIndex: '10' }}  className="change">
                                    Settings
                              </p>
                              <div className={drop} >
                              <p className="change change1" onClick={(e) => userList(e)}  style={{visibility: 'visible', position: 'absolute' , transform: 'translateY(-50px)' }}> My list</p>
                              <p className='change change1' onClick={(e) => allMovies(e)} style={{ visibility: 'visible', position: 'absolute' , transform: 'translateY(-15px)', width: '100px' }}>All Movies</p>
                              <p className='change change1' onClick={(e) => defaultMovies(e)} style={{ visibility: 'visible', position: 'absolute' , transform: 'translateY(18px)', width: '200px' }}>Restore Defaults</p>
                              </div>
                              
                          </div>
    
                          <div id="pop">
                              <p id="dro" onClick={handleMobileDrop} style={{ fontSize: "50px" }}>
                                  ☰
                              </p>
                              <div id="aa" class={mobileOpen && 'active'}>
                                  <div className="let">
                                    <Link to='/Movies'>
                                      <p id="ho" className="gr change">
                                          Movies
                                      </p>
                                      </Link>
                                  </div>
                                  <div className="let">
                                    <Link to='/Charts'>
                                      <p id="char" className="gr change">
                                          Charts
                                      </p>
                                      </Link>
                                  </div>
                                  <a href='#br' id="source">
                                      <p className="gr change">Sources</p>
                                  </a>
                                  {settings !== 'nonActive' && 
                                         <p
                                         className='change'
                                         id="sett"
                                         
                                         onClick={handleMobileSettings}
                                        
                                     >
                                         Settings
                                     </p>
                                  }
                                 
                                  <p id="clearDef2" className={mobileSettings && 'active2'} style={{ fontSize: "20px", }}>
                                      My List
                                  </p>
                                  <p id="restoreDefault2" className={mobileSettings && 'active2'} style={{ fontSize: "20px" }}>
                                      Restore Defaults
                                  </p>
                              </div>
                          </div>
                      </div>
                  </header>
        </div>
      )
 } else {
    return (
        <div style={{background: '#121212', width: '100%', }}>
            <header className='navChart' >
                      <Link to='/'>
                      <div
                          
                          id="logo"
                          style={{ display: "flex", alignItems: "center", gap: "10px", }}
                      >
                          <img
                              id="log2"
                              src="/public/White-log.png"
                              alt="Logo"
                              width="40"
                              height="40" />
                          <h2 className='navChart' id="logg" style={{ fontWeight: "normal" , color: 'white'}}>
                              MovieMetrics
                          </h2>
                      </div>
                      </Link>
                      <div id="nav">
    
                          <div id="pop">
                              <p id="dro" onClick={handleMobileDrop} style={{ fontSize: "50px", color: 'white' }}>
                                  ☰
                              </p>
                              <div id="aa" style={{color: 'black'}} class={mobileOpen && 'active'}>
                                  <div className="let">
                                    <Link to='/Movies'>
                                      <p id="ho1" className="gr change dark" >
                                          Movies
                                      </p>
                                      </Link>
                                  </div>
                                  <div className="let" >
                                    <Link to='/Charts'>
                                      <p id="char1"  className="gr change dark">
                                          Charts
                                      </p>
                                      </Link>
                                  </div>
                                  <a href='#br' id="source">
                                      <p  id='src1' className="gr change dark"  >Sources</p>
                                  </a>
                                  
                                  <p id="clearDef2" style={{ fontSize: "20px", }}>
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
}

export default NavBar