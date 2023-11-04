import Banner from "../Components/Banner";
import TopFoodSection from "../Components/TopFoodSection";


export default function Home() {

   
  return (
    <section className={`max-w-[1300px] mx-auto px-4`}>
      <Banner/>
      <TopFoodSection/>
    </section>
  )
}
