import React from 'react'
import Graph from './Graph';
import Assets from './Assets';
import Recieved from "../../assets/receive.png";
import MetamaskImg from "../../assets/MetaMask_Fox.svg.png";
import send from "../../assets/send.png";
import './Dashboard.css';
import Metamask from './Metamask';
import { useState,useEffect  } from "react";

const Dashboard = () => {

  const [bitcoinData, setBitcoinData] = useState([]);
  const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  //use useeffect hook to get data on the component load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBitcoinData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='conatiner'>
      <h2 style={{color:"white"}}>Hello, Jake 👋</h2>
      <h3 style={{fontSize:"18px", color:"white"}}>Welcome to <span><a href='https://carboncell.io/' style={{textDecoration:"none", color:"#7cb43f"}}>Carbon Cell</a></span></h3>
      <div className="upperConatiner">
      <div className="graphContainer">
        <Graph />
        </div>
        <div className="nftConatiner">
          <div className="transaction">
            <div className="title">
            <h4>Recent Transactions</h4>
            <a href='#' style={{color:"#277541"}}>view more</a>
            </div>
            <div className="lists">
              <ul>
                <li>
                  <div className="listdiv">
                    <div className='images'><img src={Recieved} alt='received' 
                    width={25}></img></div>
                    <div className="text">
                      <h4>Recevied</h4><br></br>
                      <p>12:30:20 | 01 April 2024</p>
                    </div>
                    <div className="value">
                      <p>145.678 ETH</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="listdiv">
                    <div className='images'><img src={Recieved} alt='received' 
                    width={25}></img></div>
                    <div className="text">
                      <h4>Recevied</h4><br></br>
                      <p>07:00:20 | 20 March 2024</p>
                    </div>
                    <div className="value">
                      <p>145.678 ETH</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="listdiv">
                    <div className='images'><img src={send} alt='received' 
                    width={25}></img></div>
                    <div className="text">
                      <h4>Transferred</h4><br></br>
                      <p>02:30:20 | 10 March 2024</p>
                    </div>
                    <div className="value">
                      <p>145.678 ETH</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="topBitCoins"></div>
        </div>
      </div>
      <div className="lowerContainer">
        <div className="assetConatiner">
          <Assets data={bitcoinData} />
        </div>
        <div className="metamask">
          <div className="title">
            <h3>Connect your Metamask wallet</h3>
            <img src={MetamaskImg} alt='metamask' 
            width={50} height={50}/>
            <br></br>
            <Metamask />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard