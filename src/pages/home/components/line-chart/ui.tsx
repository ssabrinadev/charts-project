import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card } from '@ui';
import { data } from './constants';

export const LineChartSection = () => {
  return (
    <Card title="Заголовок чарта">
      <ResponsiveContainer width="90%" height={261}>
        <LineChart
          data={data}
          width={500}
          margin={{
            top: 5,
            right: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="youtube" stroke="#F26C33" activeDot={{ r: 8 }} />
          <Line dataKey="web" stroke="#5E8661" />
          <Line dataKey="telegram" stroke="#CCBEA9" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
