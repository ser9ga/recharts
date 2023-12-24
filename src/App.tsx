import "./styles.css";
import React from "react";
import {CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis,} from "recharts";
import GraphLine from "./components/GraphColors";
import {data} from "./const/data";

export default function App() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend/>
      {GraphLine({
        id: 'pv',
        normalColor: '#8884d8',
        data: data,
        activeDotRadius: 8
      })}
      {GraphLine({
        id: 'uv',
        normalColor: '#82ca9d',
        data: data,
      })}
    </LineChart>
  );
}
