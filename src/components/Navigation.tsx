import { Button } from "./ui/button";

export function Navigation() {
  const navItems = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Features", href: "#features" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded" style={{ backgroundColor: '#5386fc' }} />
          <span style={{ color: '#030213' }}>PolicyPilot</span>
        </div>
        
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="hover:opacity-80"
              style={{ color: '#707986' }}
            >
              {item.label}
            </a>
          ))}
          <Button 
            className="rounded-full px-6"
            style={{ backgroundColor: '#5386fc', color: '#ffffff' }}
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </nav>
  );
}
