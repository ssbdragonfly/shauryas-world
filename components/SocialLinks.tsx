"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function SocialLinks() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex justify-center gap-4 mt-8"
    >
      <Button 
        variant="outline" 
        size="lg" 
        className="bg-white/10 hover:bg-white/20 text-blue-200 border-blue-400/50"
        onClick={() => window.open('https://github.com/ssbdragonfly', '_blank')}
      >
        <Github className="mr-2 h-5 w-5" />
        GitHub
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        className="bg-white/10 hover:bg-white/20 text-blue-200 border-blue-400/50"
        onClick={() => window.open('https://www.linkedin.com/in/shaurya-bisht-6857732b1/', '_blank')}
      >
        <Linkedin className="mr-2 h-5 w-5" />
        LinkedIn
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        className="bg-white/10 hover:bg-white/20 text-blue-200 border-blue-400/50"
        onClick={() => window.location.href = 'mailto:bishtshaurya314@gmail.com'}
      >
        <Mail className="mr-2 h-5 w-5" />
        Contact
      </Button>
    </motion.div>
  );
}