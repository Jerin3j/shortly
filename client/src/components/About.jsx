import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-700 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-red-600 mb-6">
          About Shortify
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Shortlyy is a simple and intuitive URL shortener application designed to
          make your links shorter and more shareable. Whether you're managing links
          for personal or professional use, Shortify provides a seamless experience
          to create, manage, and share your shortened URLs.
        </p>
        <p className="mt-4 text-lg sm:text-xl leading-relaxed">
          With an easy-to-use interface and powerful backend, Shortify ensures that
          your links are always available and reliable. We prioritize simplicity,
          speed, and user satisfaction.
        </p>
      </div>
    </div>
  );
};

export default About;
