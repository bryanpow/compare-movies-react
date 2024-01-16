import React, {useEffect, useState, useRef} from 'react'
import Aos from 'aos';
import { initializeChart } from '../../charts';
import NavBar from './NavBar';
import Footer from './Footer';
import 'aos/dist/aos.css'

function ChartPage() {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const scatterChartRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [barChart, setBarChart] = useState(null);
  const [pieChart, setPieChart] = useState(null);
  const [scatterChart, setScatterChart] = useState(null);

  useEffect(() => {
    
        if (!isInitialized) {
            initializeChart(barChartRef, pieChartRef, scatterChartRef, setBarChart, setPieChart, setScatterChart);
          setIsInitialized(true);
          console.log('created')
        }
    
 
  }, [isInitialized]);
  useEffect(() => {
    Aos.init()
    window.addEventListener("resize", function () {
        location.reload();
      });

      return () => {
        window.removeEventListener("resize", function () {
            location.reload();
          });
      }
      
  }, [])
  return (
    <div>
        <NavBar color='dark' />
        <div  id="container" style={{scrollSnapType:'y mandatory', display: 'flex'}}>
                <div  id="top"style={{scrollSnapAlign: 'start'}} >
                    <canvas data-aos='fade-up' ref={barChartRef}   id="bar"></canvas>
                </div>
                <div id="s" style={{scrollSnapAlign: 'start'}}>
                    <canvas data-aos='fade-up' ref={scatterChartRef}  id="scatter"></canvas>
                </div>
                <div id="p" style={{scrollSnapAlign: 'start'}}>
                    <canvas data-aos='fade-up' ref={pieChartRef}  id="pie"></canvas>
                </div>
               
        </div>
        <Footer />
          </div>

  )
}

export default ChartPage