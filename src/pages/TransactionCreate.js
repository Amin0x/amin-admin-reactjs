import { data } from 'autoprefixer';
import React, { useState } from 'react'

export default function TransactionCreate() {

  let [from, setFrom] = useState('');
  let [destination, setDestination] = useState('');
  let [quatity, setQatity] = useState(0);

  function createTransaction(e){
    e.preventDefault();
    
    fetch({
      url: 'http://localhost/admin/transaction',
      method: 'POST',
      body: JSON.stringify({
        from: from,
        to: destination,
        quntity: quatity,
      }),
      headers: {"content-type": 'application/json'}
    }).then(response => {
      if(response.status == 200){
        return response.json();
      }
    }).then(data =>{

    })
  }

  return (
    <div>
      <div className='mb-2'>
        <p><label htmlFor=''>from account</label></p>
        <input id='' type={'text'} />
      </div>
      <div className='mb-2'>
        <p><label htmlFor=''>to account</label></p>
        <input id='' type={'text'} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div className='mb-2'>
        <p><label htmlFor=''>Quantity</label></p>
        <input id='' type={'text'} onChange={(e) => setDestination(e.target.value)}/>
      </div>
      <div><button type='submit' onClick={(e) => createTransaction(e)}>Submit</button></div>
    </div>
  )
}
