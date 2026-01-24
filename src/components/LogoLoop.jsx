import { useRef, useState } from 'react';
import './LogoLoop.css';

const LogoLoop = ({
    logos = [],
    speed = 50,
    direction = 'left',
    logoHeight = 40,
    gap = 40,
    pauseOnHover = true,
    scaleOnHover = true,
    fadeOut = true,
    fadeOutColor = 'rgba(0,0,0,0.9)',
    ariaLabel = 'Logo carousel',
}) => {
    const [isPaused, setIsPaused] = useState(false);
    const trackRef = useRef(null);

    // Calculate duration - lower speed value = faster animation
    const duration = `${logos.length * (100 / speed)}s`;

    const handleMouseEnter = () => {
        if (pauseOnHover) {
            setIsPaused(true);
        }
    };

    const handleMouseLeave = () => {
        if (pauseOnHover) {
            setIsPaused(false);
        }
    };

    const renderLogo = (logo, index, suffix = '') => {
        const content = logo.node ? (
            logo.node
        ) : logo.src ? (
            <img src={logo.src} alt={logo.alt || logo.title || ''} />
        ) : logo.img ? (
            <img src={logo.img} alt={logo.name || logo.title || ''} />
        ) : null;

        return (
            <div
                key={`${suffix}-${index}`}
                className={`logo-item ${scaleOnHover ? 'scale-hover' : ''}`}
                style={{
                    height: logoHeight,
                    width: logoHeight,
                    marginRight: gap,
                }}
                title={logo.title || logo.name}
            >
                {content}
            </div>
        );
    };

    // Duplicate logos multiple times to ensure seamless loop across full width
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div
            className={`logo-loop-wrapper ${fadeOut ? 'fade-out' : ''}`}
            style={{ '--fade-color': fadeOutColor }}
            aria-label={ariaLabel}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={trackRef}
                className={`logo-loop-track direction-${direction} ${isPaused ? 'paused' : ''}`}
                style={{ '--duration': duration }}
            >
                {duplicatedLogos.map((logo, index) => renderLogo(logo, index, 'a'))}
            </div>
        </div>
    );
};

export default LogoLoop;
