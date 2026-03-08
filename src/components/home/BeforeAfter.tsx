"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { ChevronsLeftRight } from "lucide-react";

export default function BeforeAfter() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Transformation</h2>
                    <h3 className="text-3xl md:text-4xl font-black text-brand-blue mb-4">Before & After Results</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">See the clear difference between raw concrete and our professional epoxy finish that guarantees longevity and aesthetic appeal.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div
                        ref={containerRef}
                        className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl select-none group cursor-ew-resize"
                        onMouseMove={handleMouseMove}
                        onMouseUp={() => setIsDragging(false)}
                        onMouseLeave={() => setIsDragging(false)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={() => setIsDragging(false)}
                        onMouseDown={() => setIsDragging(true)}
                        onTouchStart={() => setIsDragging(true)}
                    >
                        {/* Before Image (Background) */}
                        <div className="absolute inset-0">
                            <img
                                src="/3d-5d-epoxy/before_slider.png"
                                alt="Before Epoxy"
                                className="w-full h-full object-cover pointer-events-none"
                            />
                            <span className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-lg text-white text-xs md:text-sm font-bold uppercase tracking-widest pointer-events-none shadow-sm">
                                Before
                            </span>
                        </div>

                        {/* After Image (Foreground / Clipped) */}
                        <div
                            className="absolute inset-0 border-r-4 border-white shadow-[var(--tw-shadow-color)_5px_0px_20px_0px] shadow-black/30"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <img
                                src="/3d-5d-epoxy/after_slider.png"
                                alt="After Epoxy"
                                className="w-[calc(100%+4px)] max-w-none h-full object-cover pointer-events-none"
                                style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
                            />
                            <span className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary px-4 py-1.5 rounded-lg text-white text-xs md:text-sm font-bold uppercase tracking-widest pointer-events-none shadow-sm">
                                After
                            </span>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 z-20 flex items-center justify-center -ml-5 cursor-ew-resize"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border border-slate-100 hover:scale-110 active:scale-95 transition-transform duration-200">
                                <ChevronsLeftRight className="h-5 w-5 text-primary" />
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-sm text-slate-400 mt-6 md:hidden">Slide to see the difference</p>
                </div>
            </div>
        </section>
    );
}
