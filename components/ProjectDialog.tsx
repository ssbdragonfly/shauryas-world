"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  title?: string;
}

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  mediaItems: MediaItem[];
}

export function ProjectDialog({ isOpen, onClose, title, description, mediaItems }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-black/90 border-blue-500/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-200">{title}</DialogTitle>
        </DialogHeader>
        <div className="text-blue-100/80 mb-6">{description}</div>
        
        <Carousel className="w-full relative">
        <CarouselContent>
            {mediaItems?.map((item, index) => (
            <CarouselItem key={index}>
                {item.type === 'image' ? (
                <div className="relative aspect-video">
                    <Image
                    src={item.url}
                    alt={item.title || title}
                    fill
                    className="object-cover rounded-lg"
                    />
                </div>
                ) : (
                <iframe
                    className="w-full aspect-video rounded-lg"
                    src={item.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                )}
                {item.title && (
                <p className="text-center text-blue-200 mt-2">{item.title}</p>
                )}
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
