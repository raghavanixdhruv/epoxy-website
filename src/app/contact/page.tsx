"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `*New Contact Request*
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;
        const encodedMessage = encodeURIComponent(msg);
        window.open(`https://wa.me/918530735613?text=${encodedMessage}`, '_blank');
        setFormData({ name: "", phone: "", message: "" });
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-brand-blue">
                    <div
                        className="w-full h-full bg-cover bg-center opacity-40 mix-blend-overlay"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdhBPbffG8x0xfgFBfcZg5q_3xmSnxh2CNmFL8RHY-ej0EGVRO7ib-Y9-xLk_5jjDHV19fpw2F889SdbMURqb3aaV6PKigAvsjmfDUSd85EnxI2R95a1himoe72_yYoArkN2z9A46E_Zgl39AfHVhi6i36EMMop7Wui6IRtrHaB-MAM1Jtn9G_pQVqXcX2sTWCbK9fDJqkBip9djQ7V0Bwxr2-P9UG1ItXRRhwN1PPcYhzeobTFUNLg1CE2JReXB9xW9DoH2tikQ')" }}
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center w-full">
                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 uppercase tracking-tight">
                        Get in Touch
                    </h1>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Professional flooring solutions for industrial and commercial spaces. Reach out for a free consultation and quote.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="flex flex-col space-y-12">
                            <div>
                                <h2 className="text-3xl font-black tracking-tight text-brand-blue mb-6">Contact Information</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:border-primary/30 transition-colors">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</h3>
                                            <p className="text-brand-blue font-black text-lg">+91 8530735613</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:border-primary/30 transition-colors">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Email</h3>
                                            <p className="text-brand-blue font-bold text-sm break-all">navinraghvaninr@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Action */}
                            <a
                                href="https://wa.me/918530735613"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between rounded-2xl bg-[#25D366] p-8 text-white shadow-xl shadow-green-500/20 active:scale-[0.98] transition-all"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                                        <MessageSquare className="h-8 w-8 fill-current" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-1">Chat on WhatsApp</h4>
                                        <p className="text-white/90 font-medium">Get an instant response from our team</p>
                                    </div>
                                </div>
                            </a>

                            {/* Map Placeholder */}
                            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white p-2">
                                <div className="h-[250px] bg-slate-100 rounded-xl relative flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                                        <p className="font-bold text-slate-600 text-lg">Viswakarma Epoxy</p>
                                        <p className="text-sm text-slate-500 mt-1">Serving Maharashtra, Gujarat & Surrounding Regions</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-black text-brand-blue mb-2">Send Us a Message</h3>
                            <p className="text-slate-500 mb-8">We usually respond to all inquiries within 24 hours.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-4 focus:border-primary focus:ring-primary outline-none transition-colors"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-4 focus:border-primary focus:ring-primary outline-none transition-colors"
                                        placeholder="+91"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Requirement Details</label>
                                    <textarea
                                        required
                                        className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-4 focus:border-primary focus:ring-primary outline-none transition-colors resize-none"
                                        rows={5}
                                        placeholder="Tell us about your project area, type of flooring etc."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-primary py-4 text-center text-lg font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="h-5 w-5" />
                                    Contact Us
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
