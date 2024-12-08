import { LineChartSection, PieChartSection } from './components';

export const HomePage = () => {
  return (
    <main className="container">
      <div className="grid sm:grid-cols-2 gap-5">
        <LineChartSection />
        <PieChartSection />
      </div>
    </main>
  );
};
