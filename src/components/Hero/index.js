import React from "react";
import Badge from "../Badge";

function Hero({ nameTitle, srcImage, altImage, href }) {
  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <img
          className="rounded-full shadow-lg size-16"
          src={srcImage}
          alt={altImage}
        />
        <Badge text="Open to work" href={href} />
      </div>

      <h1 className="text-justify text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
        {nameTitle}
      </h1>
      <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
        <strong>Senior Software Engineer</strong> with more than 12 years of
        experience. Working remotly from Paysandu, Uruguay 🇺🇾.
      </p>
    </div>
  );
}
export default Hero;
