import { carouselTechnologies } from "../utils/carouselTech";

export default function Technologies() {


    return (
        <div className="overflow-hidden border-y border-border py-6 flex select-none pointer-events-none">
            <div className="flex flex-nowrap gap-20 pr-20 grayscale animate-scroll w-max">
                {[...carouselTechnologies, ...carouselTechnologies].map((tech, index) => (
                    <img key={index} src={tech.image} alt={tech.name} className="h-10 w-auto object-contain max-w-none shrink-0" />
                ))}
            </div>
        </div>
    );
}