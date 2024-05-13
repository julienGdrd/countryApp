import AdCountry from "@/components/AdCountry";
import Countries from "@/components/Countries";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <AdCountry />
        <Countries />
      </Layout>
    </>
  );
}
