import React, { useState } from 'react'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
 

const CounsellorDetails = () => {
    const [counsellorDetails, setCounsellorDetails] = useState([]) // State to store items 
 
    const [inputValues, setInputValues] = useState({
        empId: '',
        empName: '',
        mobile: '',
      });
 // Function to handle adding an item 
 const addCounsellor = () => {
    if (inputValues.empId.trim() !== '' && inputValues.empName.trim() !== '' && inputValues.mobile.trim() !== '') {
      setCounsellorDetails([...counsellorDetails, { ...inputValues }]);
      setInputValues({ empId: '', empName: '', mobile: '' });
    }
  };

  const updateCounsellor = (index, fieldName, newValue) => {
    const updatedItems = [...counsellorDetails];
    updatedItems[index][fieldName] = newValue;
    setCounsellorDetails(updatedItems);
  };

  const deleteCounsellor = (index) => {
    const filteredItems = counsellorDetails.filter((_, i) => i !== index);
    setCounsellorDetails(filteredItems);
  };
 
 return ( 
    <div>
    <h1>CRUD Operations</h1>
    <div style={{ width: '100%', height: '30%' }}>
      <input
        type="text"
        placeholder="Employee ID"
        value={inputValues.empId}
        onChange={(e) => setInputValues({ ...inputValues, empId: e.target.value })}
      />
      <input
        type="text"
        placeholder="Employee Name"
        value={inputValues.empName}
        onChange={(e) => setInputValues({ ...inputValues, empName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mobile"
        value={inputValues.mobile}
        onChange={(e) => setInputValues({ ...inputValues, mobile: e.target.value })}
      />
      <button onClick={addCounsellor}>Add</button>
    </div>
    <div style={{ width: '100%', height: '70%' }}>
      <h2 style={{ textAlign: 'left', paddingLeft: '40px' }}>Counsellor Names</h2>
      {counsellorDetails.map((counsellor, index) => (
        <Card sx={{ maxWidth: '25%' }} class="card" style={{ backgroundColor: 'lightblue' }} key={index}>
          <CardActionArea>
            <CardContent>
            <Typography variant="body2" color="text.secondary" align='left'>
                Empolyee Name <br/>
              <input
                type="text"
                value={counsellor.empName}
                onChange={(e) => updateCounsellor(index, 'empName', e.target.value)}
              />
              </Typography>
              <Typography variant="body2" color="text.secondary" align='left'>
                Employee Id <br/>
              <input
                type="text"
                value={counsellor.empId}
                onChange={(e) => updateCounsellor(index, 'empId', e.target.value)}
              />
              </Typography>
              <Typography variant="body2" color="text.secondary" align='left'>
                Mobile Number <br/>
              <input
                type="text"
                value={counsellor.mobile}
                onChange={(e) => updateCounsellor(index, 'mobile', e.target.value)}
              />
              </Typography>
              <br />
              <button onClick={() => deleteCounsellor(index)}>Delete</button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  </div>
);
};

export default CounsellorDetails