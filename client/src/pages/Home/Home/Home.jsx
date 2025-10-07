import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import HowItWorks from "../HowItWorks/HowItWorks";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Services />
      <ClientLogosMarquee />
    </div>
  );
};

export default Home;
