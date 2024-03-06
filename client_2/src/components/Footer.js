import React from 'react';
import { useState } from 'react';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function Footer() {
  const [currentDate] = useState(getDate());

  return (
    <div>
      <h3>Today's Date</h3>
      <p>{currentDate}</p>
    </div>
  );
}

export default Footer