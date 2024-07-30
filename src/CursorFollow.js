import React, { useEffect, useRef, useState } from 'react';
import './CursorFollow.css';

const CursorFollow = () => {
    const [positions, setPositions] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX: x, clientY: y } = event;
            setPositions((prev) => [
                ...prev,
                { x, y },
            ]);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const container = containerRef.current;

        if (positions.length > 1) {
            const lastPos = positions[positions.length - 1];
            const prevPos = positions[positions.length - 2];

            const line = document.createElement('div');
            line.className = 'cursor-trail';

            const length = Math.sqrt((lastPos.x - prevPos.x) ** 2 + (lastPos.y - prevPos.y) ** 2);
            const angle = Math.atan2(lastPos.y - prevPos.y, lastPos.x - prevPos.x) * (180 / Math.PI);

            line.style.width = `${length}px`;
            line.style.transform = `translate(${prevPos.x}px, ${prevPos.y}px) rotate(${angle}deg)`;
            container.appendChild(line);

            setTimeout(() => {
                line.style.opacity = '0';
                setTimeout(() => container.removeChild(line), 2000); 
            }, 100);
        }
    }, [positions]);

    return (
        <div className="cursor-container" ref={containerRef}>
            <div
                className="cursor-follow"
                style={{
                    left: `${positions[positions.length - 1]?.x}px`,
                    top: `${positions[positions.length - 1]?.y}px`,
                }}
            />
        </div>
    );
};

export default CursorFollow;
