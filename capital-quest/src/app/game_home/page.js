"use client"
import { Button, Typography, LinearProgress } from "@mui/material";
import Image from "next/image";
import React, { useState } from 'react';
import Link from "next/link";

export default function game_home() {

  const [progress, setProgress] = useState(0);

  const handleClick = (label) => {
    //alert(`Clicked on ${label}`);   # This sends a message after the click, disable for now but could be useful later
    setProgress(prevProgress => Math.min(prevProgress + 20, 100));
  };

  return (
    <div className="grad flex min-h-screen flex-col items-center justify-between p-4 md:p-8 p-auto pt-20 px-8">
      <Typography variant="h3" style={{ color: 'white', fontWeight: 'bold', marginBottom: '16px', paddingTop: '16px' }}>Progress</Typography>

      {/* Progress Bar */}
      <div className="w-full mt-4 mb-8 px-8">
      <LinearProgress variant="determinate" value={progress} sx={{ height: '60px', borderRadius: '30px','& .MuiLinearProgress-bar':{backgroundColor: 'red',}, }} />
      </div>

      {/* Container for circles and lines */}
      <div className="relative w-full max-w-screen-lg" style={{ height: '600px' }}>
        {/* Circle 1 */}
        <Button variant="contained" 
          className="w-circle-lg h-circle-lg rounded-full bg-blue-900 flex items-center justify-center absolute"
          style={{ right: '14%', top: '0%', zIndex: 2 }}
          onClick={() => handleClick('Debit')}
        >
          <span className="text-white font-bold">Debit</span>
        </Button>

        {/* Line 1 */}
        <div
          className="absolute bg-blue-300"
          style={{
            width: 'calc(70% - 100px)',
            height: '50px',
            top: '18%',
            left: 'calc(10% + 100px)',
            right: 'calc(15% + 100px)',
            transform: 'rotate(160deg)',
            zIndex: 1
          }}
        ></div>

        {/* Circle 2 */}
        <Link href="/savings" passHref>
        <Button variant="contained" 
          className="w-circle-lg h-circle-lg rounded-full bg-blue-900 flex items-center justify-center absolute"
          style={{ left: '10%', top: '20%', zIndex: 2 }}
          onClick={() => handleClick('Savings')}
        >
          <span className="text-white font-bold">Savings</span>
        </Button>
        </Link>

        {/* Line 2 */}
        <div
          className="absolute bg-blue-300"
          style={{
            width: 'calc(70% - 100px)',
            height: '50px',
            top: '44%',
            left: 'calc(18% + 75px)',
            right: 'calc(17% + 100px)',
            transform: 'rotate(-155deg)'
          }}
        ></div>

        {/* Circle 3 */}
        <Link href="/credit" passHref>
        <Button variant="contained" 
          className="w-circle-lg h-circle-lg rounded-full bg-blue-900 flex items-center justify-center absolute"
          style={{ left: '10%', top: '70%', zIndex: 2 }}
          onClick={() => handleClick('Credit')}
        >
          <span className="text-white font-bold">Credit</span>
        </Button>
        </Link>

        {/* Line 4 */}
        <div
          className="absolute bg-blue-300"
          style={{
            width: 'calc(68% - 100px)',
            height: '50px',
            top: '100%',
            left: 'calc(15% + 100px)',
            transform: 'rotate(-160deg)'
          }}
        ></div>

        {/* Circle 4 */}
        <Button variant="contained"
          className="w-circle-lg h-circle-lg rounded-full bg-blue-900 flex items-center justify-center absolute"
          style={{ right: '15%', top: '43%', zIndex: 2 }}
          onClick={() => handleClick('Taxes')}
        >
          <span className="text-white font-bold">Taxes</span>
        </Button>

        {/* Line 3 */}
        <div
          className="absolute bg-blue-300"
          style={{
            width: 'calc(70% - 100px)',
            height: '50px',
            top: '70%',
            left: 'calc(15% + 100px)',
            right: 'calc(10% + 100px)',
            transform: 'rotate(155deg)'
          }}
        ></div>

        {/* Circle 5 */}
        <Button variant="contained" 
          className="w-circle-lg h-circle-lg rounded-full bg-blue-900 flex items-center justify-center absolute"
          style={{ right: '15%', top: '90%' }}
          onClick={() => handleClick('Investing')}
        >
          <span className="text-white font-bold">Investing</span>
        </Button>
      </div>

      <div className="flex justify-center mt-auto">
        <Image src="/capital quest outlined logo.png" width={200} height={200} alt="Capital One outlined logo" />
      </div>
    </div>
  );
}