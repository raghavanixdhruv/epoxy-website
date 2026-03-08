import Link from "next/link";
import { Images, FileText } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCc0reNgOn6X8vHWPkV1uHlMVxvLgVy0RmRWh65U-rPD_ZlB31WmHFzvMjsN7CELQFKMT-5BF5sII5L4v597bYvpQ1hadFn2wGHSAW0wRyCV_rjfxJukPvQyFcjHM052fjKIpV_dCK1K28XOZHmjF-K0iuE7fVkHPQ0jKlZ318RnXv_UR4xd9BTFByKi0MmxDXQtRzXOFvar_66GXZ9wwbhI8czpEfOYx_WPT3BBdKNpp540SmcUw0OpCC9fWx96kS9hF6XD6H9EQ')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="max-w-3xl">
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-white bg-primary rounded-full shadow-lg">
                        By N A Raghvani and Company
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
                        Viswakarma <br /><span className="text-primary">Epoxy Flooring</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 font-medium">
                        Strong, Durable & Professional Epoxy Flooring Solutions for Industrial and Commercial Spaces.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/catalog"
                            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                        >
                            <Images className="h-5 w-5" />
                            View Epoxy Catalog
                        </Link>
                        <Link
                            href="#enquiry"
                            className="flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-lg font-bold text-white hover:bg-white/20 active:scale-95 transition-all"
                        >
                            <FileText className="h-5 w-5" />
                            Get Free Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
