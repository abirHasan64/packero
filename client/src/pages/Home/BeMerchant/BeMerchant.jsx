import MerchantImage from "../../../assets/location-merchant.png";

const BeMerchant = () => {
  return (
    <div className="bg-[url('assets/be-a-merchant-bg.png')] bg-[#03373D] bg-no-repeat min-h-[24rem] sm:min-h-[28rem] md:min-h-[32rem] lg:min-h-[36rem] rounded-4xl px-4 sm:px-6 lg:px-12 py-8">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 md:gap-8 lg:gap-12 w-full">
        {/* Image */}
        <img
          src={MerchantImage}
          alt="Merchant"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
        />

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-lg flex flex-col items-center lg:items-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-4 text-white text-base sm:text-lg md:text-xl">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4 w-full">
            <button className="btn btn-success rounded-full text-white font-extrabold px-6 py-3 w-full sm:w-auto">
              Become a Merchant
            </button>
            <button className="btn btn-outline btn-success rounded-full text-white font-extrabold px-6 py-3 w-full sm:w-auto">
              Earn with Packero
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
