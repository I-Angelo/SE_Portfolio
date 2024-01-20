import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Styles/dataBaseData.css';
// import { Link, useNavigate } from 'react-router-dom';
// import sphere2 from '../static/pyramid-double.gif';
import LoginToggle from '../layouts/LoginToggle';

const DataDisplay = () => {
  const [data, setData] = useState([]);
  console.log('State initialized');

  useEffect(() => {
    axios.get('http://localhost:8080/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (user_id) => {
    console.log('Deleting item with id:', user_id);

    // Ensure that the user_id is defined before making the DELETE request
    if (user_id) {
      console.log({ user_id });
      axios.delete(`http://localhost:8080/api/data/${user_id}`)
        .then(response => {
          console.log('Delete response:', response);

          // Update the state to reflect the changes after deletion
          setData(prevData => {
            const updatedData = prevData.filter(item => item.user_id !== user_id);
            console.log('Updated data:', updatedData);
            return updatedData;
          });
        })
        .catch(error => {
          console.error('Error deleting data:', error);
        });
    }
  };

  const handleRefresh = () => {
    // Call the API to refresh data
    axios.get('http://localhost:8080/api/data')
      .then(response => {
        setData(response.data);
        console.log('Data refreshed!')
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="grid-container">
      <h2>Data Display</h2>
      <button className="refresh-button" onClick={handleRefresh}>Refresh Data</button>
      <LoginToggle />
      <div className="grid">
        {data.map(item => (
          <div key={item.user_id} className="grid-item">
            <p>ID: {item.user_id}</p>
            <p>Date: {item.created_at}</p>
            <p>Name: {item.first_name} {item.last_name}</p>
            <p>Email: {item.email_address}</p>
            <p>Phone: {item.contact_number || 'N/A'}</p>
            <p>Message: {item.message_content}</p>
            {/* Delete button */}
            <button onClick={() => handleDelete(item.user_id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
