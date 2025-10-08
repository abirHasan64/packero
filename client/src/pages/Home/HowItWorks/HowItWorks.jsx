import HowItWorksCard from "./HowItWorksCard";
import image1 from "../../../assets/bookingIcon.png";
import image2 from "../../../assets/tiny-deliveryman.png";
import image3 from "../../../assets/customer-top.png";
import image4 from "../../../assets/safe-delivery.png";
const HowItWorks = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={100} // stagger animation
      data-aos-duration="800"
      data-aos-once="false"
      className="mt-20"
    >
      <h1 className="text-4xl text-center font-extrabold text-success mb-4">
        How It Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <HowItWorksCard
          image={image1}
          title={"Choose Service"}
          text={"Select the service you need from our wide range of options."}
        />
        <HowItWorksCard
          image={image2}
          title={"Schedule Pickup"}
          text={"Choose a convenient time for your pickup."}
        />
        <HowItWorksCard
          image={image3}
          title={"Customer Support"}
          text={"We're here to help you 24/7 with any questions or concerns."}
        />
        <HowItWorksCard
          image={image4}
          title={"Enjoy Your Delivery"}
          text={"Sit back and relax while we handle the delivery."}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
