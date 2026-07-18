import { Icon } from "@iconify/react";
import Title from "../ui/title";
import { processText } from "../utils/process";

export default function Services() {
    return (
        <div className=" flex flex-col">
            <div>
                <Title variant="primary" titulo="NUESTROS SERVICIOS" />

            </div>
            <div className="  flex flex-wrap  items-start ">
                <div className="w-1/2">
                    <Title variant='secondary' titulo="Soluciones digitales a la medida de tu negocio" />

                </div>
                <div className="w-1/2">
                    <p className="text-left items-start w-1/2 text-t-secondary">
                        Combinamos estrategia, tecnologia y creatividad para <br /> desarrollar soluciones que generan impacto real.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-10 justify-around">
                {processText.map((item) => (
                    <div key={item.id} className=" p-4 w-52 rounded-lg flex flex-col space-y-2">
                        <Icon icon={item.icon} className="text-6xl text-dark " />

                        <h3 className="font-bold text-lg mt-2 text-left">{item.title}</h3>
                        <p className="text-t-secondary text-sm text-left">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}