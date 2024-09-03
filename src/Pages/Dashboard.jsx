import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchProtectedData();
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    }

    fetchData();
  }, [navigate]);

  async function fetchProtectedData() {
    let accessToken = localStorage.getItem('accessToken');

    let response = await fetch('http://localhost:8000/api/admin/list/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 401) { // Access token expired
      const refreshToken = localStorage.getItem('refreshToken');

      const refreshResponse = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
        method: 'POST',
        body: JSON.stringify({ refresh: refreshToken }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const refreshData = await refreshResponse.json();
      const { access } = refreshData;

      localStorage.setItem('accessToken', access);
      accessToken = access;

      // Retry the protected request
      response = await fetch('http://localhost:8000/api/admin/list/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
    }

    return response;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {data ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
