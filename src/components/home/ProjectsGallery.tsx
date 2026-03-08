import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Auto Showroom, Mumbai",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_hIOziXCrrT-HR1n0e6SqkxrZio3s-rIRASw3wUQVkucbHMsSKy9AldmxGrmM8ZE6J9N_2eNOPHfywJ4mPgWtcOWxxorbYyw4NctM2PbvY5FOWHQRzgs3a7HGfhYh7xuvK_gBO5Hx2WODq2oTtpBhnXfWJIJHDyfMpkuJgYr3wGRsFqo1DkLqXCRnGEnCj6pd9Ev-2f8WWQRWuw31XWPaITKtWtRrcZ_U1a1DIsn4kXvzdL7mnGCU2ympKFfv7EyuVtR5fA4uw",
        colSpan: 1
    },
    {
        title: "Chemical Factory, Gujarat",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-a2pm9-NjReG52Y5OdOPVp9sYfSw7Eke7o_OOr9ujgO-3-XnC90It3kOPlRJSY63Oy05PTU79cmc_bGuUQnvWrxC-kQAe25evgyBvO55BO1VsV1GCh-QoPuM7JBeFf0C8JA2RKsPc3_Z0QLWQEplpBlG2eK4E_mg4s13bh4Q74B8ph9LXTgBm6hIpGupdAi-xCD24IBbMBbb1g5q6VXjVkAXUTAnBL2jB45MWEsN9sr6KedOagDdwTWfrHf3doMjEQwfrREHgdQ",
        colSpan: 2
    },
    {
        title: "Office Lobby, Pune",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbL_ZXrZ-ixUsoGctSunCN5r-mauMZgQ6onYLaw4baRIp2_lRJLYZ-_dGghQUcw11kf-uEAjk7PgC99FHQTtpiKEknQ-sv_5vd2Y6ojPxOCZkrVJPtlPrm4GeQViCPg1-TYxVABOl79AYgZlLlcopbIuVraPFAwCgorApIW40H0Ma9uuuIkxonxwT0qDZar2mRWP9AcDw8TdEcz-oAjpFpzFaC6JsIIBFbBjxezmuRI7igTPfzpPgLuCvZpJPtAp5Htb7d-YQQTg",
        colSpan: 1
    },
    {
        title: "Multilevel Parking, Bangalore",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPJfiDm6HqHtge6D8seotsWWRXRrOcWbjVj8CX-9YLxiEd300W6NrvpO70m73biFSHZrU8riEVt9YfEnVXDputd2rpdd1SJtwor7bspJBDGHT0RKn6tgb0Fb9bkg7jhkOfNnaBYt_K2F6Lb3BFHPUvFbqVZOD2-KdgPJKOQmjDqDmyyo2mlqudY59-He2BhXNNky6GuktvrE_5iXZB-hYxn4Src12RQb4n_0-6jvjY_FlVa6XmBG7alxnqhuK-65lp9SOBbW9ipw",
        colSpan: 2
    },
    {
        title: "Food Processing Plant, Nashik",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQSBSUnIRsBqlhlhbbGymnINUQid_I2AXVtOQK2dFCqBL-SOrBQfbpN3RVNkxxzXEd5o2BpMWvHpBrPAJVtK-AMCNkhOBIp60i4GSBeZzEVVcDsO7gRVe1lUaRpf2Hp-ZzgqK8ICUs6YrW-zIHhv9vvaPsfFniA0xiZpgp5avcdOjuWkhLMTq_PDRfK3zqC8ZaD8Plfab24HW9OMPj-Q_2Rz_qW28t403U3DLugtnwx-PNJP22fzYYGeZ-abXpPYCPAXNsuoYHXA",
        colSpan: 2
    }
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
