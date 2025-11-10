import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";

export function SolutionOverview() {
  return (
    <section id="solution" className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200 aspect-video">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1681505512385-8b9d567a56c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdXJhbmNlJTIwZG9jdW1lbnRzJTIwZGVza3xlbnwxfHx8fDE3NjI4MTA4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="PolicyPilot Interface"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl" style={{ color: '#030213' }}>Your Partner in the Appeals Process</h2>
          
          <p className="text-xl" style={{ color: '#707986' }}>
            PolicyPilot is an AI-powered platform that analyzes your denial, researches your 
            policy, and helps you craft compelling appeals — all while keeping you in complete 
            control. We handle the complexity so you can focus on what matters most.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5386fc' }}>
                <Check className="w-5 h-5" style={{ color: '#ffffff' }} />
              </div>
              <div>
                <h4 className="text-xl mb-2" style={{ color: '#030213' }}>Not a Black Box</h4>
                <p className="text-lg" style={{ color: '#707986' }}>
                  Every letter and submission requires your approval. You're always in control.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5386fc' }}>
                <Check className="w-5 h-5" style={{ color: '#ffffff' }} />
              </div>
              <div>
                <h4 className="text-xl mb-2" style={{ color: '#030213' }}>Empathy-First</h4>
                <p className="text-lg" style={{ color: '#707986' }}>
                  We acknowledge the stress and frustration of fighting denials during difficult times.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5386fc' }}>
                <Check className="w-5 h-5" style={{ color: '#ffffff' }} />
              </div>
              <div>
                <h4 className="text-xl mb-2" style={{ color: '#030213' }}>Focus on Fast Wins</h4>
                <p className="text-lg" style={{ color: '#707986' }}>
                  We prioritize identifying simple errors and technicalities for quick resolutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
