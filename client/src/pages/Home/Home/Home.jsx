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
      <hr className="mb-20 border-dashed border-green-400" />
    </div>
  );
};

export default Home;
