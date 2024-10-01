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
import './Home.css'



const Home = (props) => {

  Chartjs.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale, ArcElement);

  const chartLabels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const chartLabel2 = ['<= 3 Km', '3-5 Km', '5-10 Km', '10-15 Km', '15-20 Km', '20-25 Km', '> 25 Km'];

  const chartData1 = {
    labels: chartLabels1,
    datasets: [
      {
        label: 'Complated',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Uncomplated',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };
  
  
  
  const chartData2 = {
    labels: chartLabel2,
    datasets: [
      {
        label: 'Trips on last 28 days',
        data: label2.map(() => faker.datatype.number({ min: 1000000, max: 9999999 })),
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
  };

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

    const response = await fetch({
      url: '/admin',
      method: 'get'
    });

    const data = await response.json();

    if (!response.ok){
       ;
    }

    
    
      console.log(data);
      setState({...state, "userCount": data.userCount, "ordersCount": data.ordersCount});
    
    
  },[]);

  return (
    <div className='content'>
      <div className='content-main'>
        <div className='basic-info'>
          <div className='users item'>
            <p className='number'>12,290,186</p>
            <p className='desc'>Users</p>
          </div>
          <div className='orders item'>
            <p className='number'>89,736,304</p>
            <p className='desc'>Trips</p>
          </div>
          <div className='new-users item'>
            <p className='number'>9,173</p>
            <p className='desc'>New User</p>
          </div>
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
        </div>
        <div className='trips-desc-pie'>
          <Pie data={data2} />
        </div>

      </div>
    </div>
  )
}

export default Home