"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import {Badge} from "@/components/ui/badge";

const techStack = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg",
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg",
    },
    {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/php.svg",
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg",
    },
    {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg",
    },
    {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nextdotjs.svg",
    },
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/typescript.svg",
    },
    {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/redux.svg",
    },
    {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postgresql.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg",
    },
    {
        name: "Socket.IO",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/socketdotio.svg",
    },
    {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/angular.svg",
    },
    {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg",
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg",
    },
];

const TechStack = () => {
    return (
        <section className="tech-stack text-center p-10">
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <Carousel
                className="tech-stack-carousel-container"
                orientation="horizontal"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 1500,
                    }),
                ]}
            >
                <CarouselContent>
                    {techStack.map((tech,i) => (
                        <CarouselItem className="basis-1/2 sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6" key={i}>
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <Badge variant={i%2==0?"outline":"default"}>{tech.name}</Badge>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default TechStack;
