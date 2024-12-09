import React, { useState, useEffect } from "react";
import './WalletAccounts.css';

const WalletAccounts = () => {
    const [wallets, setWallets] = useState([]);

    // Example data fetching function (you can replace this with actual API call)
    const fetchWalletAccounts = async () => {
        // Simulate API call
        const data = [
            { id: 1, name: "Personal Wallet", balance: 1000, currency: "USD" },
            { id: 2, name: "Business Wallet", balance: 5000, currency: "USD" },
            { id: 3, name: "Savings Wallet", balance: 7500, currency: "EUR" }
        ];
        setWallets(data);
    };

    useEffect(() => {
        fetchWalletAccounts();
    }, []);

    return (
        <div className="wallet-accounts">
            <h2>Wallet Accounts</h2>
            <ul>
                {wallets.map(wallet => (
                    <li key={wallet.id} className="wallet-item">
                        <div className="wallet-name">{wallet.name}</div>
                        <div className="wallet-balance">{wallet.balance} {wallet.currency}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WalletAccounts;