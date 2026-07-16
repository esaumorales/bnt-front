export default function Button({ children, variant = 'primary', size = 'base', icon, className }) {
    const variants = {
        'primary' : 'p-3 gap-4 border border-gray-100 text-white  bg-surface-dark rounded-md w-fit flex flex-wrap',
        'secondary' : 'p-3 gap-4 border border-gray-300 text-base font-semibold flex flex-wrap rounded-md w-fit',
        'accent' : ''
    }
    const sizes = {
        'sm' : 'px-4 py-2',
        'md' : 'px-6 py-3',
        'lg' : 'px-8 py-4'
    }

    return (
        <div>
            <button className={variants[variant] + ' ' + sizes[size] + ' ' + className}>{children}</button>
        </div>
    );
}