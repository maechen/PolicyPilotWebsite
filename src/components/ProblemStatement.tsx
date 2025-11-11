import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function ProblemStatement() {
  const { isVisible, ref: sectionRef } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={sectionRef} id="problem" className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto text-center space-y-16 w-full">
        <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`} style={{ color: '#030213' }}>
          The System Is Stacked Against You
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className={`space-y-4 pop-hover-sm transition-all duration-700 delay-200 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`} style={{ animationDelay: '0.2s' }}>
            <div className="text-6xl md:text-7xl font-bold" style={{ color: '#5386fc' }}>
              19%
            </div>
            <p className="text-lg" style={{ color: '#707986' }}>
              of in-network claims are denied by insurers
            </p>
          </div>
          
          <div className={`space-y-4 pop-hover-sm transition-all duration-700 delay-300 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`} style={{ animationDelay: '0.3s' }}>
            <div className="text-6xl md:text-7xl font-bold" style={{ color: '#5386fc' }}>
              {'<0.1%'}
            </div>
            <p className="text-lg" style={{ color: '#707986' }}>
              of denied claims are appealed by patients
            </p>
          </div>
          
          <div className={`space-y-4 pop-hover-sm transition-all duration-700 delay-400 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`} style={{ animationDelay: '0.4s' }}>
            <div className="text-6xl md:text-7xl font-bold" style={{ color: '#5386fc' }}>
              90%
            </div>
            <p className="text-lg" style={{ color: '#707986' }}>
              success rate when denials are properly challenged
            </p>
          </div>
        </div>
        
        <p className={`max-w-3xl mx-auto text-xl transition-all duration-700 delay-500 ${isVisible ? 'animate-slideFromLeft opacity-100' : 'opacity-0 translate-x-[-60px]'}`} style={{ color: '#707986', animationDelay: '0.5s' }}>
          Insurance companies send confusing denial notices filled with legal jargon, 
          knowing most people won't have the time, energy, or expertise to fight back. 
          When you're already dealing with health challenges or supporting loved ones, 
          the appeals process feels impossible. That's exactly what they're counting on.
        </p>
      </div>
    </section>
  );
}
