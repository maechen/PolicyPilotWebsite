import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProblemStatement } from "./components/ProblemStatement";
import { SolutionOverview } from "./components/SolutionOverview";
import { TargetAudience } from "./components/TargetAudience";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <TargetAudience />
      <Features />
      <FinalCTA />
      <Footer />
    </div>
  );
}
