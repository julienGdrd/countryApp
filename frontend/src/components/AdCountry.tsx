import { useAddCountryMutation, useContinentsQuery, useCountriesQuery } from "@/graphql/generated/schema"
import { FormEvent } from "react";

export default function AdCountry(){
    const { data, loading} = useContinentsQuery()
    const [createCountry] = useAddCountryMutation();
    const {refetch: refetchCountries} = useCountriesQuery()
    const continents = data?.continents

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formJSON: any = Object.fromEntries(formData.entries());
        formJSON.continent = { id: parseInt(formJSON.continent)}
        console.log(formJSON)
        const res = await createCountry({ variables: { data: formJSON } });
        await refetchCountries()
        console.log(res)
        // router.push(`/ads/${res.data?.createAd.id}`);
      };
    return(
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <span>Name</span>
            <input type="text" name="name" id="name"/>
          </label>
          <label htmlFor="">
          <span>Emoji</span>
            <input type="text" name="emoji" id="emoji"/>
          </label>
          <label htmlFor="">
          <span>Code</span>
            <input type="text" name="code" id="code"/>
          </label>
          <label htmlFor="">
            <span>Continent</span>
            <select name="continent" id="continent">
                {continents?.map((c)=>{
                    return(
                        <option key={c.id} value={c.id}>{c.name}</option>
                    )
                })}
            </select>
          </label>
          <input type="submit" className="button"/>
        </form>
      </div>
    )
}