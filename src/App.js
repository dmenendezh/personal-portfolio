import "./App.css";
import "./index.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Badge from "./components/Badge";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap');
</style>;
function App() {
  return (
    <div className="App">
      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>
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
      </main>
    </div>
  );
}

export default App;
