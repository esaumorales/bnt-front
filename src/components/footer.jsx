import { Icon } from "@iconify/react";

export default function Footer() {
    return (
        <footer className=" rounded-3xl w-full  mt-20 text-gray-400" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <img src="./image/logo-only.png" alt="Biznovatech Logo" className="w-12" />
                        <span className="text-t-primary text-3xl font-semibold">
                            Biznova<strong className="text-primary font-bold">tech</strong>
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs mt-2">
                        Consultoría de software e innovación que impulsa la transformación digital de empresas a través de la tecnología.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary transition-colors flex items-center justify-center text-white">
                            <Icon icon="mdi:linkedin" className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary transition-colors flex items-center justify-center text-white">
                            <Icon icon="mdi:facebook" className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary transition-colors flex items-center justify-center text-white">
                            <Icon icon="mdi:instagram" className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary transition-colors flex items-center justify-center text-white">
                            <Icon icon="mdi:youtube" className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-semibold text-lg">Servicios</h4>
                    <ul className="flex flex-col gap-4 text-sm">
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Desarrollo de Software</a></li>
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Desarrollo Web</a></li>
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Apps Móviles</a></li>
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Inteligencia Artificial</a></li>
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Consultoría TI</a></li>
                    </ul>
                    <a href="#" className="text-primary text-sm font-semibold hover:text-t-secondary transition-colors mt-2 flex items-center gap-2">
                        Ver todos los servicios <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-semibold text-lg">Enlaces</h4>
                    <ul className="flex flex-col gap-4 text-sm">
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Nosotros</a></li>
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Casos de Éxito</a></li>
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Tecnologías</a></li>
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-t-secondary transition-colors">Trabaja con nosotros</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-semibold text-lg">Contacto</h4>
                    <ul className="flex flex-col gap-5 text-sm">
                        <li className="flex items-center gap-3">
                            <Icon icon="solar:phone-bold" className="w-5 h-5 text-primary shrink-0" />
                            <span>+51 987 654 321</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Icon icon="solar:letter-bold" className="w-5 h-5 text-primary shrink-0" />
                            <span>hola@biznovatech.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icon icon="solar:map-point-bold" className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Av. La Marina 1234,<br />Oficina 501<br />Lima, Perú</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-8"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© {new Date().getFullYear().toString()} Biznovatech. Todos los derechos reservados.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-t-secondary transition-colors">Política de Privacidad</a>
                    <a href="#" className="hover:text-t-secondary transition-colors">Términos y Condiciones</a>
                </div>
            </div>
        </footer>
    );
}