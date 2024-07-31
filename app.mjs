import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Mock data for demonstration purposes
const transactions = [
    {
        "uuid": "6a215905-cbde-4ef5-afb9-0568dde32449",
        "network": "Solana",
        "fee": 5000,
        "compute_units_consumed": 150,
        "timestamp": "2024-07-23T09:29:14.000Z",
        "type": "send_token",
        "wallet_address": "4UYjrT5hmMTh9pLFg1Mxh49besnAeCc23qFoZc6WnQkK",
        "transaction_hash": "3ShMAXvJczacB1ALpBUdCAbx9FNdoMeAkurH2ePyLQ5t1HwYPi9iUdyn7rhoUogNzbsSdKkJWAZ16kbGSWWJfQTB",
        "metadata": {
            "amount": "-6000"
        },
        "token": {
            "uuid": "429031ba-fd82-4e95-92b2-9da0bf75f184",
            "network": "Solana",
            "contract_address": "So11111111111111111111111111111111111111112",
            "name": "Wrapped SOL",
            "symbol": "SOL",
            "decimals": 9,
            "display_decimals": 2,
            "logo_url": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
        },
        "explorer_url": "https://solscan.io/tx/3ShMAXvJczacB1ALpBUdCAbx9FNdoMeAkurH2ePyLQ5t1HwYPi9iUdyn7rhoUogNzbsSdKkJWAZ16kbGSWWJfQTB?cluster=mainnet-beta"
    },
    // Add more mock transactions as needed
];

// Define the GET API endpoint
app.get('/api/transactions/:walletAddress', (req, res) => {
    const { walletAddress } = req.params;

    // Filter transactions for the given wallet address
    const walletTransactions = transactions.filter(tx => tx.wallet_address === walletAddress);

    if (walletTransactions.length > 0) {
        res.json({
            status: "success",
            message: "Activity retrieved successfully",
            data: walletTransactions
        });
    } else {
        res.json({
            status: "success",
            message: "No transactions found for this wallet address",
            data: []
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});