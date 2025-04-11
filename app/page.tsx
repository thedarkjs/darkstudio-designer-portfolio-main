'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Brand Identity',
            category: 'branding',
            image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=2940&auto=format&fit=crop',
            description: 'Corporate identity design for tech startup',
        },
        {
            id: 2,
            title: 'UI/UX Design',
            category: 'ui',
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2940&auto=format&fit=crop',
            description: 'Mobile app interface design',
        },
        {
            id: 3,
            title: 'Typography',
            category: 'typography',
            image: 'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?q=80&w=2864&auto=format&fit=crop',
            description: 'Custom typeface for luxury brand',
        },
        {
            id: 4,
            title: 'Web Design',
            category: 'ui',
            image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=2864&auto=format&fit=crop',
            description: 'E-commerce platform redesign',
        },
        {
            id: 5,
            title: 'Motion Graphics',
            category: 'motion',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop',
            description: 'Product launch animation',
        },
        {
            id: 6,
            title: 'Print Design',
            category: 'print',
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2942&auto=format&fit=crop',
            description: 'Editorial design for art magazine',
        },
    ];

    const filteredProjects =
        activeTab === 'all'
            ? projects
            : projects.filter((project) => project.category === activeTab);

    return (
        <div
            className={`min-h-screen bg-black text-white font-light transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Navigation */}
            <nav className="fixed w-full z-10 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <div className="text-xl font-medium tracking-tighter">
                        <span className="text-white">DARK</span>
                        <span className="text-zinc-500">STUDIO</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm">
                        <a
                            href="#work"
                            className="text-white hover:text-zinc-400 transition-colors"
                        >
                            WORK
                        </a>
                        <a
                            href="#about"
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#process"
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#contact"
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            CONTACT
                        </a>
                    </div>
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-black/95 border-b border-zinc-800 absolute w-full">
                        <div className="flex flex-col space-y-6 py-8 px-6 text-sm">
                            <a
                                href="#work"
                                className="text-white hover:text-zinc-400 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                WORK
                            </a>
                            <a
                                href="#about"
                                className="text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                ABOUT
                            </a>
                            <a
                                href="#process"
                                className="text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                PROCESS
                            </a>
                            <a
                                href="#contact"
                                className="text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                CONTACT
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[url(/images/1vP5.jpeg)] bg-[0%_0%] h-[800px] bg-cover bg-center bg-no-repeat">
                <div className="max-w-7xl mx-auto mt-0 right-auto bottom-auto absolute left-[72px] top-[272px] font-aboreto">
                    <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6 tracking-tighter text-start">
                        Crafting digital <br />
                        <span className="text-zinc-500">experiences with purpose</span>
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-8 mt-12">
                        <p className="text-xl text-zinc-400 max-w-xl">
                            Independent designer specializing in brand identity, user interfaces,
                            and digital experiences that connect with audiences.
                        </p>
                        <div className="h-px md:h-16 md:w-px bg-zinc-800 flex-shrink-0"></div>
                        <a href="#contact" className="group flex items-center gap-2 text-white">
                            <span className="text-lg">Let us collaborate</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                →
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Work Section */}
            <section id="work" className="py-20 px-6 bg-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                        <h2 className="text-3xl font-light tracking-tight">Selected Work</h2>
                        <div className="flex gap-6 mt-6 md:mt-0 text-sm">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`${activeTab === 'all' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
                            >
                                ALL
                            </button>
                            <button
                                onClick={() => setActiveTab('branding')}
                                className={`${activeTab === 'branding' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
                            >
                                BRANDING
                            </button>
                            <button
                                onClick={() => setActiveTab('ui')}
                                className={`${activeTab === 'ui' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
                            >
                                UI/UX
                            </button>
                            <button
                                onClick={() => setActiveTab('motion')}
                                className={`${activeTab === 'motion' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
                            >
                                MOTION
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden bg-zinc-800 aspect-square"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 left-[9px] -top-[239px]">
                                    <p className="w-[30px] h-[30px]"></p>
                                    <h3 className="text-xl font-medium">{project.title}</h3>
                                    <p className="text-zinc-400 mt-2">{project.description}</p>
                                    <a href="#" className="mt-4 inline-flex items-center text-sm">
                                        <span>View Project</span>
                                        <span className="ml-2">→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-light tracking-tight mb-8">About</h2>
                            <p className="text-zinc-400 mb-6">
                                With over a decade of experience in design, I have collaborated with
                                startups, agencies, and established brands to create meaningful
                                digital experiences.
                            </p>
                            <p className="text-zinc-400 mb-6">
                                My approach combines strategic thinking with meticulous attention to
                                detail, ensuring that every project not only looks exceptional but
                                also achieves its business objectives.
                            </p>
                            <p className="text-zinc-400">Based in Berlin, working globally.</p>
                        </div>
                        <div className="bg-zinc-900 p-8">
                            <h3 className="text-xl mb-6">Expertise</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>Brand Identity</span>
                                        <span className="text-zinc-500">95%</span>
                                    </div>
                                    <div className="h-1 bg-zinc-800 w-full">
                                        <div className="h-1 bg-white w-[95%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>UI/UX Design</span>
                                        <span className="text-zinc-500">90%</span>
                                    </div>
                                    <div className="h-1 bg-zinc-800 w-full">
                                        <div className="h-1 bg-white w-[90%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>Typography</span>
                                        <span className="text-zinc-500">85%</span>
                                    </div>
                                    <div className="h-1 bg-zinc-800 w-full">
                                        <div className="h-1 bg-white w-[85%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>Motion Design</span>
                                        <span className="text-zinc-500">80%</span>
                                    </div>
                                    <div className="h-1 bg-zinc-800 w-full">
                                        <div className="h-1 bg-white w-[80%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-20 px-6 bg-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-light tracking-tight mb-12">Design Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="border-t border-zinc-700 pt-6">
                            <span className="text-zinc-500 text-sm">01</span>
                            <h3 className="text-xl mt-2 mb-4">Discovery</h3>
                            <p className="text-zinc-400">
                                Understanding your business, audience, and objectives to establish a
                                solid foundation.
                            </p>
                        </div>
                        <div className="border-t border-zinc-700 pt-6">
                            <span className="text-zinc-500 text-sm">02</span>
                            <h3 className="text-xl mt-2 mb-4">Strategy</h3>
                            <p className="text-zinc-400">
                                Developing a clear roadmap that aligns design decisions with your
                                business goals.
                            </p>
                        </div>
                        <div className="border-t border-zinc-700 pt-6">
                            <span className="text-zinc-500 text-sm">03</span>
                            <h3 className="text-xl mt-2 mb-4">Design</h3>
                            <p className="text-zinc-400">
                                Creating thoughtful, purposeful designs that solve problems and
                                engage users.
                            </p>
                        </div>
                        <div className="border-t border-zinc-700 pt-6">
                            <span className="text-zinc-500 text-sm">04</span>
                            <h3 className="text-xl mt-2 mb-4">Implementation</h3>
                            <p className="text-zinc-400">
                                Bringing designs to life with attention to detail and technical
                                excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-light tracking-tight mb-8">
                                Let us Work Together
                            </h2>
                            <p className="text-zinc-400 mb-8">
                                Interested in collaborating? I am currently available for select
                                projects. Let us create something exceptional together.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                                        <span>✉</span>
                                    </div>
                                    <a
                                        href="mailto:hello@noirstudio.com"
                                        className="text-zinc-400 hover:text-white transition-colors"
                                    >
                                        hello@darkstudio.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                                        <span>☎</span>
                                    </div>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-zinc-400 hover:text-white transition-colors"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                        </div>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm text-zinc-500 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-zinc-500 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm text-zinc-500 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
                                ></textarea>
                            </div>
                            <button className="px-8 py-3 bg-white text-black hover:bg-zinc-200 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="text-xl font-medium tracking-tighter mb-6 md:mb-0">
                        <span className="text-white">DARK</span>
                        <span className="text-zinc-500">STUDIO</span>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                            Instagram
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                            Dribbble
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                            Behance
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-800 text-zinc-500 text-sm">
                    © {new Date().getFullYear()} NOIR STUDIO. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
