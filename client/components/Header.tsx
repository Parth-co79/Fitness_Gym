import { Link } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="p-2 bg-primary rounded-lg">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="hidden sm:inline text-foreground">FitStart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/programs"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Programs
            </Link>
            <Link
              to="/trainers"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Trainers
            </Link>
            <Link
              to="/schedule"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Schedule
            </Link>
            <Link
              to="/plans"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Plans
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              to="/programs"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              to="/trainers"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trainers
            </Link>
            <Link
              to="/schedule"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              to="/plans"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Plans
            </Link>
            <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
