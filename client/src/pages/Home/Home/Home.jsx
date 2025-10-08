import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import HowItWorks from "../HowItWorks/HowItWorks";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
import Benefits from "../Benefits/Benefits";
import BeMerchant from "../BeMerchant/BeMerchant";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Services />
      <ClientLogosMarquee />
      <hr className="mb-20 border-dashed border-green-400" />
      <Benefits />
      <BeMerchant />
    </div>
  );
};

export default Home;
