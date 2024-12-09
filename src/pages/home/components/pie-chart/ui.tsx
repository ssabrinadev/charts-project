import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import {
  Card,
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@ui';

const data = [
  { name: 'youtube', value: 25 },
  { name: 'web', value: 45 },
  { name: 'telegram', value: 36 },
];
const COLORS = ['#5E8661', '#CCBEA9', '#F26C33'];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

const labelData = [
  { color: COLORS[0], label: 'САЙТЫ СМИ' },
  { color: COLORS[1], label: 'ТЕЛЕГРАМ' },
  { color: COLORS[2], label: 'YOUTUBE' },
]

export const PieChartSection = () => {
  return (
    <Card title="Заголовок чарта в две строки" titleCenter>
      <div className="flex h-full items-center">
        <div className="flex-col flex gap-2.5 flex-1">
          {labelData.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] flex-1"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              <Legend />
              <Tooltip />
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </Card>
  );
};
