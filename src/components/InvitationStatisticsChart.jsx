import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const InvitationStatisticsBarChart = ({ data }) => {
  // Prepare data in the required format for a bar chart
  const transformedData = data.map(entry => ({
    full_name: entry.full_name,
    pending: entry.pending,
    onboarded: entry.onboarded,
  }));

  // Sort the data by the 'onboarded' value in descending order to highlight the top 3 onboarded invites
  const sortedOnboardedData = [...transformedData].sort((a, b) => b.onboarded - a.onboarded);

  // Sort the data by the 'pending' value in descending order to highlight the top 3 pending invites
  const sortedPendingData = [...transformedData].sort((a, b) => b.pending - a.pending);

  return (
    <div className='p-4 bg-light rounded shadow' style={{ overflowX: 'auto' }}>
      <h2 className='text-center mb-4'>Tally Referral Contest Statistics</h2>
      <div className="d-flex flex-column align-items-center">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={transformedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="full_name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pending" fill="#E7E7D4" name="Pending">
              <LabelList dataKey="pending" position="top" />
            </Bar>
            <Bar dataKey="onboarded" fill="#02A38B" name="Onboarded">
              <LabelList dataKey="onboarded" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h4 className='text-center mb-4 mt-5'>Hall of Fame</h4>
      <div className="text-center mt-3">
        <strong className='mr-5'>Top 3 Onboarded Invites:</strong>{' '}
        {sortedOnboardedData.slice(0, 3).map((entry, index) => (
          <span key={index}>
            {index > 0 && <span> | </span>}
            {entry.full_name} ({entry.onboarded})
          </span>
        ))}
        <br />
        <strong className='mr-5'>Top 3 Pending Invites <em>(You are potential winners)</em>:</strong>{' '}
        {sortedPendingData.slice(0, 3).map((entry, index) => (
          <span key={index}>
            {index > 0 && <span> | </span>}
            {entry.full_name} ({entry.pending})
          </span>
        ))}
      </div>
    </div>
  );
};

export default InvitationStatisticsBarChart;
