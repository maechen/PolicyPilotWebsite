import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 px-6" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl" style={{ color: '#030213' }}>
            Fight Health Insurance Denials. Get the Coverage You Deserve.
          </h1>
          <p className="text-xl" style={{ color: '#707986' }}>
            PolicyPilot empowers you to challenge unfair claim denials with AI-powered insights 
            and professional appeal letters. Take control of your healthcare coverage with confidence.
          </p>
          <Button 
            className="rounded-full px-10 py-7 text-lg"
            style={{ backgroundColor: '#5386fc', color: '#ffffff' }}
          >
            Start Your Appeal Now
          </Button>
        </div>
        
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200 aspect-video">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758521961744-939de61d5cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBsYXB0b3B8ZW58MXx8fHwxNzYyNzE1MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="PolicyPilot Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
