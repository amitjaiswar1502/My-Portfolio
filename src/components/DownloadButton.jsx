"use client";

import { useState } from "react";
import { Download, CheckCircle2, Loader2 } from "lucide-react";

import  Button  from "./ui/button";
import { useToast } from "./ui/use-toast";


// import { useToast } from "../ui/use-toast";

export function DownloadButton() {
    const [isDownloading, setIsDownloading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const { toast } = useToast();

    const handleDownload = async () => {
        setIsDownloading(true);

        try {
            // Simulate download delay
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Trigger success state
            setIsComplete(true);
            toast({
                title: "Success!",
                description: "CV downloaded successfully.",
            });

            // Reset after animation
            setTimeout(() => {
                setIsComplete(false);
            }, 2000);
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to download CV. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <Button
            onClick={handleDownload}
            disabled={isDownloading}
            size="lg"
            className={`
        relative overflow-hidden transition-all duration-300 text-lg font-semibold
        ${
            isComplete
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500"
        }
        group min-w-[200px] py-6 rounded-full shadow-lg hover:shadow-xl
      `}
        >
            <span className="relative z-10 flex items-center justify-center">
                {isDownloading ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Downloading...
                    </>
                ) : isComplete ? (
                    <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Complete!
                    </>
                ) : (
                    <>
                        <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                        Download CV
                    </>
                )}
            </span>
        </Button>
    );
}
