"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Layers } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/brand/logo.jpeg"
                        alt="Viswakarma Epoxy Flooring Logo"
                        className="h-14 w-14 object-cover rounded-full shadow-md"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="text-lg font-black text-brand-blue uppercase tracking-tight">Viswakarma</span>
                        <span className="text-xs font-bold text-primary tracking-widest uppercase">Epoxy Flooring</span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">Home</Link>
                    <Link href="/catalog" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">Catalog</Link>
                    <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">About Us</Link>
                    <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">Contact</Link>
                    <a
                        href="https://wa.me/918530735613"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
                    >
                        Get Quote
                    </a>
                </nav>
                <button
                    className="md:hidden flex items-center justify-center p-2 text-slate-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-primary/10 bg-background-light">
                    <div className="flex flex-col space-y-4 px-4 py-6">
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-700">Home</Link>
                        <Link href="/catalog" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-700">Catalog</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-700">About Us</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-700">Contact</Link>
                        <a
                            href="https://wa.me/918530735613"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 text-center"
                        >
                            Get Quote
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
