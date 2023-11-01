import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addLocationtoDb, getCoordinate } from '../utilities/Firebase'


function TabularData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the data from your database or API endpoint
    axios.get('YOUR_API_ENDPOINT')
      .then((response) => {
        setData(response.data); // Assuming the response is an array of objects
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Tabular Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>District</th>
              <th>City</th>
              <th>Address</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Severity</th>
              <th>Pincode</th>
              <th>Message</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.state}</td>
                <td>{item.district}</td>
                <td>{item.city}</td>
                <td>{item.address}</td>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                <td>{item.severity}</td>
                <td>{item.pincode}</td>
                <td>{item.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TabularData;
