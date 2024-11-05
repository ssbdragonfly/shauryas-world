"use client";

import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
}

export function ProjectCard({ Icon, title, description, borderColor, iconColor }: ProjectCardProps) {
  return (
    <Card className={`p-6 bg-black/40 backdrop-blur-lg ${borderColor} transition-all`}>
      <Icon className={`w-8 h-8 mb-4 ${iconColor}`} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Button variant="outline" size="sm">
        Learn More
      </Button>
    </Card>
  );
}