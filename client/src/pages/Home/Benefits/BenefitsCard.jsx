const BenefitsCard = ({
  image,
  title,
  body,
  aosType = "fade-up",
  aosDelay = 0,
}) => {
  return (
    <div
      className="card bg-white shadow-xl p-4 m-4 md:m-0 rounded-lg flex flex-col md:flex-row items-center justify-center"
      data-aos={aosType}
      data-aos-delay={aosDelay}
      data-aos-duration="1000"
    >
      {/* Image */}
      <figure className="w-full md:w-64 flex-shrink-0 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-64 h-64 object-fill rounded-lg"
        />
      </figure>

      {/* Body */}
      <div className="card-body mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
        <h2 className="card-title text-xl text-success md:text-2xl font-semibold">
          {title}
        </h2>
        <p className="text-gray-700">{body}</p>
      </div>
    </div>
  );
};

export default BenefitsCard;
