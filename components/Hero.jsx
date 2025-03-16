import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Head from "next/head";

const Hero = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Jaswinder Singh | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-Stack Developer specializing in React, Node.js, and PHP. Building scalable web and AI solutions."
        />
        <meta
          name="keywords"
          content="Full-Stack Developer, React.js, Node.js, PHP, AI Solutions, Scalable Web Apps"
        />
        <meta name="author" content="Jaswinder Singh" />
        <meta
          property="og:title"
          content="Jaswinder Singh | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="6+ years of experience in React, Node.js, and PHP. Passionate about seamless user experiences and intelligent automation."
        />
        <meta property="og:image" content="/profile-image.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      {/* HERO */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Hero Image"
                    className="w-full rounded-t-lg"
                  />
                </CardContent>
              </Card>
            </div>
            {/* <div className="md:order-2 w-full md:w-1/2">
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div> */}
            <div className="md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {/* Hi, I'm Jaswinder Singh. <br /> */}
                🧑‍💻 Full-Stack Developer <br/> Building Scalable Web & AI Solutions
              </h1>

              <h2 className="text-lg text-gray-300 mb-8">
                With over {new Date().getFullYear() - 2018}+ years of experience
                in React, Node.js, and PHP. Passionate about creating seamless
                user experiences and intelligent automation.
              </h2>
              <Separator className="my-4 border-gray-700" />
              <div className="space-x-4">
                <Button size="lg" variant="outline">
                🚀 View My Work
                  {/* <ArrowRightIcon className="ml-2 h-4 w-4" /> */}
                  <Avatar className="ml-2 h-6 w-6">
                    <AvatarImage
                      src="https://placehold.co/32x32"
                      alt="View Work Avatar"
                    />
                    <AvatarFallback>VW</AvatarFallback>
                  </Avatar>
                </Button>
                <Button size="lg" variant="outline">
                💼 Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
