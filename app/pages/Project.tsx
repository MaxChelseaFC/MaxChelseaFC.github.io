import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.section
            className="flex flex-col gap-6 p-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-2xl font-bold mb-4">Projets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj) => (
                    <Link
                        to={`/projects/${proj.id}`}
                        key={proj.id}
                        className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                            <div className="bg-gray-200 h-40 flex items-center justify-center">
                                {proj.image ? (
                                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-gray-500">Image</span>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                                <p className="text-gray-700">{proj.description}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </motion.section>
    );
}