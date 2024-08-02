import { Button, Typography } from "@mui/material";
import React from 'react';
import Header from '@/components/Header';

const Credit = () => {
  return (
    <div style={{backgroundImage:"linear-gradient(#D03027, #FFFFFF)"}}>
      <Header/>
      <div class="min-h-screen">
      <div className="header">
      <Typography variant="h1" style={{ color: 'white', marginTop: '20px' }}>
                    Credit
                </Typography>
      </div>
      <div className="card-section">
        <div className="credit-card">
          <span className= "credit-card-text">Credit Card</span>
          <img src="/capital quest outlined logo.png" alt="Capital Quest Logo" className="logo-bottom-right"/>
          </div>
          <div className="challenge-container">
            <div className="challenge">
              <p>CHALLENGE</p>
              <p>Can missing a credit card payment negatively impact your credit score?</p>
                <button>YES</button>
                <button>NO</button>
                
        </div>
        <div className="challenge">
          <p>CHALLENGE</p>
          <p>Can exceeding your credit card limit result in additional fees?</p>
          <button>YES</button>
          <button>NO</button>
        </div>
      </div>
      </div>
      <div className="mini-game">
        <h2>MINI GAME</h2>
        <p>CURRENT BALANCE: $500</p>
        <p>LIMIT: $1000</p>
        <button>PAY</button>
        <button>SPEND</button>
      </div>
      <button className="resources-button">Resources</button>
    </div>
    </div>
  );
}

export default Credit;