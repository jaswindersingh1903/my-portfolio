"use client";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from 'react';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    const startLoading = () => {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsLoading(false);
            }, 100); 
            return 100;
          }
          return prevProgress + .5; 
        });
      }, 15);
    };

    startLoading();

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <html lang="en">
      <body className={inter.className}>
      <Loader isLoading={isLoading} progress={progress} />

        <Navbar />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
