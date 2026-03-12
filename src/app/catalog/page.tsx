"use client";

import { useState, useRef } from "react";
import { MessageCircle, Mail, X, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
    id: string;
    name: string;
    description: string;
    image: string;
    images?: string[];
    category: string;
};

const products: Product[] = [
    {
        id: "italian-marble",
        name: "Italian Marble Epoxy Flooring",
        description: "Elegant, seamless finishes mimicking natural Italian marble for luxury spaces.",
        image: "/italian-marble/img1.jpg",
        images: ["/italian-marble/img1.jpg", "/italian-marble/img2.jpg", "/italian-marble/img3.jpg", "/italian-marble/img4.jpg", "/italian-marble/img5.jpg", "/italian-marble/img6.jpg"],
        category: "Decorative",
    },
    {
        id: "metallic-art",
        name: "Metallic Epoxy Flooring",
        description: "High-gloss metallic pigments that create a unique flowing effect for modern lobbies.",
        image: "/metallic-epoxy/img1.jpg",
        images: ["/metallic-epoxy/img1.jpg", "/metallic-epoxy/img2.jpg", "/metallic-epoxy/img3.jpg", "/metallic-epoxy/img4.jpg", "/metallic-epoxy/img5.jpg", "/metallic-epoxy/img6.jpg", "/metallic-epoxy/img7.jpg", "/metallic-epoxy/img8.jpg"],
        category: "Decorative",
    },
    {
        id: "3d-5d-graphic",
        name: "3D-5D Epoxy Flooring",
        description: "Incorporate custom branding or photorealistic 3D/5D art under a high-resistance protective epoxy layer.",
        image: "/3d-5d-epoxy/img1.jpg",
        images: ["/3d-5d-epoxy/img1.jpg", "/3d-5d-epoxy/img2.jpg", "/3d-5d-epoxy/img3.jpg", "/3d-5d-epoxy/img4.jpg", "/3d-5d-epoxy/img5.jpg", "/3d-5d-epoxy/img6.jpg", "/3d-5d-epoxy/img7.jpg", "/3d-5d-epoxy/img8.jpg"],
        category: "Decorative",
    },
    {
        id: "quotes-epoxy",
        name: "Quotes Epoxy Flooring",
        description: "Durable multicolored quartz-aggregate epoxy flooring system suitable for robust commercial spaces.",
        image: "/quotes-epoxy/img1.jpg",
        images: ["/quotes-epoxy/img1.jpg", "/quotes-epoxy/img2.jpg"],
        category: "Industrial",
    },
    {
        id: "industrial-epoxy",
        name: "Industrial Epoxy Flooring",
        description: "Heavy-duty, seamless floor coating ideal for factories, warehouses, and high-traffic industrial environments.",
        image: "/industrial-epoxy/img1.jpg",
        images: ["/industrial-epoxy/img1.jpg", "/industrial-epoxy/img2.jpg", "/industrial-epoxy/img3.jpg", "/industrial-epoxy/img4.jpg", "/industrial-epoxy/img5.jpg", "/industrial-epoxy/img6.jpg", "/industrial-epoxy/img7.jpg", "/industrial-epoxy/img8.jpg", "/industrial-epoxy/img9.jpg"],
        category: "Industrial",
    },
    {
        id: "flakes-epoxy",
        name: "Flakes Epoxy Flooring",
        description: "Decorative and durable flooring with vinyl color flakes broadcast into the epoxy, providing an antiskid surface ideal for garages and commercial spaces.",
        image: "/flakes-epoxy/img1.jpg",
        images: ["/flakes-epoxy/img1.jpg"],
        category: "Decorative",
    },
    {
        id: "car-parking",
        name: "Car Parking Epoxy Flooring",
        description: "High-grade, impact-resistant epoxy systems designed specifically for high-traffic basements and multi-level parking decks.",
        image: "/car-parking-epoxy/img1.jpg",
        images: ["/car-parking-epoxy/img1.jpg", "/car-parking-epoxy/img2.jpg"],
        category: "Industrial",
    },
    {
        id: "granual-epoxy",
        name: "Granual Epoxy Flooring",
        description: "Textured, slip-resistant granulated epoxy finishes suitable for areas requiring extra grip and visual depth.",
        image: "/granual-epoxy/img1.jpg",
        images: ["/granual-epoxy/img1.jpg"],
        category: "Decorative",
    },
];

const categories = ["All Systems", "Industrial", "Decorative"];

export default function CatalogPage() {
    const [activeTab, setActiveTab] = useState("All Systems");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [detailProduct, setDetailProduct] = useState<Product | null>(null);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});
    const touchStartX = useRef<number | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        message: ""
    });

    const filteredProducts = activeTab === "All Systems"
        ? products
        : products.filter(p => p.category === activeTab);

    const handleWhatsAppQuote = (productName: string) => {
        const message = `Hello, I am interested in ${productName} epoxy flooring. Please send quotation and details.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918530735613?text=${encodedMessage}`, '_blank');
    };

    const handleEnquirySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message =
            `Hi Viswakarma Epoxy Flooring Team,

I am interested in ${selectedProduct?.name}. Please find my details below:

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Message: ${formData.message}

Please get in touch with me at the earliest.

Thank you.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918530735613?text=${encodedMessage}`, '_blank');
        setSelectedProduct(null);
    };

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── PRODUCT DETAIL VIEW ── */}
                {detailProduct ? (
                    <div>
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <button
                                onClick={() => setDetailProduct(null)}
                                className="flex items-center gap-2 bg-white border border-slate-200 text-brand-blue font-bold py-2.5 px-5 rounded-xl shadow-sm hover:border-primary hover:text-primary transition-colors"
                            >
                                <ChevronLeft className="h-5 w-5" />
                                Back to Catalog
                            </button>
                        </div>
                        <h2 className="text-3xl font-black text-brand-blue mb-2">{detailProduct.name}</h2>
                        <p className="text-slate-500 mb-8 max-w-2xl">{detailProduct.description}</p>

                        {/* Image Grid */}
                        {(() => {
                            const imgs = detailProduct.images && detailProduct.images.length > 0
                                ? detailProduct.images
                                : [detailProduct.image];
                            return (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                                    {imgs.map((src, i) => (
                                        <div
                                            key={i}
                                            className="group relative aspect-video overflow-hidden rounded-2xl shadow-md cursor-pointer"
                                            onClick={() => setLightboxImg(src)}
                                        >
                                            <img
                                                src={src}
                                                alt={`${detailProduct.name} ${i + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-sm bg-black/50 px-3 py-1.5 rounded-full transition-opacity">View</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })()}

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setSelectedProduct(detailProduct)}
                                className="flex-1 bg-slate-100 text-brand-blue font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
                            >
                                <Mail className="h-5 w-5" /> Send Enquiry
                            </button>
                            <button
                                onClick={() => handleWhatsAppQuote(detailProduct.name)}
                                className="flex-1 bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20bd5a] shadow-lg shadow-green-500/20 transition-colors"
                            >
                                <MessageCircle className="h-5 w-5" /> WhatsApp Quote
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* Header */}
                        <div className="mb-12 text-center md:text-left">
                            <h1 className="text-4xl lg:text-5xl font-black text-brand-blue mb-4">Epoxy Flooring Systems</h1>
                            <p className="text-lg text-slate-600 max-w-2xl">
                                Explore our specialized epoxy flooring systems designed for durability, aesthetics, and safety.
                                Choose a system that fits your requirements and get an instant quote.
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-10 border-b border-slate-200 pb-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`px-5 py-2.5 text-sm font-bold rounded-t-lg transition-all ${activeTab === category
                                        ? "bg-primary/10 text-primary border-b-2 border-primary"
                                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border-b-2 border-transparent"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
                                    onClick={() => {
                                        setDetailProduct(product);
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                >
                                    <div className="aspect-video relative overflow-hidden">
                                        {product.images && product.images.length > 1 ? (
                                            <div
                                                className="relative w-full h-full group/slider"
                                                onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
                                                onTouchEnd={(e) => {
                                                    if (touchStartX.current === null) return;
                                                    const diff = touchStartX.current - e.changedTouches[0].clientX;
                                                    if (Math.abs(diff) > 40) {
                                                        setCurrentImageIndex(prev => ({
                                                            ...prev,
                                                            [product.id]: diff > 0
                                                                ? ((prev[product.id] || 0) + 1) % product.images!.length
                                                                : ((prev[product.id] || 0) - 1 + product.images!.length) % product.images!.length
                                                        }));
                                                    }
                                                    touchStartX.current = null;
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <img
                                                    src={product.images[currentImageIndex[product.id] || 0]}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-700"
                                                />
                                                <button
                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex(prev => ({ ...prev, [product.id]: ((prev[product.id] || 0) - 1 + product.images!.length) % product.images!.length })); }}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity shadow-sm"
                                                >
                                                    <ChevronLeft className="h-4 w-4 text-brand-blue" />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex(prev => ({ ...prev, [product.id]: ((prev[product.id] || 0) + 1) % product.images!.length })); }}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity shadow-sm"
                                                >
                                                    <ChevronRight className="h-4 w-4 text-brand-blue" />
                                                </button>
                                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                                                    {product.images.map((_, i) => (
                                                        <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === (currentImageIndex[product.id] || 0) ? 'bg-white' : 'bg-white/50'}`} />
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        )}
                                        <div className="absolute top-3 right-3">
                                            <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-brand-blue shadow-sm">
                                                {product.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-3 text-brand-blue">{product.name}</h3>
                                        <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                                            {product.description}
                                        </p>
                                        <div className="space-y-3 mt-auto">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                                                className="w-full bg-slate-100 text-brand-blue font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
                                            >
                                                <Mail className="h-4 w-4" />
                                                Send Enquiry
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleWhatsAppQuote(product.name); }}
                                                className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-[#20bd5a] shadow-lg shadow-green-500/20 transition-colors"
                                            >
                                                <MessageCircle className="h-4 w-4" />
                                                WhatsApp Quote
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            {/* Lightbox */}
            {lightboxImg && (
                <div
                    className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setLightboxImg(null)}
                >
                    <button onClick={() => setLightboxImg(null)} className="absolute top-5 right-5 text-white p-2 bg-white/10 rounded-full hover:bg-white/20">
                        <X className="h-6 w-6" />
                    </button>
                    <img src={lightboxImg} alt="Preview" className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain" />
                </div>
            )}

            {/* Enquiry Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-blue/60 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 hover:text-slate-800 transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-2">
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                                <h3 className="text-2xl font-black text-brand-blue">Enquiry Form</h3>
                            </div>
                            <p className="text-slate-500 mb-6 font-medium">Requesting details for <span className="text-primary font-bold">{selectedProduct.name}</span></p>

                            <form onSubmit={handleEnquirySubmit} className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Location</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                        placeholder="City or Site Location"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Message</label>
                                    <textarea
                                        required
                                        className="w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
                                        placeholder="Additional details about your requirement..."
                                        rows={3}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 mt-4 transition-all"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
