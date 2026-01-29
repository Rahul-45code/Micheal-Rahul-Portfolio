export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-white/10 py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-3">
              Micheal Rahul
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Data Analyst & Full-Stack Developer crafting data-driven solutions and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-green-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-green-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-green-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Rahul-45code"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500/30 border border-white/10 hover:border-green-500/50 flex items-center justify-center text-foreground hover:text-green-400 transition-all glow-green"
                aria-label="GitHub"
              >
                <span className="text-lg">↗</span>
              </a>
              <a
                href="https://linkedin.com/in/micheal-rahul-8a3205329"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500/30 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center text-foreground hover:text-cyan-400 transition-all glow-cyan"
                aria-label="LinkedIn"
              >
                <span className="text-lg">in</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500/30 border border-white/10 hover:border-green-500/50 flex items-center justify-center text-foreground hover:text-green-400 transition-all glow-green"
                aria-label="Twitter"
              >
                <span className="text-lg">𝕏</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Micheal Rahul. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
