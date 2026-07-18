export default function Title({ titulo, variant }) {
    const variants = {
        "primary": "inline-flex items-center gap-2 text-sm font-bold tracking-widest text-surface-dark before:content-[''] before:w-2.5 before:h-2.5 before:bg-primary before:rounded-full",
        "secondary": "text-surface-dark font-bold text-xl"
    };
    return (
        <h1 className={variants[variant]}>{titulo}</h1>
    );
}