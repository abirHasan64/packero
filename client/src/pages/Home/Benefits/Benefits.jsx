import image1 from "../../../assets/live-tracking.png";
import image2 from "../../../assets/customer-top.png";
import image3 from "../../../assets/safe-delivery.png";
import BenefitsCard from "./BenefitsCard";

const benefitsData = [
  {
    image: image1,
    title: "Live Parcel Tracking",
    body: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    image: image2,
    title: "100% Safe Delivery",
    body: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    image: image3,
    title: "24/7 Call Center Support",
    body: "Our dedicated support team is available around the clock to assist you with any inquiries or issues you may have. Experience seamless communication and prompt assistance whenever you need it.",
  },
];

const Benefits = () => {
  return (
    <div className="grid gap-6 grid-cols-1 mb-20">
      {benefitsData.map((benefit, idx) => (
        <BenefitsCard
          key={idx}
          image={benefit.image}
          title={benefit.title}
          body={benefit.body}
        //   aosType="fade-up"
        //   aosDelay={idx * 150} // stagger animations on scroll
        />
      ))}
    </div>
  );
};

export default Benefits;
