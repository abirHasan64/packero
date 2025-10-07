const ServicesCard = ({ service }) => {
  const { icon: Icon, title, description } = service;

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-none hover:bg-success hover:text-white transition-all duration-300 group">
      <div className="text-4xl text-success mb-4 group-hover:text-white transition-colors duration-300">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-success group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
