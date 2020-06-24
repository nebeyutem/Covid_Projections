import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';

const data = [
  {
    name: '4/1', cases: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '4/8', cases: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '4/15', cases: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '4/22', cases: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '4/29', cases: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '5/5', cases: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '5/12', cases: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';
  render() {
    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis dataKey=""/>
        <Tooltip />
        <Legend verticalAlign="top" height={40}/>
        <Area type="monotone" dataKey="cases" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }
}

