import { Button } from "./ui/button";
import { Shield } from "lucide-react";

export function Navigation() {
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Problem", href: "#problem" },
        { label: "Solution", href: "#solution" },
        { label: "Audience", href: "#audience" },
        { label: "Features", href: "#features" },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-opacity-95 transition-all duration-300 border-b" style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105" onClick={(e) => handleClick(e as any, '#home')}>
                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg">
                        <Shield
                            className="w-6 h-6 transition-all duration-300"
                            style={{ color: "#5386fc" }}
                        />
                    </div>
                    <span className="font-medium transition-colors duration-300 hover:opacity-80" style={{ color: "#030213" }}>PolicyPilot</span>
                </div>

                <div className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className="nav-item font-medium"
                            style={{ 
                                color: "#707986",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                position: "relative",
                                padding: "8px 12px",
                                borderRadius: "8px"
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href="#cta" onClick={(e) => handleClick(e, '#cta')}>
                        <Button
                            className="rounded-full px-6 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-1 pop-hover"
                            style={{
                                backgroundColor: "#5386fc",
                                color: "#ffffff",
                            }}
                        >
                            Get Started Free
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
