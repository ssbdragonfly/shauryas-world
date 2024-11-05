"use client";

import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ExpertiseCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
}

export function ExpertiseCard({ Icon, title, description, borderColor, iconColor }: ExpertiseCardProps) {
  return (
    <Card className={`p-6 bg-black/40 backdrop-blur-lg ${borderColor} transition-all`}>
      <Icon className={`w-12 h-12 mb-4 ${iconColor}`} />
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </Card>
  );
}