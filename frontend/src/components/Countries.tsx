import { useCountriesQuery } from "@/graphql/generated/schema";
import Country from "./Country";

export default function Countries() {
  const { data, loading } = useCountriesQuery();
  console.log(loading);
  console.log(data?.countries);
  if (loading) return "chargement";
  return (
    <div>
      <div className="countryList">
        {data?.countries.map((country) => {
          return (
            <Country
              countryData={country}
              key={country.id}
              link={`/countries/${country.code}`}
            />
          );
        })}
      </div>
    </div>
  );
}
