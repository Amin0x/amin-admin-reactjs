import React, { useEffect, useState } from 'react'
import './OrdersHome.css'

function OrdersHome() {
    
    let [state, setState] = useState({
        orders: [],
        page: 0,
        sort:0,
        changed: false,
    });
    
    useEffect(() => {
        fetch('http://localhost:8080/admin/orders?page=' + state.page, {method: 'GET', headers: {'Accept': 'application/json'},})
        .then(resp => {
            if(resp.ok){
                return resp.json();
            }

            throw 'something went wrong try again';
        })
        .then(data => {
            console.log(data);
            setState({...state, orders: data});
        })
        .catch(error => {
            console.log(error);
        });
    }, [state.page]);

    return (
        <div className='content'>
            <div className='content-main'>
                <div className='filter mb-4'>
                    <div className='filter-title'>Filter:</div>
                    <div className='filter-btns-container'>
                        <div className='filter-btns-warpper'>
                            <button className='filter-btn mr-3 text-sm'>All</button>
                            <button className='filter-btn mr-3 text-sm'>Today</button>
                            <button className='filter-btn mr-3 text-sm'>This Week</button>
                            <button className='filter-btn mr-3 text-sm'>This Month</button>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className='mb-4 text-gray-800 text-sm'>
                <select className="mr-3 px-4 py-2">
                    <option>Registeration Date</option>
                    <option>User Name</option>
                    <option>Orders Counts</option>
                    <option>Points Counts</option>
                    <option>Name</option>
                </select>
                <select className="mr-3 px-4 py-2">
                    <option>ASD</option>
                    <option>DES</option>
                </select>
                <button className='text-gray-300'>update</button>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>{'Class'}</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Src Location</th>
                            <th scope='col'>Src Adress</th>
                            <th scope='col'>Dist Location</th>
                            <th scope='col'>Dist Adress</th>
                            <th scope='col'>Distance</th>
                            <th scope='col'>Ac</th>
                            <th scope='col'>Water</th>
                            <th scope='col'>Bankek</th>
                            <th scope='col'>Charger</th>
                            <th scope='col'>Note</th>
                        </tr>
                    </thead>
            
            
                    <tbody>
                        {state.orders.length > 0 && state.orders.map((d) => {
                            return (
                                <tr key={d.id}>
                                    <td>{d.id}</td>
                                    <td>{d.created}</td>
                                    <td>{d.carClass}</td>
                                    <td>{d.orderType}</td>
                                    <td>{d.price}</td>
                                    <td>{d.sourceLatitude},{d.sourceLongitude}</td>
                                    <td>{d.sourceName}</td>
                                    <td>{d.destinationLatitude},{d.destinationLongitude}</td>
                                    <td>{d.destinationName}</td>
                                    <td>{d.distance}</td>
                                    <td>{d.ac}</td>
                                    <td>{d.ac}</td>
                                    <td>{d.ac}</td>
                                    <td>{d.ac}</td>
                                    <td>{d.note}</td>
                                </tr>
                            )
                        })}
                    </tbody>            
                </table>
                <div>
                    <button className='text-sm' onClick={() => setState({...state, page: state.page >= 1? state.page-1:0})}>prev</button>
                    <button className='text-sm' onClick={() => setState({...state, page: state.page+1})}>next</button>
                </div>
            </div>
        </div>
    )
}

export default OrdersHome