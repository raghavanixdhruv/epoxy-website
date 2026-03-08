import Link from "next/link";
import { CalendarDays, CheckCircle2, Users, HardHat, Beaker, ShieldCheck, Youtube, Facebook, Instagram } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPUhDFQBNv4ibHbjuszlCZtuHM2C3VyK3St53tc0DRueuCZpUu_77ozQn9a298V0Uy6s_bkRTax-zMVewYbUn4SorZtL5u53rKjQwrJ6LrLCCseqZE8-obMTcRCJw86sQcVLL7LI5Syrt5y2MSDH0Lqm3pDBZeSZiYMHGf8euAYI2T2hln-VaLlfQuGxfq4uC1rlPJF0vMToqbGTkyJQgkwbxPNG8JrbvPyXMVAtZydBgAjeGrGstECimkkXvWH2kMKsOx3yW1uQ')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/60 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                        About VISWAKARMA <br /> EPOXY FLOORING
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl font-medium">
                        Defining industry standards through precision engineering and unparalleled floor durability.
                        A division of N A Raghvani and Company.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Legacy</h2>
                            <h3 className="text-3xl md:text-4xl font-black text-brand-blue mb-8 leading-tight">Precision, Durability, Excellence</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                With over a decade of specialized experience, Viswakarma Epoxy Flooring has grown into a recognized leader in providing high-performance industrial and commercial flooring solutions across India. Our commitment to durability ensures that every project withstands the toughest environments, from chemical processing plants to high-traffic retail spaces.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We continuously invest in state-of-the-art equipment and utilize premium-grade resin systems to deliver seamless, hygienic, and aesthetically pleasing surfaces that are engineered to last a lifetime.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-lg border border-white">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATMqRSOwORSRNdh4BpNLPRGVbdSFuSER8QpLQbhHLTP_LeC6yA-LzMTtsJe-yCB7RYajxHjXHTA9N0GpxUM01yZFkIXYkt1liq90UpAGTedy2LaVaI8HQaALfeN6yN35SpMrmKihQhqm4pvF1rg7S8Bac5lWFgaCbHE67zoVxLU44joheRODBjDb1JuJxIKxrqBDcIMoQ6VAOq81aPCn--by0MVMC9abonmTucVeZZvq_vpex7oTiGlysPKyYbI5Bp_9Ukk0K5lA"
                                    alt="Specialized flooring tools"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-lg translate-y-8 border border-white">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuPgaQ8ndh8fkueiMkF2HG9IYob2QVCW06__u-UiBkn9bahp2V0yYKcoSHppOg1Og8rqpWuyMPkOHRXCVYAp_FyeKSNfsUA9pDJug6VWif1dmFmB7YcYXIbODo_glLibg_AQMHjR85dJLd7PazpsiIVgG_OHLP3bWxicB8bwBbZwL3lLCGDYr1uGkJUDQoJNRDPRSzMQGx6Bpobjm4XYC-gURbpeCMA6Ep90auEakMb6tm4RVlNGyLmXacCiLAVJyePihMj5yUGw"
                                    alt="High-gloss epoxy finish"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-brand-blue py-16 border-y border-brand-blue/90">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <CalendarDays className="h-10 w-10 text-primary mb-4" />
                            <p className="text-4xl font-black text-white mb-2">5+</p>
                            <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Years Experience</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                            <p className="text-4xl font-black text-white mb-2">90+</p>
                            <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Projects Completed</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <Users className="h-10 w-10 text-primary mb-4" />
                            <p className="text-4xl font-black text-white mb-2">15+</p>
                            <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Expert Technicians</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-brand-blue mb-4">Our Commitment to Quality</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">We follow a rigorous process to ensure every floor installed by us sets a new benchmark in industrial durability.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                                <HardHat className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-4">Surface Preparation</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Meticulous shot blasting and diamond grinding to establish the strongest possible mechanical bond between the concrete substrate and our coatings.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                                <Beaker className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-4">Premium Materials</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We exclusively utilize industrial-grade, 100% solids epoxy and advanced polyaspartic chemical formulas designed for maximum chemical and impact resistance.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                                <ShieldCheck className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-4">Expert Finishing</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our certified application teams carefully back-roll every layer to guarantee a bubble-free, perfectly leveled, and stunning final surface.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Links Section */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-black text-brand-blue mb-8">Connect With Us</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://youtube.com/@viswakarmaepoxyflooring?si=lm7foyeSuDuqKb3A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FF0000] hover:bg-[#FF0000]/5 transition-colors group"
                        >
                            <Youtube className="h-8 w-8 text-[#FF0000]" />
                            <span className="font-bold text-slate-700 group-hover:text-[#FF0000] transition-colors">YouTube</span>
                        </a>
                        <a
                            href="https://www.facebook.com/Viswakarmaepoxyflooring/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-colors group"
                        >
                            <Facebook className="h-8 w-8 text-[#1877F2]" />
                            <span className="font-bold text-slate-700 group-hover:text-[#1877F2] transition-colors">Facebook</span>
                        </a>
                        <a
                            href="https://www.instagram.com/viswakarma_epoxy_flooring?igsh=MWhnZmQ2c3hwemFoMg%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#E4405F] hover:bg-[#E4405F]/5 transition-colors group"
                        >
                            <Instagram className="h-8 w-8 text-[#E4405F]" />
                            <span className="font-bold text-slate-700 group-hover:text-[#E4405F] transition-colors">Instagram</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20 shadow-sm">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-3">Ready to transform your facility?</h2>
                            <p className="text-slate-600 font-medium">Join 90+ satisfied commercial and industrial clients who trust Viswakarma Epoxy for their critical flooring infrastructure.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                            <Link
                                href="/contact"
                                className="bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-95 transition-all text-center flex items-center justify-center"
                            >
                                Let's Talk
                            </Link>
                            <Link
                                href="/#gallery"
                                className="bg-white border-2 border-slate-200 text-brand-blue font-bold py-4 px-8 rounded-xl hover:border-primary hover:text-primary active:scale-95 transition-all text-center flex items-center justify-center"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
