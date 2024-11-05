"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Calculator, Rocket } from "lucide-react";
import { StarField } from "@/components/StarField";
import { SocialLinks } from "@/components/SocialLinks";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-purple-950 text-white overflow-hidden relative">
      <StarField />

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Shaurya's World
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            High School Machine Learning Researcher | Competitive Mathematician | Software Engineer
          </p>
          <SocialLinks />
        </motion.div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <ExpertiseCard
            Icon={GraduationCap}
            title="ML Research"
            description="Conducting cutting-edge machine learning research with a focus on practical applications and innovative solutions."
            borderColor="border-blue-500/20 hover:border-blue-500/40"
            iconColor="text-blue-400"
          />
          <ExpertiseCard
            Icon={Calculator}
            title="Competitive Math"
            description="Problem-solving enthusiast with achievements in mathematical competitions and olympiads."
            borderColor="border-purple-500/20 hover:border-purple-500/40"
            iconColor="text-purple-400"
          />
          <ExpertiseCard
            Icon={Code2}
            title="Software Engineering"
            description="Building robust and scalable applications with modern technologies and best practices."
            borderColor="border-blue-500/20 hover:border-blue-500/40"
            iconColor="text-blue-400"
          />
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              Icon={Rocket}
              title="ML Project 1"
              description="Description of your groundbreaking machine learning research project."
              borderColor="border-blue-500/20 hover:border-blue-500/40"
              iconColor="text-blue-400"
            />
            <ProjectCard
              Icon={Code2}
              title="Software Project 1"
              description="Overview of an impressive software engineering project you've built."
              borderColor="border-purple-500/20 hover:border-purple-500/40"
              iconColor="text-purple-400"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}