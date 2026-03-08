import Link from "next/link";
import { Layers, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-blue text-white py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <img
                                src="/brand/logo.jpeg"
                                alt="Viswakarma Epoxy Flooring Logo"
                                className="h-16 w-16 object-cover rounded-full shadow-lg shadow-black/30"
                            />
                            <div className="flex flex-col leading-tight">
                                <span className="text-xl font-black text-white uppercase tracking-tight">Viswakarma</span>
                                <span className="text-xs font-bold text-primary tracking-widest uppercase">Epoxy Flooring</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-6 text-sm leading-relaxed">
                            A unit of N A Raghvani and Company. Delivering premium flooring solutions across India with a focus on durability, safety, and aesthetics.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/catalog" className="hover:text-primary transition-colors">Epoxy Catalog</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+91 8530735613</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>navinraghvaninr@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Jamnagar, Gujarat, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2024 VISWAKARMA EPOXY FLOORING BY N A RAGHVANI AND COMPANY.</p>
                    <p>All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
