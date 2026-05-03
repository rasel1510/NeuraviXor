import Web_Developement_Pic from "../images/Landing Service/Web Developer Pic.jpg";

const WebDevelopment = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            {/* Banner Section */}
            <div
                className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${Web_Developement_Pic})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark Overlay */}
               <div className="absolute inset-0 bg-black/50"></div>


                {/* Text Content */}
                <div className="relative z-10 flex flex-col justify-center h-full px-10">
                    <h1 className="text-4xl  text-center md:text-5xl font-bold text-white mb-4">
                        Web Development Services
                    </h1>
                   
                </div>
            </div>

            {/* Technologies Section */}
            <div className="mt-16">
                <h2 className="text-3xl text-orange-400 text-center font-bold mb-6">
                    Tools & Technologies
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Frontend",
                            items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js", "Next.js"],
                        },
                        {
                            title: "Backend",
                            items: ["Node.js", "Express.js", "Python", "Flask", "Django"],
                        },
                        {
                            title: "Database",
                            items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
                        },
                    ].map((block, i) => (
                        <div key={i} className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border border-transparent dark:border-zinc-700">
                            <h3 className="font-bold text-lg text-black dark:text-white mb-3">{block.title}</h3>
                            <ul className="text-sm text-gray-800 dark:text-gray-300 space-y-1">
                                {block.items.map((item, idx) => (
                                    <li className="hover:text-orange-500 transition-colors" key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>


             {/* Skilled Developers Section */}
            <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

                {/* Left Image */}
                <div>
                    <img
                        src={Web_Developement_Pic}
                        alt="Skilled Web Developers"
                        className="rounded-xl shadow-lg h-96 w-full object-cover dark:opacity-80 transition-all"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">
                        Skilled & Experienced Developers
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Our team consists of highly skilled web developers with deep expertise
                        in modern frontend, backend, and full-stack technologies. We follow
                        industry best practices to ensure performance, scalability, and security.
                    </p>

                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li>✔ 3+ Years Industry Experience</li>
                        <li>✔ Clean, Scalable & Maintainable Code</li>
                        <li>✔ Agile Development & Rapid Delivery</li>
                        <li>✔ Strong UI/UX & Performance Optimization</li>
                        <li>✔ Dedicated Support & Continuous Improvement</li>
                    </ul>
                </div>
            </div>


            {/* Advanced Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                    Advanced Capabilities
                </h2>

                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>✔ REST & GraphQL API Integration</li>
                    <li>✔ Authentication & Authorization (JWT, OAuth)</li>
                    <li>✔ SEO Optimization & Performance Tuning</li>
                    <li>✔ Responsive & Mobile-First Design</li>
                    <li>✔ Deployment (Netlify, Vercel, Hostinger, VPS)</li>
                </ul>
            </div>



           

        </section>



    );
};

export default WebDevelopment;