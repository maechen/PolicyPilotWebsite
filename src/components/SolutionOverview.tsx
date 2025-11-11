import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";
import sln_img from "@/assets/images/sln_img.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function SolutionOverview() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      title: "Not a Black Box",
      description: "Every letter and submission requires your approval. You're always in control."
    },
    {
      title: "Empathy-First",
      description: "We acknowledge the stress and frustration of fighting denials during difficult times."
    },
    {
      title: "Focus on Fast Wins",
      description: "We prioritize identifying simple errors and technicalities for quick resolutions."
    }
  ];

  return (
    <section ref={sectionRef} id="solution" className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        <div className={`rounded-lg overflow-hidden shadow-xl border border-gray-200 transition-all duration-700 hover:scale-105 ${
          isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'
        }`}>
          <ImageWithFallback
            src={sln_img}
            alt="PolicyPilot Interface"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-8">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ${
            isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'
          }`} style={{ color: '#030213', animationDelay: isVisible ? '0.2s' : '0s' }}>
            Your Partner in the Appeals Process
          </h2>
          
          <p className={`text-xl transition-all duration-700 ${
            isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'
          }`} style={{ color: '#707986', animationDelay: isVisible ? '0.3s' : '0s' }}>
            PolicyPilot is an AI-powered platform that analyzes your denial, researches your 
            policy, and helps you craft compelling appeals. All while keeping you in complete 
            control. We handle the complexity so you can focus on what matters most.
          </p>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`flex gap-4 transition-all duration-700 pop-hover-sm ${
                  isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'
                }`}
                style={{ animationDelay: isVisible ? `${0.4 + index * 0.1}s` : '0s' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-12" style={{ backgroundColor: '#5386fc' }}>
                  <Check className="w-5 h-5" style={{ color: '#ffffff' }} />
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-bold" style={{ color: '#030213' }}>{benefit.title}</h4>
                  <p className="text-lg" style={{ color: '#707986' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
