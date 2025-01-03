import faker from '@faker-js/faker'
import { 
  ArcElement, 
  CategoryScale, 
  Chart as Chartjs, 
  Legend, 
  LinearScale, 
  LineElement, 
  PointElement, 
  Title, 
  Tooltip 
} from 'chart.js'
import React, { useEffect, useState } from 'react'
import { Line, Pie } from 'react-chartjs-2'
import Counter from ./components/Counter.js'
import './Home.css'



const Home = (props) => {

  Chartjs.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale, ArcElement);

  const [chartData1, setChartData1] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Complated',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Uncomplated',
        data: [],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  });
  
  
  
  const [chartData2,  setChartData2] = useState({
    labels: ['<= 3 Km', '3-5 Km', '5-10 Km', '10-15 Km', '15-20 Km', '20-25 Km', '> 25 Km'] ,
    datasets: [
      {
        label: 'Trips on last 28 days',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  });

  let [state, setState] = useState({});

  let [options, setOptions] = useState({
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: { drawOnChartArea: false },
      },
    },
  });

  useEffect(()=>{

  try {
    const response = await fetch('/admin', {
      method: 'GET', // Ensure method is capitalized as 'GET'
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      // If not, throw an error with response status
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Update state with the response data
    setState((prevState) => ({
      ...prevState,
      userCount: data.userCount,
      ordersCount: data.ordersCount,
    }));
    
    console.log("Data fetched successfully:", data);
  } catch (error) {
    // Catch any errors during fetch or processing the response
    console.error("An error occurred while fetching the data:", error);
    // Optionally, you can set error state to display messages to the user
    setState((prevState) => ({
      ...prevState,
      error: error.message, // Store error message in state if needed
    }));
  }

    
  },[]);

  return (
    <div className='content'>
      <div className='content-main'>
        <div className='counters'>
          <Counter color="" title="" count=1000 />
          <Counter color="" title="" count=1000 />
          <Counter color="" title="" count=1000 />
          <Counter color="" title="" count=1000 />
        </div>
        <div className='trip-charts'>
          <div className='chart'>
            <div className='title'>Trips</div>
            <hr />
            <Line data={data} options={options} />
          </div>
          <div className='chart'>
            <div className='title'>Users</div>
            <hr />
            <Line data={data} options={options} />
          </div>
          <div className='chart'>
            <div className='title'>Users</div>
            <hr />
            <Line data={data} options={options} />
          </div>
          <div className='chart'>
            <div className='title'>Users</div>
            <hr />
            <Line data={data} options={options} />
          </div>
        </div>
        <div className='trips-desc-pie'>
          <Pie data={data2} />
        </div>

      </div>
    </div>
  )
}

export default Home
