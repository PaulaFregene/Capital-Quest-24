'use client'

import React, { useState, useEffect } from 'react';
import BalanceManager from './BalanceManager';
import DividendUpdater from './DividendUpdater';

function Parent() {
    const [balance, setBalance] = useState(0);
    const [ytdDividend, setYtdDividend] = useState(0);

    // Update the balance and YTD dividend every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setBalance(prevBalance => {
                const newBalance = prevBalance * 1.0417; // Increase balance by 4.17%
                setYtdDividend(prevDividend => prevDividend + (newBalance - prevBalance)); // Update YTD dividend
                return newBalance;
            });
        }, 2500); // 2.5 seconds

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
        <div className="App">
            <BalanceManager balance={balance} setBalance={setBalance} />
            <DividendUpdater balance={balance} ytdDividend={ytdDividend} />
        </div>
    );
}

export default Parent;