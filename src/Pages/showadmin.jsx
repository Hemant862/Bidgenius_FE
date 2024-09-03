import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Show() {
    const [admins, setAdmins] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAdmins() {
            try {
                
                const response = await axios.get('http://localhost:8000/api/admin/list/');
              
                setAdmins(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            }
        }

        fetchAdmins();
    }, []);

    return (
        <div>
            <center>
                <h1>Admin List</h1>
            </center>
            {error && <p>{error}</p>}
            <table className="table table-hover table-primary">
                <thead>
                    <tr>
                    <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Aadhar Card</th>
                        <th scope="col">PAN Card</th>
                        <th scope="col">Passport Front</th>
                        <th scope="col">Passport Back</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">Pincode</th>
                        <th scope="col">Actions</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <tr key={admin.id}>
    
                            <td>{admin.first_name}</td>
                            <td>{admin.last_name}</td>
                            <td>{admin.username}</td>
                            <td>{admin.email}</td>
                            <td>{admin.aadhar_card}</td>
                            <td>{admin.pan_card}</td>
                            <td>{admin.passport_front}</td>
                            <td>{admin.passport_back}</td>
                            <td>{admin.contact_no}</td>
                            <td>{admin.address}</td>
                            <td>{admin.city}</td>
                            <td>{admin.pincode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
