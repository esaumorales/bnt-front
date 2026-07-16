import Hero from "../components/hero";
import Technologies from "../components/technologies";
import Services from "../components/services";
import Process from "../components/process";
import Project from "../components/project";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div className="w-full flex flex-col p-8">
            <Hero />
            <Technologies />
            <Services />
            <Process />
            <Project />
            <Contact />
            <Footer />  
        </div>
    );
}
