import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import TopFoodSection from "../Components/TopFoodSection";
import SpecialMenu from "../Components/SpecialMenu";
import BookATable from "../Components/BookATable";


export default function Home() {
   
  return (
    <section className={`max-w-[1300px] mx-auto px-4`}>

      <Helmet>
        <title>  SavorSport Cafe - Where Every Bite Tells a Delicious Story   </title>
      </Helmet>
      <Banner/>
      <SpecialMenu/>
      <TopFoodSection/>
      <BookATable/>
    </section>
  )
}
