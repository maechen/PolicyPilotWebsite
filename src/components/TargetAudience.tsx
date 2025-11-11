import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function TargetAudience() {
    const { isVisible, ref: sectionRef } = useScrollAnimation({
        threshold: 0.2,
    });

    return (
        <section
            ref={sectionRef}
            id="audience"
            className="min-h-screen flex items-center py-20 px-6"
            style={{ backgroundColor: "#ffffff" }}
        >
            <div className="max-w-5xl mx-auto text-center space-y-10">
                <h3
                    className={`text-4xl md:text-5xl font-bold transition-all duration-700 ${
                        isVisible
                            ? "animate-slideFromLeft opacity-100"
                            : "opacity-0 translate-x-[-60px]"
                    }`}
                    style={{ color: "#030213" }}
                >
                    Built for the 'Sandwich Generation'
                </h3>

                <p
                    className={`max-w-4xl mx-auto text-xl leading-relaxed transition-all duration-700 delay-200 ${
                        isVisible
                            ? "animate-slideFromLeft opacity-100"
                            : "opacity-0 translate-x-[-60px]"
                    }`}
                    style={{ color: "#707986", animationDelay: "0.2s" }}
                >
                    PolicyPilot was designed for busy adults juggling care for
                    aging parents while raising their own children. You're
                    financially conscious and facing frequent medical expenses
                    from multiple family members. You don't have time to become
                    an insurance expert, but you refuse to leave money on the
                    table or accept unfair denials. You need a solution that
                    respects your time, values your intelligence, and gets
                    results.
                </p>
            </div>
        </section>
    );
}
