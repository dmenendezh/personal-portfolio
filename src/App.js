import "./App.css";
import "./index.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Badge from "./components/Badge";
import Experience from "./components/Experience";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap');
</style>;
function App() {
  return (
    <div className="App">
      <div />
      <Header />
      <main className="px-4">
        <section
          id="hero"
          data-section="hero"
          className={`section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
        >
          <Hero
            nameTitle="Hey, I'm Diego Menendez"
            srcImage="/dm.webp"
            altImage="logo image"
            href="https://www.linkedin.com/in/dmenendezhorta/"
          />
          <nav className="flex flex-wrap gap-4 mt-8">
            <Badge
              text="LinkedIn"
              href="https://www.linkedin.com/in/dmenendezhorta/"
              srcImageIcon="/Icons/LinkedIn.svg"
            />
            <Badge
              text="Contact me"
              href="mailito:diego.andres.menendez@gmail.com"
              srcImageIcon="/Icons/Mail.svg"
            />
          </nav>{" "}
        </section>

        <div className="space-y-24">
          <section
            id="experience"
            data-section="experience"
            className={`section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
          >
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              {" "}
              Experiencia laboral
            </h2>
            <Experience />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
