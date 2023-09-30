import HeroMain from "@/components/hero/hero-main";
import Banner from "@/components/home/banner/banner";
import SportsCollection from "@/components/home/sports-collection/sports-collection";
import Trending from "@/components/home/trending/trending";
import Heading from "@/components/others/heading";

const Home = () => {
  return (
    <main className="w-full max-w-[1360px] mx-auto min-h-screen mt-[80px]">
      <HeroMain />
      <Heading
        title='Enhanced Comfort for Your Runs'
        subTitle="Experience the ultimate in comfort with our lightweight Nike ZoomX midsole, expertly engineered with heightened stack heights to deliver exceptional cushioning during those long-distance runs."
        className="text-center w-11/12 md:w-6/12 mx-auto mt-5 md:mt-16 mb-5 md:mb-16" />

      <Trending />
      <Banner />
      <SportsCollection />
    </main>
  )
}


export default Home;