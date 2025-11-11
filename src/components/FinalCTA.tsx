import { Button } from "./ui/button";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function FinalCTA() {
    const { isVisible, ref: sectionRef } = useScrollAnimation({ threshold: 0.2 });

    const benefits = [
        "100% Free first case analysis",
        "No credit card required",
        "Results in as little as 48 hours"
    ];

    return (
        <section 
            ref={sectionRef}
            id="cta" 
            className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden"
            style={{ backgroundColor: "#5386fc" }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
                <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold" style={{ color: "#ffffff" }}>
                        Ready to Take Back Control?
                    </h2>
                </div>

                <p
                    className={`max-w-3xl mx-auto text-xl leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`}
                    style={{ color: "#ffffff", opacity: 0.95, animationDelay: '0.2s' }}
                >
                    Don't let insurance companies profit from your confusion and
                    exhaustion. Join thousands who have successfully appealed
                    their denials with PolicyPilot.
                </p>

                <div className={`flex flex-col items-center gap-6 transition-all duration-700 delay-300 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`} style={{ animationDelay: '0.3s' }}>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button
                            className="rounded-full px-10 py-7 text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
                            style={{ backgroundColor: "#ffffff", color: "#5386fc" }}
                        >
                            Start Your Appeal Now
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                        {benefits.map((benefit, index) => (
                            <div 
                                key={index} 
                                className={`flex items-center gap-2 transition-all duration-300 hover:scale-110 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                            >
                                <CheckCircle2 className="w-5 h-5" style={{ color: "#ffffff" }} />
                                <span className="text-sm" style={{ color: "#ffffff" }}>
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`pt-8 ${isVisible ? 'animate-fadeIn delay-600' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white bg-opacity-90 backdrop-blur-sm border border-white border-opacity-30 transition-all duration-300 hover:bg-opacity-100 hover:scale-105">
                        <Shield className="w-5 h-5" style={{ color: "#5386fc" }} />
                        <span className="text-sm font-medium" style={{ color: "#5386fc" }}>
                            HIPAA Safe
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
