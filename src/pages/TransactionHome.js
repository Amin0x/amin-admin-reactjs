import React, { Component } from 'react'
import './TransactionHome.css'

class TransactionHome extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          transactions: [],
      }
    }

    componentDidMount(){
        fetch('http://localhost:8080/admin/transactions')
        .then(resp => {
            if(resp.ok){
                return resp.json();
            }

            throw '' ;
        })
        .then(data => {
            console.log(data);
            this.setState({transactions: data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className='content'>
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
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Src Acc</th>
                            <th scope='col'>Dist Acc</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Type</th>
                        </tr>
                    </thead>
            
                    <tbody>
                        {this.state.transactions.map((d) => {
                            return (
                                <tr key={d.id}>
                                    <td>{d.id}</td>
                                    <td>{d.amount}</td>
                                    <td>{d.fromAccount}</td>
                                    <td>{d.toAccount}</td>
                                    <td>{d.createdAt}</td>
                                    <td>{d.type}</td>
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