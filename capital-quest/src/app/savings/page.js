'use client'

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import './savings.css'; 
import BalanceManager from '@/components/budget';
import DividendUpdater from '@/components/dividend';

export default function Savings() {
    const [balance, setBalance] = useState(0);
    const [ytdDividend, setYtdDividend] = useState(0);
    const [months, setMonths] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBalance(prevBalance => {
                const newBalance = prevBalance * 1.0417; // Increase balance by 4.17%
                setYtdDividend(prevDividend => prevDividend + (newBalance - prevBalance)); // Update YTD dividend
                return newBalance;
            });
            setMonths(prevMonths => prevMonths + 0.1); // Increment months (0.1 month = 2.5 seconds)
        }, 2500); // 2.5 seconds

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
        <div style={{ backgroundColor: "#DCE9F1" }}>
            <Header style={{ backgroundColor: "blue" }} />
            <div className="container flex min-h-screen flex-col items-center justify-between" style={{ backgroundColor: "blue" }}>
                <h1>Savings</h1>
                <p>Instructions: <br />
                    Interest is like a reward the bank gives you for trusting them to look after your money in your savings account. 
                    The more money you have in your account, and the longer you keep it there, the more interest you can earn. <br />
                </p>
                <p>Play around with depositing and withdrawing money into your savings account 
                    and watch how it affects your savings account balance over time!
                </p>
                <div>
                    Month: {months.toFixed(1)}
                </div>
                <h2>Savings Account Balance</h2>
                <div>
                    <BalanceManager balance={balance} setBalance={setBalance} />
                    <DividendUpdater balance={balance} ytdDividend={ytdDividend} />
                </div>
                <div>
                    Placeholder
                </div>
                <div>
                    Resources Button
                </div>
            </div>
            Hello
        </div>
    );
}
