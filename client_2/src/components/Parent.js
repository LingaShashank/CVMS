import React from 'react';
import "./styles.css";

const Parent = () => {
  return (
    <div>
      <h2>Parents Details:</h2>
      <table style={{ width: '100%', border: '1px solid black' }}>
        <thead style={{ border: '1px solid black' }}>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Relation</th>
          <th>Phone</th>
        </thead>
        <tbody style={{ border: '1px solid black' }}>
          <tr>
          <td>Linga Srinivas</td>
          <td>50</td>
          <td>Male</td>
          <td>Father</td>
          <td>9392473464</td>
          </tr>
          <tr>
            <td>Linga Bhagya Lakshmi</td>
            <td>46</td>
            <td>Female</td>
            <td>Mother</td>
            <td>8885194897</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default Parent