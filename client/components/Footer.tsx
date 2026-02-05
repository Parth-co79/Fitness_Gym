import { Link } from "react-router-dom";
import { Dumbbell, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="p-2 bg-primary rounded-lg">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span>FitStart</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your journey to fitness starts here. Join thousands of students transforming their lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Programs</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link to="/programs" className="hover:text-primary transition-colors">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-primary transition-colors">
                  Muscle Gain
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-primary transition-colors">
                  Endurance
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-primary transition-colors">
                  Flexibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link to="/trainers" className="hover:text-primary transition-colors">
                  Find a Trainer
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-primary transition-colors">
                  Weekly Schedule
                </Link>
              </li>
              <li>
                <Link to="/plans" className="hover:text-primary transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Get in Touch</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@fitstart.com" className="hover:text-primary transition-colors">
                  hello@fitstart.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Fitness St, Health City, HC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 mb-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 FitStart. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
