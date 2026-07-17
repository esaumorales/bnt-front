import { Icon } from "@iconify/react";
import Button from "../ui/button";
import Header from "./header";

export default function Hero() {

    return (
        <div className="w-full flex flex-col h-screen">
            <Header />
            <div className="flex items-center ">
                <article className="flex flex-col space-y-8  w-1/2">
                    <h1 className=" text-justify text-8xl font-bold">Transformamos <br />
                        ideas en <span className="text-primary">soluciones <br /></span> que impulsan tu negocio</h1>
                    <p className="text-lg  text-text-secondary w-1/2">Consultoria tecnologica y desarrollo digital para empresas que buscan innovar, crecer y liderar el futuro</p>
                    <div className="flex flex-wrap justify-around">
                        <Button variant="primary">Conoce nuestros servicios
                            <Icon icon="solar:arrow-up-linear" className="w-6 h-6 rotate-45" />
                        </Button>
                        <Button variant="secondary">Ver casos de éxito
                            <Icon icon="solar:arrow-up-linear" className="w-6 h-6 rotate-45" />

                        </Button>
                    </div>
                    <div className="flex flex-row gap-8 w-full mt-8 justify-around">
                        {[
                            { icon: "ion:rocket-outline", title: "+1", desc: "Proyectos exitosos" },
                            { icon: "eva:people-outline", title: "+1", desc: "Clientes satisfechos" },
                            { icon: "hugeicons:chart-analysis", title: "98%", desc: "Satisfacción del cliente" }
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-row items-start gap-4">
                                <Icon icon={stat.icon} className="w-10 h-10 text-gray-900" />
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-gray-900">{stat.title}</span>
                                    <span className="text-sm text-gray-500 w-24 leading-tight">{stat.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
                <aside className="w-1/2">
                    <img src="./image/fondo-hero.png" alt="hero" className="h-full bg-cover" />
                </aside>
            </div>
        </div>
    );
} 