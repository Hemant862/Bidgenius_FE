import React, { useState } from 'react';
import axios from 'axios';

const AuctionDetailsByDateRange = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [auctions, setAuctions] = useState([]);

    const handleFetchAuctions = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/auction/details-by-date/', {
            params: {
                start_date: startDate,
                end_date: endDate,
            },
        });

        setAuctions(response.data);
    };

    return (
        <div>
            <br />
            <center>
                <h1>Auction Details by Date Range</h1>
            </center>
            <div style={{ margin: '20px 0' }}>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    placeholder="Start Date"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    placeholder="End Date"
                    style={{ marginLeft: '10px' }}
                />
                <button onClick={handleFetchAuctions} style={{ marginLeft: '10px' }}>
                    Search 
                </button>
            </div>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Auction ID</th>
                        <th>Auction Date</th>
                        <th>Auction Start Time</th>
                        <th>Auction End Time</th>
                        <th>Increment Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {auctions.map((auction) => (
                        <tr key={auction.auction_id}>
                            <td>{auction.product}</td>
                            <td>{auction.auction_id}</td>
                            <td>{auction.auction_date}</td>
                            <td>{auction.auction_start_time}</td>
                            <td>{auction.auction_end_time}</td>
                            <td>{auction.increment_amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuctionDetailsByDateRange;
