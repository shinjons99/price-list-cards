import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        { id: 1, name: "Tanjum", phy: 75, chem: 80, math: 90 },
        { id: 2, name: "Jane", phy: 85, chem: 90, math: 95 },
        { id: 3, name: "Bob", phy: 70, chem: 75, math: 80 },
        { id: 4, name: "Alice", phy: 90, chem: 95, math: 85 },
        { id: 5, name: "Mary", phy: 80, chem: 85, math: 90 },
        { id: 6, name: "David", phy: 65, chem: 70, math: 75 },
        { id: 7, name: "Sara", phy: 95, chem: 90, math: 80 },
        { id: 8, name: "Tom", phy: 75, chem: 85, math: 95 },
        { id: 9, name: "Amy", phy: 85, chem: 75, math: 80 },
        { id: 10, name: "Ben", phy: 90, chem: 95, math: 85 },
        { id: 11, name: "Linda", phy: 80, chem: 85, math: 90 },
        { id: 12, name: "Peter", phy: 70, chem: 75, math: 80 },
      ];
      

    return (
        <div className='text-center'>
            <LineChart width={1000} height={300} data={marksArray}>
           <Line dataKey='phy'></Line>
           <Line dataKey='chem'></Line>
           <Line stroke="#82ca9d" dataKey='math'></Line>
           <XAxis dataKey='name'></XAxis>
           <YAxis></YAxis>
           <Tooltip/>
            </LineChart>
        </div>
    );
};

export default Dashboard;