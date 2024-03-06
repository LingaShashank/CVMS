import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import UserAsCardVis from './UserAsCardVis';
import "./styles.css";


const Visitors = () => {
    const [visitors, setVisitors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3500/visitor')
        .then((response) => {
            setVisitors(response.data); // Corrected to access response.data
        })
        .catch((error) => {
            console.error('Error fetching Students data:', error);
        });
    }, []);

    if (visitors.length === 0) return null;
  return (
    <>
    <h3>Visitors data</h3>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {visitors.map((user, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <UserAsCardVis {...user} />
        </div>
      ))}
    </div>
    </>
  )
}

export default Visitors