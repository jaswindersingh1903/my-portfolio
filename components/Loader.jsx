"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const Loader = ({ isLoading, progress }) => {
    const facts = [
        "I once built a website in 24 hours.",
        "I love exploring new technologies.",
        "I'm a big fan of open-source projects.",
        "I enjoy contributing to the developer community.",
        "I believe in clean and efficient code.",
        "I'm always eager to learn and grow.",
        "I have a passion for creating great user experiences.",
        "I find joy in solving complex problems.",
        "I'm a strong advocate for accessibility in web development.",
        "I enjoy learning new programming languages.",
    ];

    //   const [randomFact, setRandomFact] = useState(facts[Math.floor(Math.random() * facts.length)]);
    const [randomFact, setRandomFact] = useState("");

    useEffect(() => {
        if (isLoading) {
            const randomIndex = Math.floor(Math.random() * facts.length);
            setRandomFact(facts[randomIndex]);
        } else {
            setRandomFact("");
        }
    }, [isLoading]);

    if (!isLoading) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full loader-bg-animated flex flex-col items-center justify-center z-50">
            {" "}
            {/* Added loader-bg-animated */}
            <Progress value={progress} className="w-64 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-center w-80">
                {randomFact}
            </p>
        </div>
    );
};

export default Loader;
