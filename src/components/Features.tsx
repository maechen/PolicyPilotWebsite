import { Shield, Search, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Upload & Decipher",
      description: "Securely upload your denial notice and policy documents. Our HIPAA-compliant AI analyzes everything to identify the specific reasons for denial and uncover potential weaknesses in the insurer's decision."
    },
    {
      icon: Search,
      title: "Plan Your Approach",
      description: "Get a clear, plain-English explanation of your appeal strategy. We highlight relevant policy clauses, medical necessity criteria, and procedural errors that strengthen your case."
    },
    {
      icon: Mail,
      title: "Communicate & Resolve",
      description: "Review and approve professional appeal letters drafted specifically for your case. Track responses, monitor deadlines, and get guidance on follow-ups until your case is resolved."
    }
  ];

  return (
    <section id="features" className="min-h-screen flex items-center py-20 px-6" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-10 space-y-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#5386fc' }}>
                    <Icon className="w-8 h-8" style={{ color: '#ffffff' }} />
                  </div>
                  <h3 className="text-2xl" style={{ color: '#030213' }}>{feature.title}</h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#707986' }}>{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
