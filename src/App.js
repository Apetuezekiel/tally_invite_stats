import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import InvitationStatisticsChart from './components/InvitationStatisticsChart';
import Loader from './components/Loader'; // Import the Loader componen

function App() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = '27403342c95d1d83a40c0a8523803ec1518e2e5d6edd64b6296a81e8f94b1091';
    const headers = {
      'X-API-KEY': apiKey,
    };

    Axios.get('http://127.0.0.1:8080/api/transactions/getInvitationStatistics', { headers })
      .then(response => {
        setApiData(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const apiKey = '27403342c95d1d83a40c0a8523803ec1518e2e5d6edd64b6296a81e8f94b1091';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzksImVtYWlsIjoiYXBldHVkZXZiZWFzdEBnbWFpbC5jb20iLCJmdWxsbmFtZSI6IkFwZXR1IEV6ZWtpZWwiLCJtb2JpbGVfcGhvbmUiOiIwNzAzMzQ3NDE5OCIsImlhdCI6MTY4MzA5ODI5MSwiZXhwIjoxNzE0NjM0MjkxfQ.TlfJiPSObfY3fjld121rHQ8nnAZXrkueCgKTG9N6lE8';
    const headers = {
      'X-API-KEY': apiKey,
      'Authorization': `Bearer ${token}`
    };

    Axios.get('https://tally.netpluspay.com/api/transactions/fetchWallet', { headers })
      .then(response => {
        // setApiData(response.data.data);
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <InvitationStatisticsChart data={apiData} />
      )}
    </div>
  );
}

export default App;
