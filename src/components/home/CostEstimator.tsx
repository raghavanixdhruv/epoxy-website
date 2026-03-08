"use client";

import { useState } from "react";
import { Calculator, IndianRupee, CheckCircle2 } from "lucide-react";

export default function CostEstimator() {
    const [area, setArea] = useState<number | "">("");
    const [system, setSystem] = useState("Self-Leveling (Industrial)");
    const [condition, setCondition] = useState("New Concrete");
    const [estimate, setEstimate] = useState<{ min: number, max: number } | null>(null);

    const calculateEstimate = () => {
        if (!area || isNaN(Number(area))) return;

        // Base rates per sq ft in INR 
        let minRate = 0; let maxRate = 0;
        switch (system) {
            case "Italian Marble Epoxy Flooring": minRate = 330; maxRate = 500; break;
            case "Metallic Epoxy Flooring": minRate = 350; maxRate = 850; break;
            case "3D-5D Epoxy Flooring": minRate = 400; maxRate = 1000; break;
            case "Quotes Epoxy Flooring": minRate = 100; maxRate = 180; break;
            case "Industrial Epoxy Flooring": minRate = 80; maxRate = 120; break;
            case "Flakes Epoxy Flooring": minRate = 120; maxRate = 250; break;
            case "Car Parking Epoxy Flooring": minRate = 60; maxRate = 90; break;
            case "Granual Epoxy Flooring": minRate = 110; maxRate = 160; break;
            case "Self-Leveling (Industrial)": minRate = 50; maxRate = 65; break;
            case "Anti-Static (ESD)": minRate = 120; maxRate = 150; break;
            default: minRate = 50; maxRate = 65;
        }

        // Condition multiplier
        let multiplier = 1;
        if (condition === "Minor Cracks") multiplier = 1.1;
        if (condition === "Highly Damaged") multiplier = 1.35;

        const minTotal = Math.floor(Number(area) * minRate * multiplier);
        const maxTotal = Math.floor(Number(area) * maxRate * multiplier);

        setEstimate({ min: minTotal, max: maxTotal });
    };

    return (
        <section className="bg-brand-blue text-white rounded-[2.5rem] overflow-hidden max-w-7xl mx-auto my-24 shadow-2xl" id="estimator">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16">
                    <div className="flex items-center gap-3 text-primary mb-6">
                        <Calculator className="h-8 w-8" />
                        <h2 className="text-3xl font-bold">Floor Cost Estimator</h2>
                    </div>
                    <p className="text-slate-400 mb-8 leading-relaxed">Get an instant estimate for your project. Simply enter the dimensions and select your preferred finish. This helps you understand approximate costs.</p>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Total Area (sq ft)</label>
                                <input
                                    type="number"
                                    value={area}
                                    onChange={(e) => setArea(Number(e.target.value))}
                                    className="w-full bg-slate-800/80 border border-slate-700/50 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                    placeholder="e.g. 5000"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Epoxy System</label>
                                <select
                                    className="w-full bg-slate-800/80 border border-slate-700/50 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                    value={system}
                                    onChange={(e) => setSystem(e.target.value)}
                                >
                                    <option>Self-Leveling (Industrial)</option>
                                    <option>Anti-Static (ESD)</option>
                                    <option>Italian Marble Epoxy Flooring</option>
                                    <option>Metallic Epoxy Flooring</option>
                                    <option>3D-5D Epoxy Flooring</option>
                                    <option>Quotes Epoxy Flooring</option>
                                    <option>Industrial Epoxy Flooring</option>
                                    <option>Flakes Epoxy Flooring</option>
                                    <option>Car Parking Epoxy Flooring</option>
                                    <option>Granual Epoxy Flooring</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-slate-300">Surface Condition</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {["New Concrete", "Minor Cracks", "Highly Damaged"].map((cond) => (
                                    <button
                                        key={cond}
                                        type="button"
                                        onClick={() => setCondition(cond)}
                                        className={`py-3 px-2 border rounded-xl text-sm font-bold transition-all ${condition === cond
                                            ? "border-primary bg-primary/20 text-primary shadow-inner shadow-primary/20"
                                            : "border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                                            }`}
                                    >
                                        {cond}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={calculateEstimate}
                            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 text-lg"
                            type="button"
                        >
                            <Calculator className="h-5 w-5" /> Calculate Estimate
                        </button>
                    </div>
                </div>

                <div className="bg-slate-800/40 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-white/5 relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue rounded-full blur-3xl"></div>

                    <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-inner shadow-primary/20 transform rotate-3">
                            <IndianRupee className="h-10 w-10 -rotate-3" />
                        </div>
                        <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-black">Estimated Budget Range</p>

                        {estimate ? (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full flex flex-col items-center">
                                <div className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
                                    ₹{estimate.min.toLocaleString()} - ₹{estimate.max.toLocaleString()}
                                </div>
                                <p className="text-slate-400 text-sm max-w-xs mb-10 leading-relaxed">This is an approximate range including material and professional application. Tax extra.</p>
                            </div>
                        ) : (
                            <div className="w-full flex flex-col items-center">
                                <div className="text-4xl sm:text-5xl font-black mb-4 tracking-tight text-slate-600">
                                    ₹0.00
                                </div>
                                <p className="text-slate-500 text-sm max-w-xs mb-10 leading-relaxed">Enter your area and requirements to get an instant cost estimation here.</p>
                            </div>
                        )}

                        <div className="w-full p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 text-left shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
                                <span className="text-sm text-slate-300 font-medium">Premium Material Cost Included</span>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
                                <span className="text-sm text-slate-300 font-medium">Surface Preparation Included</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
                                <span className="text-sm text-slate-300 font-medium">Professional Expert Application</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
