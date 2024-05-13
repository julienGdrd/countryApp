import { CountryData } from "@/types"
import Link from "next/link"

type Props = {
    countryData: CountryData
    link: string
}
export default function Country({countryData, link}:Props){
    return(
        <Link href={link}>
        <div className="country" >
            <div className="name">{countryData.name}</div>
            <div>{countryData.emoji}</div>
            {/* <div>{countryData.code}</div> */}
            {/* <div>{countryData.continent?.name}</div> */}
        </div>
        </Link>
    )
}