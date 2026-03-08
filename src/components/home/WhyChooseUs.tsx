import { ShieldCheck, Clock, Medal } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-brand-blue text-white overflow-hidden" id="why-us">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
                        <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Unmatched Quality & Industry Expertise</h3>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                            N A Raghvani and Company brings decades of structural and finishing expertise to every project. We don't just coat floors; we engineer them for longevity.
                        </p>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                    <ShieldCheck className="h-7 w-7 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Premium Grade Resins</h4>
                                    <p className="text-slate-400">We use only high-performance industrial-grade epoxy and polyaspartic resins.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                    <Clock className="h-7 w-7 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Fast Turnaround</h4>
                                    <p className="text-slate-400">Optimized installation processes to minimize business downtime.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                    <Medal className="h-7 w-7 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Certified Team</h4>
                                    <p className="text-slate-400">Our technicians are professionally trained in surface prep and application.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl"></div>
                        <img
                            alt="Technical flooring work"
                            className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                            src="/why-choose-us.avif"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
