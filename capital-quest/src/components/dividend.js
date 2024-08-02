'use client'
import React from 'react';

function DividendUpdater({ balance, ytdDividend }) {
    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-xl font-bold mb-4">YTD Dividend: ${ytdDividend.toFixed(2)}</h2>
            <h3 className="text-lg">Current Balance: ${balance.toFixed(2)}</h3>
        </div>
    );
}

export default DividendUpdater;