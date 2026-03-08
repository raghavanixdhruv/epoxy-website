import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Epoxy Flooring Project 1",
        image: "/gallery/img1.jpeg",
        colSpan: 2
    },
    {
        title: "Epoxy Flooring Project 2",
        image: "/gallery/img2.jpeg",
        colSpan: 1
    },
    {
        title: "Epoxy Flooring Project 3",
        image: "/gallery/img3.jpeg",
        colSpan: 1
    },
    {
        title: "Epoxy Flooring Project 4",
        image: "/gallery/img4.jpeg",
        colSpan: 2
    },
    {
        title: "Epoxy Flooring Project 5",
        image: "/gallery/img5.jpeg",
        colSpan: 1
    },
    {
        title: "Epoxy Flooring Project 6",
        image: "/gallery/img6.jpeg",
        colSpan: 1
    },
];

export default function ProjectsGallery() {
    return (
        <section className="py-24 bg-slate-50" id="gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Projects</h2>
                        <h3 className="text-3xl font-black text-brand-blue">Gallery of Excellence</h3>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-white p-3 rounded-full shadow-sm hover:text-primary transition-colors hover:shadow-md">
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button className="bg-primary p-3 rounded-full text-white shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`group relative overflow-hidden rounded-2xl h-64 ${project.colSpan === 2 ? 'lg:col-span-2' : ''}`}
                        >
                            <img
                                src={project.image}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                alt={project.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <p className="text-white font-bold text-lg">{project.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
