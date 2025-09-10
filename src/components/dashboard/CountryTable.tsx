import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CovidData } from "@/data/covidData";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface CountryTableProps {
  data: CovidData[];
}

export function CountryTable({ data }: CountryTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatNumber = (num: number) => num.toLocaleString();

  const getDeathRate = (deaths: number, cases: number) => {
    return ((deaths / cases) * 100).toFixed(2);
  };

  const getRecoveryRate = (recovered: number, cases: number) => {
    return ((recovered / cases) * 100).toFixed(2);
  };

  return (
    <Card className="shadow-md bg-white border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Country Statistics</CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead className="text-right">Cases</TableHead>
                <TableHead className="text-right">Deaths</TableHead>
                <TableHead className="text-right">Recovered</TableHead>
                <TableHead className="text-right">Active</TableHead>
                <TableHead className="text-right">Death Rate</TableHead>
                <TableHead className="text-right">Recovery Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((country) => (
                <TableRow key={country.countryCode} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{country.country}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      {formatNumber(country.cases)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200">
                      {formatNumber(country.deaths)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                      {formatNumber(country.recovered)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                      {formatNumber(country.active)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {getDeathRate(country.deaths, country.cases)}%
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {getRecoveryRate(country.recovered, country.cases)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}