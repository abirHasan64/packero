const faqData = [
  {
    question: "How do I create an account?",
    answer:
      'Click the "Sign Up" button in the top right corner and follow the registration process.',
  },
  {
    question: "I forgot my password. What should I do?",
    answer:
      'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    question: "How do I update my profile information?",
    answer:
      'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
];

const FAQ = () => {
  return (
    <div className="mt-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 bg-white py-10 rounded-xl">
      <h2 className="text-2xl font-bold text-center text-success">
        Frequently Asked Questions (FAQ)
      </h2>
      <p className="text-center font-bold opacity-64 text-gray-600 mb-4">
        Enhance posture, mobility and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain and strengthen your body with
        ease!
      </p>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg"
        >
          <input
            type="radio"
            name="faq-accordion"
            defaultChecked={index === 0}
          />
          <div className="collapse-title font-bold text-lg sm:text-xl text-error">
            {item.question}
          </div>
          <div className="collapse-content text-sm sm:text-base text-accent font-semibold">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
