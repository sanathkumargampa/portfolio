import { useState, useRef, useEffect, Suspense } from 'react';
import { SectionLoader } from './ui/SectionLoader';

export const LazyRender = ({ children, threshold = 0.1, minHeight = "min-h-[50vh]", ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Update animation state based on visibility
            setIsVisible(entry.isIntersecting);

            // Once in view, keep the content loaded (code splitting)
            if (entry.isIntersecting && !hasLoaded) {
                setHasLoaded(true);
            }
        }, { rootMargin: '0px', threshold });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold, hasLoaded]);

    return (
        <div
            ref={ref}
            {...props}
            className={`${minHeight} w-full transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0 filter blur-0" : "opacity-0 translate-y-20 filter blur-sm"
                }`}
        >
            {hasLoaded ? (
                <Suspense fallback={<SectionLoader />}>
                    {children}
                </Suspense>
            ) : (
                <div className="w-full h-full" />
            )}
        </div>
    );
};
// Note: Changed fallback to empty invisible div initially to avoid flashing loaders if user scrolls fast,
// OR keep loader. 'SectionLoader' in Render logic only shows if we decided to load but network is slow.
// The 'false' branch of isVisible is the "not yet in view" state.
// I'll make the "not yet in view" state effectively transparent or a simple spacer to prevent layout shift.
// Actually, using SectionLoader as placeholder is better for UX if they scroll fast.
