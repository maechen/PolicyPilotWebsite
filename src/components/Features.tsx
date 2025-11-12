import { Upload, Search, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Features() {
  const { isVisible, ref: sectionRef } = useScrollAnimation({ threshold: 0.2 });

  const features = [
    {
      icon: Upload,
      title: "Upload & Decipher",
      description: "Securely upload your denial notice and policy documents. Our HIPAA-compliant AI analyzes everything to identify the specific reasons for denial and uncover potential weaknesses in the insurer's decision.",
      color: "#5386fc"
    },
    {
      icon: Search,
      title: "Plan Your Approach",
      description: "Get a clear, plain-English explanation of your appeal strategy. We highlight relevant policy clauses, medical necessity criteria, and procedural errors that strengthen your case.",
      color: "#5386fc"
    },
    {
      icon: Mail,
      title: "Communicate & Resolve",
      description: "Review and approve professional appeal letters drafted specifically for your case. Track responses, monitor deadlines, and get guidance on follow-ups until your case is resolved.",
      color: "#5386fc"
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#030213' }}>
            How It Works
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#707986' }}>
            Three simple steps to fight your insurance denial and get the coverage you deserve
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`border-0 shadow-lg transition-all duration-700 ${
                  isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'
                }`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <CardContent className="p-10 space-y-6 relative overflow-hidden">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 hover:rotate-12 hover:scale-110" style={{ backgroundColor: feature.color }}>
                      <Icon className="w-8 h-8" style={{ color: '#ffffff' }} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold relative z-10" style={{ color: '#030213' }}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed relative z-10" style={{ color: '#707986' }}>
                    {feature.description}
                  </p>
                  
                  {/* Bottom accent line on hover */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: feature.color }}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
