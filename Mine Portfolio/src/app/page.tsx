import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./my-project/page";
import Contact from "./contact-us/page";

export default function Home() {
  return (
    <div>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
