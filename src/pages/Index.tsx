import { StatCard } from "@/components/dashboard/StatCard";
import { CountryChart } from "@/components/dashboard/CountryChart";
import { CountryTable } from "@/components/dashboard/CountryTable";
import { covidData, globalStats } from "@/data/covidData";
import { Activity, Users, Heart, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">COVID-19 Global Dashboard</h1>
            <p className="text-lg text-gray-600">Real-time insights into global pandemic data</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Global Statistics */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Global Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Cases"
              value={globalStats.totalCases}
              icon={Activity}
              variant="cases"
            />
            <StatCard
              title="Total Deaths"
              value={globalStats.totalDeaths}
              icon={AlertTriangle}
              variant="deaths"
            />
            <StatCard
              title="Total Recovered"
              value={globalStats.totalRecovered}
              icon={Heart}
              variant="recovered"
            />
            <StatCard
              title="Active Cases"
              value={globalStats.totalActive}
              icon={Users}
              variant="active"
            />
          </div>
        </section>

        {/* Charts Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Data Visualizations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CountryChart
              data={covidData}
              type="bar"
              title="Top 10 Countries - Cases by Category"
            />
            <CountryChart
              data={covidData}
              type="pie"
              title="Global Cases Distribution"
            />
          </div>
        </section>

        {/* Country Table */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Detailed Country Data</h2>
          <CountryTable data={covidData} />
        </section>
      </main>
    </div>
  );
};

export default Index;
