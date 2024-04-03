import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {

  const [populationData, setPopulationData] = useState([]);
  const chartRef = useRef(null);
  
  //use useeffect hook to get data on the component load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPopulationData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (populationData.length === 0) return;

    const labels = populationData.map(entry => entry.Year);
    const populationValues = populationData.map(entry => entry.Population);

    const ctx = document.getElementById('population-chart');
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Population',
            data: populationValues,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            // backgroundColor: '#7cb43f',
           // borderColor:'#277541',
            borderWidth: 2,
            borderColor:'#7cb43f',            
          },
        ],
      },
      options: {
        aspectRatio: 0.8,
        maintainAspectRatio: false,
        responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Population Over the Years',
        },

        legend: {
          display: true,
          position: 'top',
          labels: {
            font: {
                size: 16,
            }
        }
        },
        
      },
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year', 
          },
        },
        y: {
          title: {
            display: true,
            text: 'Population', // Title for the Y-axis
          },
          beginAtZero: true,
        },
      },
    },      
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [populationData]);

  return <canvas id="population-chart" ></canvas>;
}

export default Graph