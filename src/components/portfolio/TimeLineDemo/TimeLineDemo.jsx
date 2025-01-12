import React from "react";
import { Timeline } from "../../ui/timeline";
import omarun from "../../../../src/images/portfolio/omarun.png";
import smaash from "../../../../src/images/portfolio/smaash.png";
import digitallabs from "../../../../src/images/portfolio/digitallabs.png";
import muzii from "../../../../src/images/portfolio/muzii.png";
import kenmarkItan from "../../../../src/images/portfolio/kenmarkitan.png";
import netflix from "../../../../src/images/portfolio/netflix.png";
import newsApp from "../../../../src/images/portfolio/newsApp.png";
import myNoteBook from "../../../../src/images/portfolio/myNoteBook.png";
import TextManipulation from "../../../../src/images/portfolio/TextManipulation.png";

export function TimelineDemo() {



    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                       {` Led a team of three developers to build a modern web
                        application using Next.js, featuring e-commerce
                        functionality, a blog, and robust user authentication.
                        Primarily focused on frontend development and UI/UX
                        design, ensuring seamless user experiences while
                        optimizing SEO, performance, and deployment workflows.`}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={muzii}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={kenmarkItan}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2024",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-sm font-normal mb-8">
                       Started with Ecommerce Projects, built a modern web
                        application using Next.js, featuring e-commerce
                        functionality, a blog, and robust user authentication.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={omarun}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={smaash}
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={digitallabs}
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Personal Projects
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                            ✅ News App
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                            ✅ NetFlix Clone with Firebase
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                            ✅ Text Manipulation App & many more...
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={newsApp}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={netflix}
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={myNoteBook}
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={TextManipulation}
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full bg-gray-600">
            <Timeline data={data} />
        </div>
    );
}
