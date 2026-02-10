import { useState, useRef, useEffect } from 'react';

export const LazyRender = ({ children, threshold = 0.1, minHeight = "min-h-[50vh]", ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { rootMargin: '0px', threshold });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.disconnect();
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            {...props}
            // Keep minHeight to prevent collapse if children take time to render or for consistent spacing, 
            // though with static imports children are there. 
            // We can keep the prompt's instruction to keep minHeight as class or just use it. 
            // The user plan said "Remove minHeight prop usage if no longer needed... (or keep as a class)". 
            // I'll keep it as a class to be safe with existing spacing usage.
            className={`${minHeight} w-full transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0 filter blur-0" : "opacity-0 translate-y-20 filter blur-sm"
                }`}
        >
            {children}
        </div>
    );
};
