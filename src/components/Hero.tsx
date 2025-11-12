import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import home_img from "@/assets/images/home_img.png";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Hero() {
    const { isVisible, ref: sectionRef } = useScrollAnimation({ threshold: 0.3 });

    return (
        <section
            ref={sectionRef}
            id="home"
            className="min-h-screen flex items-center pt-24 pb-20 px-6"
            style={{ backgroundColor: "#f9fafb" }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
                <div className="space-y-8">
                    <h1
                        className={`text-5xl md:text-6xl font-bold transition-all duration-700 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`}
                        style={{ color: "#030213" }}
                    >
                        Fight Health Insurance Denials. Get the Coverage You
                        Deserve.
                    </h1>
                    <p className={`text-xl transition-all duration-700 delay-200 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`} style={{ color: "#707986", animationDelay: '0.2s' }}>
                        PolicyPilot empowers you to challenge unfair claim
                        denials with AI-powered insights and professional appeal
                        letters. Take control of your healthcare coverage with
                        confidence.
                    </p>
                    <div className={`transition-all duration-700 delay-300 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`} style={{ animationDelay: '0.3s' }}>
                        <a href="https://policypilot-silk.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Button
                                className="rounded-full px-10 py-7 text-lg font-bold group"
                                style={{ backgroundColor: "#5386fc", color: "#ffffff" }}
                            >
                                Start Your Appeal Now
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </a>
                    </div>
                </div>

                <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`} style={{ animationDelay: '0.4s' }}>
                    <div className="absolute -inset-6 bg-gradient-to-r from-[#eaf3ff] to-[#f3f8ff] rounded-2xl blur-2xl opacity-70"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4 transition-transform duration-500 hover:scale-105">
                        <div className="rounded-lg overflow-hidden">
                            <ImageWithFallback
                                src={home_img}
                                alt="PolicyPilot Dashboard"
                                className="w-full h-full object-cover block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
