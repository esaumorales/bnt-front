export default function Technologies() {
    const carouselTechnologies = [
        {
            name: "React",
            image: "/image/react-icon.png"
        },
        {
            name: "Node JS",
            image: "/image/node-icon.png"
        },
        {
            name: "Flutter",
            image: "/image/flutter-icon.png"
        },
        {
            name: "Mysql",
            image: "/image/mysql-icon.png"
        },
        {
            name: "PostgreSQL",
            image: "/image/postgresql-icon.png"
        },
        {
            name: "Docker",
            image: "/image/docker-icon.webp"
        },
        {
            name: "Tailwind CSS",
            image: "/image/tailwind-icon.png"
        },
        {
            name: "GitHub",
            image: "/image/github-icon.png"
        },
        {
            name: "CSS",
            image: "/image/css-icon.png"
        },
        {
            name: "Astro",
            image: "/image/astro-icon.png"
        },

    ];

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