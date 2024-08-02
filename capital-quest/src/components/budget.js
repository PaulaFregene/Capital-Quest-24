'use client'
import React from 'react';

function BalanceManager({ balance, setBalance }) {
    const increaseBalance = () => {
        setBalance(prevBalance => prevBalance + 1);
    };

    const decreaseBalance = () => {
        setBalance(prevBalance => prevBalance - 1);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex gap-4">
                <button
                    onClick={decreaseBalance}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    -
                </button>
                <h1 className="text-2xl font-bold mb-4">Balance: ${balance.toFixed(2)}</h1>
                <button
                    onClick={increaseBalance}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default BalanceManager;
