"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <Button variant="outline" size="lg" className="hover:bg-blue-900/20">
        <Github className="mr-2 h-5 w-5" />
        GitHub
      </Button>
      <Button variant="outline" size="lg" className="hover:bg-blue-900/20">
        <Linkedin className="mr-2 h-5 w-5" />
        LinkedIn
      </Button>
      <Button variant="outline" size="lg" className="hover:bg-blue-900/20">
        <Mail className="mr-2 h-5 w-5" />
        Contact
      </Button>
    </div>
  );
}