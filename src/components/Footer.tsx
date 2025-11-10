export function Footer() {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: '#030213' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div style={{ color: '#ffffff' }}>
            PolicyPilot © 2025
          </div>
          
          <div className="flex gap-6">
            <a href="#privacy" className="hover:opacity-80" style={{ color: '#6492fc' }}>
              Privacy Policy
            </a>
            <a href="#terms" className="hover:opacity-80" style={{ color: '#6492fc' }}>
              Terms
            </a>
            <a href="#contact" className="hover:opacity-80" style={{ color: '#6492fc' }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
