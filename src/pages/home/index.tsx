import {
  LineChartSection,
  PieChartSection,
  SearchTable,
  SimpleTable,
} from './components';

export const HomePage = () => {
  return (
    <main className="container">
      <div className="grid sm:grid-cols-2 gap-5">
        <LineChartSection />
        <PieChartSection />
        <SimpleTable />
      </div>
      <SearchTable />
    </main>
  );
};
