import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../ui/button";

export default function Header() {
    const [activeLink, setActiveLink] = useState("Inicio");
    const navLinks = [
        { label: "Inicio", href: "hero" },
        { label: "Tecnologias", href: "technologies" },
        { label: "Servicios", href: "services" },
        { label: "Procesos", href: "process" },
        { label: "Resultados", href: "result" },
        { label: "Contacto", href: "contact" }
    ];

    return (
        <div>
            <header className="flex wrap justify-between items-center">
                <div className="flex flex-row gap-2 ">
                    <img src="./image/logo-only.png" alt="" className="w-20 " />
                    <span className="text-secondary text-4xl self-center font-semibold">
                        Biznova<strong className="text-primary font-bold">tech</strong>
                    </span>
                </div>
                <div>
                    <nav>
                        <ul className="flex flex-row gap-16 text-t-secondary">
                            {navLinks.map((link) => {
                                const isActive = activeLink === link.label;
                                return (
                                    <li key={link.label}>
                                        <a
                                            href={`#${link.href}`}
                                            onClick={() => setActiveLink(link.label)}
                                            className={`text-lg transition-colors ${isActive
                                                    ? 'font-medium text-gray-900 relative after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-blue-600 after:rounded-t-sm'
                                                    : 'hover:text-gray-900'
                                                }`}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <div>
                    <Button variant="secondary">
                        Agendar Reunion
                        <Icon icon="solar:arrow-up-linear" className="w-6 h-6 rotate-45" />
                    </Button>
                </div>
            </header>
        </div>
    );
}