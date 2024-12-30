import React, { useState } from "react";

const HeroSection = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShortenUrl = async () => {
    if (!inputUrl) return alert("Please enter a URL");
    try {
      const response = await fetch("https://shortly-e9nj.onrender.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: inputUrl }),
      });
      const data = await response.json();
      setShortenedUrl(`https://shortly-e9nj.onrender.com/${data.id}`);
    } catch (error) {
      alert("An error occurred while shortening the URL");
    }
  };

  return (
    <section className="bg-white text-red-600 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Simplify Your Links</h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Enter your URL to create a short and memorable link.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="text"
            placeholder="Enter your URL here"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="w-full sm:w-96 px-4 py-3 border border-red-400 rounded focus:outline-none"
          />
          <button
            onClick={handleShortenUrl}
            className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
          >
            Shorten URL
          </button>
        </div>
        {shortenedUrl && (
          <div className="mt-6">
            <p className="text-gray-700">Your shortened URL:</p>
            <a
              href={shortenedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {shortenedUrl}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
