import { Card } from "@ui";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: 'youtube', value: 25 },
  { name: 'web', value: 45 },
  { name: 'telegram', value: 36 },
];
const COLORS = ['#F26C33', '#5E8661', '#CCBEA9'];

export const PieChartSection = () => {
  return (
    <Card title="Заголовок чарта в две строки" titleCenter>
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          <Legend />
          <Tooltip />
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Card>
  )
}
