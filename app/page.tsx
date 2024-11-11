"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { StarField } from "@/components/StarField";
import { Code2, Rocket, Brain, Coffee, ChevronDown, Shield, Code, Server, Building, Globe} from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { TypeAnimation } from 'react-type-animation';

type MediaItem = {
  type: "video" | "image";
  url: string;
  title: string;
};

export default function Home() {
  const { toast } = useToast();
  const [visibleProjects, setVisibleProjects] = useState(4);
  const projects: Array<{
    Icon: any;
    title: string;
    description: string;
    borderColor: string;
    iconColor: string;
    fullDescription: string;
    mediaItems: MediaItem[];
  }> = [
    {
      Icon: Building,
      title: "CitySwipe",
      description: "A novel, AI-powered, all in one web app for everything travel.",
      borderColor: "border-green-500/20 hover:border-green-500/40",
      iconColor: "text-green-400",
      fullDescription: "CitySwipe is a web app that helps users find their perfect vacation destination by matching them with vacation spots based on their preferences. The app aims to provide a fun, engaging, and personalized experience for users while learning about new places and cultures. Create itineraries, book flights and hotels, match with cities, share with friends. Hackathon win (1st) against 550 other teams. I'm a founder at CitySwipe and have worked on the backend, frontend, and AI. I've personally met with VCs, founders, and users to get feedback and improve the product.",
      mediaItems: [
        {
          type: 'video',
          url: 'https://www.youtube.com/watch?app=desktop&v=ey7WtMHERh4',
          title: 'Cityswipe Original Demo'
        },
        {
          type: 'image',
          url: 'https://cloud-llntdb02c-hack-club-bot.vercel.app/0screenshot_2024-09-15_at_9.36.38___am.png',
          title: 'Landing Page'
        },
        {
          type: 'image',
          url: 'https://cloud-cwfck7qm6-hack-club-bot.vercel.app/0screenshot_2024-11-06_at_8.19.37___pm.png',
          title: 'Itiniary'
        },
        {
          type: 'image',
          url: 'https://cloud-gkmae6oh7-hack-club-bot.vercel.app/0screenshot_2024-10-15_at_12.07.30___pm.png',
          title: 'Meeting with VC'
        }
      ]
    },
    {
      Icon: Globe,
      title: "Globetrotter",
      description: "Your personalized voice AI travel advisor",
      borderColor: "border-blue-500/20 hover:border-blue-500/40",
      iconColor: "text-blue-400",
      fullDescription: "Globetrotter is a personalized AI voice assistant for travel advising. It helps users plan their trips, book flights, hotels, and activities, and get real-time updates on their travel itinerary. The app uses advanced natural language processing and machine learning algorithms to understand user preferences and provide tailored recommendations. With Globetrotter, users can enjoy a seamless and stress-free travel experience, making the most of their time and budget. I worked on the backend of Globetrotter and helped with the integration of AI technologies. This was another hackathon win (with over 100 teams), and I'm proud of the work we did.",
      mediaItems: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/qBx5lv9wzQc',
          title: 'Globetrotter Demo'
        }
      ]
    },
    {
      Icon: Rocket,
      title: "Jelly-Up",
      description: "Platform for AI Video Transcribing (Talked to founder of Venmo!)",
      borderColor: "border-gray-500/20 hover:border-gray-500/40",
      iconColor: "text-white",
      fullDescription: "A hearing disability inclusive short form social media platform commended by Venmo Founder + JellyJelly Founder revolutionizing video transcribing R&D in the works with automatic sentiment based tools for video editing. Made this at another hackathon with 2 others, winning against over 100 teams. I worked on the backend of Jelly-Up and helped with the integration of AI technologies. This was one of the coolest experiences I've had because I literally talked to the founder of Venmo because of this project!",
      mediaItems: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/FFD6WgswRvg&t',
          title: 'Jelly-Up Demo'
        },
        {
          type: 'image',
          url: 'https://cloud-iuinbdrji-hack-club-bot.vercel.app/0image.png',
          title: 'Architecture'
        }
      ]
    },
    {
      Icon: Brain,
      title: "Expire-E",
      description: "A Smart Expiration Alert System",
      borderColor: "border-red-500/20 hover:border-red-500/40",
      iconColor: "text-red-400",
      fullDescription: "Expire-E was developed during the Phoenix Hackathon, where our team secured over $300 in prizes for our second-place finish. Expire-E is an innovative software designed to alert users about food item expirations. Users can input text or images (via LogMeal API). Once identified, our custom autocorrect confirms the item. Users then specify the storage location, and a notification system reminds them when the food nears expiry. Additionally, we implemented a nutrition assessment to evaluate the meal's proteins, sugars, sodium, carbohydrates, and fats, providing feedback for healthier meal choices.",
      mediaItems: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/vFZMirE9xl8',
          title: 'Expire-E Demo'
        },
        {
          type: 'image',
          url: 'https://cloud-fcal0vst1-hack-club-bot.vercel.app/0expire-e1.png',
          title: 'Expire-E Interface'
        },
        {
          type: 'image',
          url: 'https://cloud-fcal0vst1-hack-club-bot.vercel.app/1expire-e2.jpg',
          title: 'Expire-E in Action'
        }
      ]
    },
    {
      Icon: Coffee,
      title: "INVESTigator",
      description: "A Community-Driven Investigation Platform",
      borderColor: "border-purple-500/20 hover:border-purple-500/40",
      iconColor: "text-purple-400",
      fullDescription: "INVESTigator was inspired by the common missing person posters we see in our communities. This innovative platform leverages the power of community engagement and AI to assist in locating missing individuals. It features a user-friendly interface for reporting and tracking cases, AI-powered image analysis for identifying potential matches, and a robust notification system to keep the community informed and involved.",
      mediaItems: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/0MBFJZqZQc0',
          title: 'INVESTigator Demo'
        },
        {
          type: 'image',
          url: 'https://cloud-m70r6fltj-hack-club-bot.vercel.app/0investi-gator.png',
          title: 'INVESTigator Dashboard'
        },
        {
          type: 'image',
          url: 'https://cloud-m70r6fltj-hack-club-bot.vercel.app/1investi-gator1.jpg',
          title: 'Case Reporting Interface'
        },
        {
          type: 'image',
          url: 'https://cloud-m70r6fltj-hack-club-bot.vercel.app/2investi-gator2.jpg',
          title: 'AI Image Analysis'
        },
        {
          type: 'image',
          url: 'https://cloud-m70r6fltj-hack-club-bot.vercel.app/3investi-gator3.jpg',
          title: 'INVESTigator Dashboard'
        },
        {
          type: 'image',
          url: 'https://cloud-m70r6fltj-hack-club-bot.vercel.app/4investi-gator4.jpg',
          title: 'Case Reporting Interface'
        },
        {
          type: 'image',
          url: 'https://cloud-m70r6fltj-hack-club-bot.vercel.app/5investi-gator5.jpg',
          title: 'INVESTigator Dashboard'
        },
        {
          type: 'image',
          url: 'https://cloud-m70r6fltj-hack-club-bot.vercel.app/6investi-gator6.jpg',
          title: 'Case Reporting Interface'
        }
      ]
    },
    {
      Icon: Code,
      title: "JavaChess",
      description: "A Java-based Chess Engine",
      borderColor: "border-green-500/20 hover:border-green-500/40",
      iconColor: "text-green-400",
      fullDescription: "JavaChess is a sophisticated chess engine implemented entirely in Java. It features a powerful AI opponent, move validation, and a user-friendly graphical interface. The engine uses advanced algorithms for move generation and evaluation, providing a challenging experience for players of all skill levels.",
      mediaItems: [
        {
          type: 'image',
          url: 'https://cloud-2mon4yzwv-hack-club-bot.vercel.app/0javachess.png',
          title: 'JavaChess'
        }
      ]
    },
    {
      Icon: Shield,
      title: "K9Shield",
      description: "Protecting the Man's Best Friend with AI",
      borderColor: "border-pink-500/20 hover:border-pink-500/40",
      iconColor: "text-pink-400",
      fullDescription: "K9Shield was the first free canine disease diagnosis application. My team and I created it during HackTJ (one of the largest in-person high schooler run hackathons, over 500 students, I am now a part of <15 person team running it). It uses Machine Learning image classification and algorithmic processes to diagnose risk factors for canine diseases. Sidh: Right now, there are 471 million pet canines, and yet, no method exists for their immediate health classification. This application is a step in the right direction, and will help pet owners and veterinarians to better understand using software to help canines. The project was even endorsed by a local veterinarian!",
      mediaItems: [
        {
          type: 'image',
          url: 'https://cloud-2mon4yzwv-hack-club-bot.vercel.app/1k9shield.png',
          title: 'K9Shield Logo'
        },
      ]
    },
    {
      Icon: Server,
      title: "Tray-API",
      description: "Streamlined Food Ordering API",
      borderColor: "border-orange-500/20 hover:border-orange-500/40",
      iconColor: "text-orange-400",
      fullDescription: "Tray-API is a robust and scalable API designed to streamline the food ordering process for restaurants and delivery services. It provides a comprehensive set of endpoints for menu management, order processing, and delivery tracking. Built with performance and security in mind, Tray-API can handle high-volume transactions while ensuring data integrity and user privacy. The API includes features such as real-time order updates, integration with popular payment gateways, and customizable menu options to cater to diverse restaurant needs.",
      mediaItems: [
        {
          type: 'image',
          url: 'https://cloud-2mon4yzwv-hack-club-bot.vercel.app/2tray_api.png',
          title: 'Tray-API Architecture Diagram'
        }
      ]
    },
    {
      Icon: Code2,
      title: "CodeCards",
      description: "AI-powered flashcard generator using Gemini",
      borderColor: "border-yellow-500/20 hover:border-yellow-500/40",
      iconColor: "text-yellow-400",
      fullDescription: "CodeCards is a web application that allows users to generate flashcards from prompts using Gemini. Features include video transcription using Assembly AI, intelligent text extraction with TextRazor, and secure authentication with Clerk.js. Built with Next.js, React, and Typescript, with Stripe integration for pricing plans.",
      mediaItems: [
        {
          type: "image",
          url: "https://www.youtube.com/embed/bYFHBvfbKsk",
          title: "CodeCards Demo"
        }
      ]
    },
    {
      Icon: Brain,
      title: "Nightwing",
      description: "Interactive meeting engagement platform",
      borderColor: "border-purple-500/20 hover:border-purple-500/40",
      iconColor: "text-purple-400",
      fullDescription: "Developed for the 10th District of Virginia's Congressional App Challenge, Nightwing helps keep employees focused during long meetings with interactive quizzes. Features real-time quiz interaction, multi-choice questions with instant feedback, and a credit system for engagement. Built with Django and CustomTkinter.",
      mediaItems: [
        {
            type: "image",
            url: "https://www.youtube.com/embed/MAMqRrMCMKkk",
            title: "Nightwing Demo"
        }
      ]
    },
    {
      Icon: Coffee,
      title: "Emosta",
      description: "AI-powered emotion-based pasta recommender",
      borderColor: "border-orange-500/20 hover:border-orange-500/40",
      iconColor: "text-orange-400",
      fullDescription: "Emosta is a fun web application that recommends pasta shapes based on users' emotions. It uses image analysis and AI to detect emotions from uploaded or captured photos, leveraging DeepFace, TensorFlow, and Google Gemini for recommendations. Features include live camera capture, environmental context analysis, and Pexels API integration for visual suggestions.",
      mediaItems: [
        {
          type: "image",
          url: "https://www.youtube.com/embed/lE1GF6BJjzM",
          title: "Emosta Demo"
        }
      ]
    }
  ];

  const showMoreProjects = () => {
    setVisibleProjects(prevVisible => Math.min(prevVisible + 4, projects.length));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-purple-950 text-white overflow-hidden relative">
      <StarField />
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center relative z-10">
        <div className="h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400/50 relative mx-auto">
              <Image
                src="https://cloud-51a3vj8u7-hack-club-bot.vercel.app/0img_3028_4__2_.png"
                alt="Shaurya's profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Shaurya Bisht
            </motion.h1>
            <TypeAnimation
              sequence={[
                '15 | ML Researcher',
                1000,
                '15 | Competitive Math + Programming',
                1000,
                '15 | SWE',
                1000,
                '15 | Founder',
                1000,
                '15 | Hackathon Organizer + Enthusiast',
                1000
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-white text-xl mb-8"
            />
            <SocialLinks />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-12 cursor-pointer"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ChevronDown className="w-8 h-8 text-white/80 mx-auto" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20 bg-black/40 backdrop-blur-lg rounded-lg border border-blue-500/20 p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://cloud-604w4a3rd-hack-club-bot.vercel.app/0shaurya.jpeg"
                alt="Shaurya's profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-200">About Me</h2>
              <p className="text-blue-100/80 mb-4">
                Hi! I&apos;m Shaurya, a passionate researcher, developer, and problem solver at <a href="https://tjhsst.fcps.edu/" style={{ color: 'lightpurple', textDecoration: 'underline' }}>Thomas Jefferson High School for Science and Technology (TJHSST)</a>. At school, you can find me at my schools Computer Team, Varsity Math Team, and Math Modeling Club. I&apos;m also an officer/organizer of the largest student-run hackathon, <a href="https://hacktj.org" style={{ color: 'lightpurple', textDecoration: 'underline' }}>HackTJ</a>.
              </p>
              <p className="text-blue-100/80">
                Outside of school, I dedicate my time to conducting research, developing innovative projects, and watching cricket! Please explore some of the projects I've worked on on, showcased below.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-200">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                Icon={project.Icon}
                title={project.title}
                description={project.description}
                borderColor={project.borderColor}
                iconColor={project.iconColor}
                fullDescription={project.fullDescription}
                mediaItems={project.mediaItems}
              />
            ))}
          </div>
          
          {visibleProjects < projects.length && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={showMoreProjects}
                className="bg-white/10 hover:bg-white/20 text-blue-200 border-blue-400/50"
              >
                See More Projects
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}