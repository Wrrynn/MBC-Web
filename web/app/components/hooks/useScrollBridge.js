'use client';
import { useEffect, useRef } from 'react';

export default function useScrollBridge(glitchId = 'jembatan-glitch', targetId = 'informasi') {
    const hasScrolledRef = useRef(false); // agar hanya scroll sekali

    useEffect(() => {
        const glitch = document.getElementById(glitchId);
        const target = document.getElementById(targetId);

        if (!glitch || !target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasScrolledRef.current) {
                    hasScrolledRef.current = true; // tandai sudah scroll
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(glitch);

        return () => {
            observer.unobserve(glitch);
        };
    }, [glitchId, targetId]);
}
