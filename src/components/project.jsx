import Title from "../ui/title";
import { Projects } from "../utils/projects";

export default function Project() {
    return (
        <section className="w-full overflow-hidden" id="result">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <Title variant="primary" titulo="PROYECTOS DESTACADOS" />
                    <div className="mt-4 max-w-xl">
                        <Title variant="secondary" titulo="Resultados que hablan por nosotros" />
                    </div>
                </div>
                {/* 
                <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div> */}
            </div>

            <div className="flex justify-between overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
                {Projects.map(project => (
                    <div key={project.id} className="snap-start min-w-[300px] max-w-[300px] lg:min-w-[340px] lg:max-w-[340px] flex flex-col group cursor-pointer shrink-0">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute bottom-4 left-4 bg-white px-4 py-1.5 rounded-lg shadow-sm">
                                <span className="text-sm font-semibold text-primary">{project.type}</span>
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 px-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2  transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                                {project.text}
                            </p>

                            <a href={project.link} className="inline-flex items-center text-primary font-semibold hover:underline">
                                Ver proyecto
                                <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}