import React, {useState } from 'react';
//import FilterCard from './FilterCard';

const Filter = () => {
     
        const visitors= useState([ 
        { id: 1, name: 'Linga Srinivas', purpose:'Day Meeting',type:'Parent', dateofvisit:'27-12-2023'},
        { id: 1, name: 'Linga Sunvith', purpose:'Day Meeting',type:'Visitor', dateofvisit:'27-12-2023'},
        { id: 1, name: 'Linga Sumanth', purpose:'Day Meeting',type:'Visitor', dateofvisit:'27-12-2023'},
        { id: 1, name: 'Linga Sanjith', purpose:'Day Meeting',type:'Visitor', dateofvisit:'27-12-2023'},
        { id: 1, name: 'Linga Bhagya', purpose:'Day Meeting',type:'Parent', dateofvisit:'27-12-2023'}, 
          // ... other items 
        ]); 
        

        const [filteredVisitors, setFilteredVisitors] = useState([]);
        const [selectedType, setSelectedType] = useState('All');
      
        const filterVisitorsByType = (visitorType) => {
          if (visitorType === 'All') {
            setFilteredVisitors(visitors);
          } else {
            const filtered = visitors.filter((visitor) => visitor.type === visitorType);
            setFilteredVisitors(filtered);
          }
        };
      
        const clearFilters = () => {
          setSelectedType('All');
          setFilteredVisitors([]);
        };
      
        const dropdownStyle = {
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 15px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          outline: 'none', // Remove default outline
          marginRight: '10px',
        };
      
        const clearButtonStyle = {
          backgroundColor: '#3498db', // Updated color
          color: 'white',
          padding: '10px 15px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          outline: 'none', // Remove default outline
        };
      
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <label htmlFor="visitorType" style={{ color: 'white' }}>
                Filter by Type:
              </label>
              <select
                id="visitorType"
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  filterVisitorsByType(e.target.value);
                }}
                value={selectedType}
                style={dropdownStyle}
              >
                <option value="All">All</option>
                <option value="Visitor">Visitors</option>
                <option value="Parent">Parents</option>
              </select>
              <button onClick={clearFilters} style={clearButtonStyle}>
                Clear Filters
              </button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {filteredVisitors.length > 0 ? (
          filteredVisitors.map((visitor) => (
            <div
              key={visitor.id}
              style={{
                border: '1px solid #ccc',
                padding: '20px',
                margin: '10px',
                backgroundColor: '#7FFFD4',
                transition: 'transform 0.3s',
                cursor: 'pointer',
                borderRadius: '10px',
                width: '200px',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <h4>{visitor.name}</h4>
              <p>Purpose: {visitor.purpose}</p>
              <p>Date of Visit: {visitor.dateOfVisit}</p>
              <p>Type: {visitor.type}</p>
            </div>
          ))
        ) : (
          visitors.map((visitor) => (
            <div
              key={visitor.id}
              style={{
                border: '1px solid #ccc',
                padding: '20px',
                margin: '10px',
                backgroundColor: '#7FFFD4',
                transition: 'transform 0.3s',
                cursor: 'pointer',
                borderRadius: '10px',
                width: '200px',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <h4>{visitor.name}</h4>
              <p>Purpose: {visitor.purpose}</p>
              <p>Date of Visit: {visitor.dateOfVisit}</p>
              <p>Type: {visitor.type}</p>
            </div>
          ))
        )}
      </div>
        
    </div>
  );
};

export default Filter