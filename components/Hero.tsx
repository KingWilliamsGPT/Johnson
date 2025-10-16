"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

export default function Hero() {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);
    const avatarRef = useRef(null);
    // track avatar position
    const [pos, setPos] = useState({ x: 0, y: 0 });

    // Initialize Vanta
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                HALO({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: false, // we'll handle movement manually
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    amplitudeFactor: 0.25,
                    size: 0.65,
                    backgroundColor: 0x131a43,
                    baseColor: 0x0055ff,
                    xOffset: 0,
                    yOffset: 0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    // handle magnetic avatar + halo movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            // Normalize to -1 to +1 range
            const x = (e.clientX / innerWidth - 0.5) * 2;
            const y = (e.clientY / innerHeight - 0.5) * 2;
            // Smooth easing
            setPos({ x, y });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Smooth follow effect for avatar and halo
    useEffect(() => {
        let animationFrame;
        const strength = 40; // movement strength in pixels

        const animate = () => {
            if (avatarRef.current && vantaEffect) {
                const moveX = pos.x * strength;
                const moveY = pos.y * strength;

                // Apply same translation to avatar
                avatarRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;

                // Convert pixel movement to vanta's coordinate system
                // Vanta uses a different scale, so we match the pixel movement
                const { innerWidth, innerHeight } = window;
                vantaEffect.setOptions({
                    xOffset: (moveX / innerWidth) * 2,
                    yOffset: -(moveY / innerHeight) * 2,
                });
            }
            animationFrame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, [vantaEffect, pos]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Vanta Background Layer */}
            <div ref={vantaRef} className="absolute inset-0 z-0" />

            {/* Net Overlay */}
            <div className="absolute inset-0 z-10 opacity-100 bg-white/10">
                <img
                    src="/images/backgrounds/net.svg"
                    alt="Overlay"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 min-h-screen flex flex-col items-center justify-center">
                {/* Avatar with Badge */}
                <div
                    ref={avatarRef}
                    className="absolute w-48 h-48 z-20 rounded-full border-4 border-white bg-white shadow-xl transition-transform duration-200 ease-out"
                >
                    <img
                        src="/images/avatar.png"
                        alt="Avatar"
                        className="w-full h-full object-cover object-top rounded-full cursor-pointer"
                    />
                    {/* Verification Badge */}
                    <div className="absolute z-20 top-[10px] right-[10px] w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                        <img src="/icons/check.png" alt="check" className="w-5 h-5" />
                    </div>
                </div>

                {/* Glass Button */}
                <div className="absolute bottom-[40px] bg-white/50 backdrop-blur-sm rounded-[20px] border border-zinc-200 px-6 py-3">
                    Meet Joshnson Ayanda
                </div>
            </div>
        </div>
    );
}