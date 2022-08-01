import React, { Component } from 'react'
import './TransactionHome.css'

const data = [
    {
        id: 91982,
        date: "22-03-12 18:23:34",
        id2: "T23x8iuet78",
        type: "FEE",
        quantity: 389,
        SrcAcc: "68789 (amin omer)",
        DistAcc: "76876 (ameena mohammed)",
    },
    {
        id: 91982,
        date: "22-03-12 18:23:34",
        id2: "T23x8iuet78",
        type: "FEE",
        SrcAcc: "68789 (amin omer)",
        DistAcc: "76876 (ameena mohammed)",
    },
    {
        id: 91982,
        date: "22-03-12 18:23:34",
        id2: "T23x8iuet78",
        type: "FEE",
        quantity: 389,
        SrcAcc: "68789 (amin omer)",
        DistAcc: "76876 (ameena mohammed)",
    },
    {
        id: 91982,
        date: "22-03-12 18:23:34",
        id2: "T23x8iuet78",
        type: "FEE",
        quantity: 389,
        SrcAcc: "68789 (amin omer)",
        DistAcc: "76876 (ameena mohammed)",
    },
    {
        id: 91982,
        date: "22-03-12 18:23:34",
        id2: "T23x8iuet78",
        type: "FEE",
        quantity: 389,
        SrcAcc: "68789 (amin omer)",
        DistAcc: "76876 (ameena mohammed)",
    },
    {
        id: 91982,
        date: "22-03-12 18:23:34",
        id2: "T23x8iuet78",
        type: "FEE",
        quantity: 389,
        SrcAcc: "68789 (amin omer)",
        DistAcc: "76876 (ameena mohammed)",
    },
    {
        id: 91982,
        date: "22-03-12 18:23:34",
        id2: "T23x8iuet78",
        type: "FEE",
        quantity: 389,
        SrcAcc: "68789 (amin omer)",
        DistAcc: "76876 (ameena mohammed)",
    },
    {
        id: 91982,
        date: "22-03-12 18:23:34",
        id2: "T23x8iuet78",
        type: "FEE",
        quantity: 389,
        SrcAcc: "68789 (amin omer)",
        DistAcc: "76876 (ameena mohammed)",
    },
];

export class TransactionHome extends Component {
  render() {
    return (
        <div className='content'>
        <SideBar />
        <div className='content-main'>
            <div className='filter'>
                <div className='filter-title'>Filter:</div>
                <div className='filter-btns-container'>
                    <div className='filter-btns-warpper'>
                        <button className='filter-btn'>All</button>
                        <button className='filter-btn'>This Week</button>
                        <button className='filter-btn'>This Month</button>
                    </div>
                    <div className='filter-btns-warpper'>
                        <button className='filter-btn'>50</button>
                        <button className='filter-btn'>100</button>
                        <button className='filter-btn'>250</button>
                    </div>
                </div>
                <hr></hr>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>ID</th>
                        <th scope='col'>Type</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Src Acc</th>
                        <th scope='col'>Dist Acc</th>
                    </tr>
                </thead>
        
                <tbody>
                    {data.map((d) => {
                        return (
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.date}</td>
                                <td>{d.id2}</td>
                                <td>{d.type}</td>
                                <td>{d.quantity}</td>
                                <td>{d.SrcAcc}</td>
                                <td>{d.DistAcc}</td>
                            </tr>
                        )
                    })}
                </tbody>
        
            </table>
        </div>
    </div>
    )
  }
}

export default TransactionHome