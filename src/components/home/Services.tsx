import { Factory, Store, Warehouse, ParkingCircle, Settings, Palette } from "lucide-react";

const services = [
    {
        title: "Industrial Flooring",
        description: "Heavy-duty epoxy coatings designed for high-impact manufacturing units and chemical resistance.",
        icon: Factory,
    },
    {
        title: "Commercial Flooring",
        description: "Sleek, professional, and easy-to-clean finishes for retail stores, showrooms, and offices.",
        icon: Store,
    },

    {
        title: "Parking Lot Flooring",
        description: "Anti-skid, oil-resistant coatings with clear navigation markings for safety and durability.",
        icon: ParkingCircle,
    },

    {
        title: "Decorative Epoxy",
        description: "Creative metallic, 3D, and flake flooring for high-end aesthetic residential or lobby areas.",
        icon: Palette,
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-black text-brand-blue">Premium Flooring Services</h3>
                    <div className="h-1.5 w-24 bg-primary mx-auto mt-6 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-background-light p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-brand-blue">{service.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
