import { useState } from "react";
import { ProcessText } from "../utils/process";
import Title from "../ui/title";

export default function Process() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col xl:flex-row gap-12 py-10 w-full justify-between items-start" id="process">
            <div className="w-full xl:w-[30%] shrink-0">
                <Title variant="primary" titulo="COMO TRABAJAMOS"></Title>
                <div className="w-full max-w-70 ">
                    <Title variant="secondary" titulo="Un proceso claro para resultados reales" />
                </div>
            </div>
            <div className="flex w-full xl:w-[65%] justify-between">
                <div className="w-full relative pt-2 pb-6 overflow-hidden">
                    <div className="absolute top-[1.35rem] left-0 w-full h-[1px] bg-gray-200 z-0"></div>
                    <div className="absolute top-[1.1rem] right-0 w-2 h-2 border-t border-r border-gray-300 transform rotate-45 z-0"></div>
                    <div className="flex w-full">
                        {ProcessText.map((item, index) => (
                            <div 
                                key={item.id} 
                                className="flex-1 flex flex-col relative cursor-pointer"
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div className="h-10 flex items-center mb-4 relative z-10 pl-6">
                                    <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center -ml-[0.875rem] transition-colors duration-300 ${activeIndex === index ? 'border-primary/20' : 'border-transparent'}`}>
                                        <div className={`rounded-full transition-all duration-300 ${activeIndex === index ? 'w-2 h-2 bg-primary' : 'w-1.5 h-1.5 bg-black'}`}></div>
                                    </div>
                                </div>

                                <div className={`flex h-full transition-colors duration-300 ${index !== 0 ? 'border-l border-gray-100' : ''}`}>
                                    <div className={`flex flex-col items-start gap-3 ${index !== 0 ? 'pl-8' : 'pl-2'} pr-4 transition-transform duration-300 ${activeIndex === index ? '-translate-y-1' : ''}`}>
                                        <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? '' : 'text-gray-900'}`}>{item.id}</span>
                                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-t-secondary leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}