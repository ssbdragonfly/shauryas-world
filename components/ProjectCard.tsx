"use client";

import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ProjectDialog } from "./ProjectDialog";

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  title?: string;
}

interface ProjectCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
  mediaItems: MediaItem[];
  fullDescription: string;
}

export function ProjectCard({ 
  Icon, 
  title, 
  description, 
  borderColor, 
  iconColor,
  mediaItems,
  fullDescription 
}: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className={`p-6 bg-black/40 backdrop-blur-lg border ${borderColor} transition-all group hover:scale-105 duration-300`}>
        <Icon className={`w-8 h-8 mb-4 ${iconColor} group-hover:scale-110 transition-transform`} />
        <h3 className="text-xl font-bold mb-2 text-blue-200">{title}</h3>
        <p className="text-blue-100/80 mb-4">{description}</p>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-white/10 hover:bg-white/20 text-blue-200 border-blue-400/50"
          onClick={() => setIsDialogOpen(true)}
        >
          Learn More
        </Button>
      </Card>

      <ProjectDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={title}
        description={fullDescription}
        mediaItems={mediaItems}
      />
    </>
  );
}