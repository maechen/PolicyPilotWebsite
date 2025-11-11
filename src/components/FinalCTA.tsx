import { Button } from "./ui/button";

export function FinalCTA() {
  return (
      <section id="cta" className="min-h-screen flex items-center py-20 px-6"
          style={{ backgroundColor: "#5386fc" }}
      >
          <div className="max-w-5xl mx-auto text-center space-y-10">
              <h2 className="text-4xl md:text-5xl" style={{ color: "#ffffff" }}>
                  Ready to Take Back Control?
              </h2>

              <p
                  className="max-w-3xl mx-auto text-xl leading-relaxed"
                  style={{ color: "#ffffff", opacity: 0.95 }}
              >
                  Don't let insurance companies profit from your confusion and
                  exhaustion. Join thousands who have successfully appealed
                  their denials with PolicyPilot. Your first case analysis is
                  completely free.
              </p>

              <Button
                  className="rounded-full px-10 py-7 mt-6 text-lg"
                  style={{ backgroundColor: "#ffffff", color: "#5386fc" }}
              >
                  Start Your Appeal Now
              </Button>
          </div>
      </section>
  );
}
