import React from "react";

function SectionContainer({ id, className }) {
  return (
    <section
      id={id}
      data-section={id}
      className={`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
    />
  );
}
export default SectionContainer;
