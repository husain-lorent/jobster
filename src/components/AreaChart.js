import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaChartComponents = ({ data }) => {
  return (
    <ResponsiveContainer width="95%" height={275}>
      <AreaChart data={data} margin={{ top: 35 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#2cb1bc" fill="#2563eb" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponents;
