import React, { useEffect, useState } from 'react'
import UserAsCard from './UserAsCard.js';
import axios from 'axios';

const Counsellor = () => {
    const [counsellors, setCounsellors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3500/counsellor')
        .then((response) => {
            setCounsellors(response.data); // Corrected to access response.data
        })
        .catch((error) => {
            console.error('Error fetching counsellor data:', error);
        });
    }, []);

    if (counsellors.length === 0) return null;
  return (
    <>
    <h3>Counsellor data</h3>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {counsellors.map((user, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <UserAsCard {...user} />
        </div>
      ))}
    </div>
    </>
  )
}

export default Counsellor