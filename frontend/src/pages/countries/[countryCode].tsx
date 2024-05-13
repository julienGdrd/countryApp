import Layout from "@/components/Layout";
import { useCountryQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

export default function CountryDetails() {
  const router = useRouter();
  const { countryCode } = router.query;
  console.log(countryCode);
  const { data } = useCountryQuery({
    variables: { code: typeof countryCode === "string" ? countryCode : "" },
    skip: typeof countryCode === "undefined",
  });
  const country = data?.country;
  return (
    <Layout>
      <div className="country">
        <div>{country?.emoji}</div>
        <div>
        Name : <span className="name">{country?.name}</span><span >({country?.code})</span> 
        </div>

        <div>Continent : <span className="name">{country?.continent?.name}</span> </div>
      </div>
    </Layout>
  );
}
