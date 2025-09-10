export interface CovidData {
  country: string;
  countryCode: string;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  population: number;
  casesPerMillion: number;
  deathsPerMillion: number;
  recoveredPerMillion: number;
}

export const covidData: CovidData[] = [
  {
    country: "United States",
    countryCode: "US",
    cases: 103436829,
    deaths: 1127152,
    recovered: 101458654,
    active: 851023,
    population: 331900000,
    casesPerMillion: 311623,
    deathsPerMillion: 3396,
    recoveredPerMillion: 305690
  },
  {
    country: "India",
    countryCode: "IN",
    cases: 44715202,
    deaths: 530779,
    recovered: 44184290,
    active: 133,
    population: 1380000000,
    casesPerMillion: 32395,
    deathsPerMillion: 384,
    recoveredPerMillion: 32011
  },
  {
    country: "France",
    countryCode: "FR",
    cases: 38997490,
    deaths: 174570,
    recovered: 38659045,
    active: 163875,
    population: 65270000,
    casesPerMillion: 597395,
    deathsPerMillion: 2675,
    recoveredPerMillion: 592214
  },
  {
    country: "Germany",
    countryCode: "DE",
    cases: 38437756,
    deaths: 174979,
    recovered: 37800000,
    active: 462777,
    population: 83780000,
    casesPerMillion: 458710,
    deathsPerMillion: 2089,
    recoveredPerMillion: 451093
  },
  {
    country: "Brazil",
    countryCode: "BR",
    cases: 37717062,
    deaths: 704659,
    recovered: 36557716,
    active: 454687,
    population: 212600000,
    casesPerMillion: 177383,
    deathsPerMillion: 3315,
    recoveredPerMillion: 171939
  },
  {
    country: "Japan",
    countryCode: "JP",
    cases: 33803572,
    deaths: 74694,
    recovered: 33728878,
    active: 0,
    population: 126476000,
    casesPerMillion: 267213,
    deathsPerMillion: 591,
    recoveredPerMillion: 266622
  },
  {
    country: "South Korea",
    countryCode: "KR",
    cases: 30831803,
    deaths: 34141,
    recovered: 30797662,
    active: 0,
    population: 51269000,
    casesPerMillion: 601400,
    deathsPerMillion: 666,
    recoveredPerMillion: 600734
  },
  {
    country: "Italy",
    countryCode: "IT",
    cases: 25870833,
    deaths: 190888,
    recovered: 25516930,
    active: 163015,
    population: 60461000,
    casesPerMillion: 427831,
    deathsPerMillion: 3158,
    recoveredPerMillion: 422006
  },
  {
    country: "United Kingdom",
    countryCode: "GB",
    cases: 24664558,
    deaths: 208566,
    recovered: 24455992,
    active: 0,
    population: 67890000,
    casesPerMillion: 363316,
    deathsPerMillion: 3072,
    recoveredPerMillion: 360244
  },
  {
    country: "Russia",
    countryCode: "RU",
    cases: 22075858,
    deaths: 381327,
    recovered: 21553509,
    active: 141022,
    population: 145940000,
    casesPerMillion: 151284,
    deathsPerMillion: 2613,
    recoveredPerMillion: 147704
  },
  {
    country: "China",
    countryCode: "CN",
    cases: 99311616,
    deaths: 121736,
    recovered: 99189880,
    active: 0,
    population: 1439323776,
    casesPerMillion: 69017,
    deathsPerMillion: 85,
    recoveredPerMillion: 68932
  },
  {
    country: "Spain",
    countryCode: "ES",
    cases: 13980340,
    deaths: 121852,
    recovered: 13858488,
    active: 0,
    population: 46754000,
    casesPerMillion: 298931,
    deathsPerMillion: 2606,
    recoveredPerMillion: 296325
  },
  {
    country: "Australia",
    countryCode: "AU",
    cases: 11394866,
    deaths: 18671,
    recovered: 11376195,
    active: 0,
    population: 25500000,
    casesPerMillion: 446857,
    deathsPerMillion: 732,
    recoveredPerMillion: 446125
  },
  {
    country: "Canada",
    countryCode: "CA",
    cases: 4651894,
    deaths: 51746,
    recovered: 4600148,
    active: 0,
    population: 37742000,
    casesPerMillion: 123300,
    deathsPerMillion: 1371,
    recoveredPerMillion: 121929
  },
  {
    country: "Netherlands",
    countryCode: "NL",
    cases: 8606748,
    deaths: 22992,
    recovered: 8583756,
    active: 0,
    population: 17134000,
    casesPerMillion: 502475,
    deathsPerMillion: 1342,
    recoveredPerMillion: 501133
  }
];

export const globalStats = {
  totalCases: covidData.reduce((sum, country) => sum + country.cases, 0),
  totalDeaths: covidData.reduce((sum, country) => sum + country.deaths, 0),
  totalRecovered: covidData.reduce((sum, country) => sum + country.recovered, 0),
  totalActive: covidData.reduce((sum, country) => sum + country.active, 0),
};