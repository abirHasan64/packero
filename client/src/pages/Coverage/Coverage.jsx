import React from "react";
import BangladeshMap from "./BangladeshMap";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();

  return (
    <div className="mx-4 lg:mx-0 md:mx-0">
      <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-16 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden mt-20 rounded-xl shadow-accent shadow-2xl sm:shadow-none ">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -left-20 w-64 h-64 bg-indigo-200/30 rounded-full blur-2xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 px-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight drop-shadow-sm">
              Nationwide Coverage
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We proudly serve all{" "}
              <span className="font-semibold text-blue-700">64 districts</span>{" "}
              across Bangladesh — ensuring reliable service everywhere you are.
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden transition-transform hover:scale-[1.01] hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)] duration-500 ease-out">
            <BangladeshMap serviceCenters={serviceCenters} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;
