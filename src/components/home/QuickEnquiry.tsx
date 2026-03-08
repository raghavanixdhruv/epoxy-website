"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function QuickEnquiry() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        service: "Industrial Flooring",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `*New Quick Enquiry*
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Service: ${formData.service}`;
        const encodedMessage = encodeURIComponent(msg);
        window.open(`https://wa.me/918530735613?text=${encodedMessage}`, '_blank');
        setFormData({ name: "", phone: "", location: "", service: "Industrial Flooring", message: "" });
    };

    return (
        <section className="py-24 bg-white" id="enquiry">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <h3 className="text-3xl font-black mb-6 text-brand-blue">Quick Enquiry</h3>
                        <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                            Ready to transform your floors? Fill out the form and our technical experts will get back to you with a customized quote and site visit plan.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div className="font-bold text-slate-800">+91 8530735613</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div className="font-bold text-slate-800">navinraghvaninr@gmail.com</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div className="font-bold text-slate-800">Jamnagar, Gujarat, India</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/3">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 shadow-xl">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    className="rounded-xl border-slate-200 bg-white py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="Enter Full Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="rounded-xl border-slate-200 bg-white py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="Enter Contact Number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Project Location</label>
                                <input
                                    type="text"
                                    required
                                    className="rounded-xl border-slate-200 bg-white py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="City or Site Location"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Service Required</label>
                                <select
                                    className="rounded-xl border-slate-200 bg-white py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option>Industrial Flooring</option>
                                    <option>Commercial Flooring</option>
                                    <option>Warehouse Flooring</option>
                                    <option>Parking Lot Flooring</option>
                                    <option>Decorative Epoxy</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Your Message</label>
                                <textarea
                                    required
                                    className="rounded-xl border-slate-200 bg-white py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                    placeholder="Tell us about your project requirements..."
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="md:col-span-2 bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2"
                            >
                                <Send className="h-5 w-5" />
                                Send Enquiry Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
