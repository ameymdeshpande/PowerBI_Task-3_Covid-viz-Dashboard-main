import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { CovidData } from "@/data/covidData";

interface CountryChartProps {
  data: CovidData[];
  type: "bar" | "pie";
  title: string;
}

const COLORS = {
  cases: "#3b82f6",
  deaths: "#dc2626", 
  recovered: "#16a34a",
  active: "#9333ea",
};

export function CountryChart({ data, type, title }: CountryChartProps) {
  const topCountries = data.slice(0, 10);

  if (type === "pie") {
    const pieData = topCountries.map((country) => ({
      name: country.country,
      value: country.cases,
      cases: country.cases,
      deaths: country.deaths,
      recovered: country.recovered,
    }));

    return (
      <Card className="shadow-md bg-white border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS.cases} opacity={0.8 - index * 0.05} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [value.toLocaleString(), "Cases"]}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    );
  }

  const barData = topCountries.map((country) => ({
    country: country.country.length > 8 ? country.country.substring(0, 6) + "..." : country.country,
    cases: country.cases,
    deaths: country.deaths,
    recovered: country.recovered,
    active: country.active,
  }));

  return (
    <Card className="shadow-md bg-white border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="country" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => {
                  if (value >= 1000000) return `${(value / 1000000).toFixed(0)}M`;
                  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
                  return value;
                }}
              />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  value.toLocaleString(), 
                  name.charAt(0).toUpperCase() + name.slice(1)
                ]}
                labelStyle={{ color: "hsl(var(--foreground))" }}
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Bar dataKey="cases" fill={COLORS.cases} name="cases" radius={[2, 2, 0, 0]} />
              <Bar dataKey="deaths" fill={COLORS.deaths} name="deaths" radius={[2, 2, 0, 0]} />
              <Bar dataKey="recovered" fill={COLORS.recovered} name="recovered" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}