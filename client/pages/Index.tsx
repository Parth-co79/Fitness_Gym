import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Activity,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Check,
  Star,
  Zap,
  Clock,
  Target,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slideUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-full w-fit">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Transform Your Life in 12 Weeks</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Your Fitness <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Revolution</span> Starts Now
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Feeling lost? Not anymore. We guide students like you step-by-step through personalized fitness programs. No experience needed. Just determination.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-colors">
                  Watch Success Stories
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 pt-8">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">15K+</p>
                  <p className="text-sm text-muted-foreground">Students Transformed</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-secondary">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">92%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full min-h-96 animate-fadeIn">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative h-full flex flex-col items-center justify-center space-y-6 p-8">
                <div className="text-center space-y-4">
                  <div className="inline-block p-4 bg-gradient-to-br from-primary to-purple-600 rounded-2xl">
                    <Activity className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">Ready to Level Up?</p>
                  <p className="text-muted-foreground max-w-sm">Join thousands of students who've already taken the first step towards a healthier, stronger life.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full pt-4">
                  <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-4 text-center">
                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-semibold text-foreground">30 Min Workouts</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-4 text-center">
                    <Target className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-sm font-semibold text-foreground">Personalized Plans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you want to lose weight, gain muscle, or transform your entire lifestyle - we have the perfect program waiting for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weight Loss Program */}
            <Link to="/programs" className="bg-gradient-to-br from-card to-card/50 border border-secondary/30 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-secondary/60 transition-all group cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-secondary/20 group-hover:bg-secondary/30 rounded-xl transition-colors">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Weight Loss</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Shed pounds, build confidence, and transform your body. Cardio, nutrition, and motivation combined.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">4-week intensive program</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Customized meal plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">HIIT & cardio training</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Daily motivation tracking</span>
                </li>
              </ul>
              <div className="flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                Explore Program
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

            {/* Muscle Gain Program */}
            <Link to="/programs" className="bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-primary/60 transition-all group cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/20 group-hover:bg-primary/30 rounded-xl transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Muscle Gain</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Build lean muscle and unleash your strength. Progressive training for beginners to advanced lifters.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">8-week progression program</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">High-protein nutrition guide</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Strength building workouts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Form coaching & feedback</span>
                </li>
              </ul>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Explore Program
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trainer Profiles Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Your Coaching Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified fitness professionals who understand students like you. Real people, real results, real passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trainer 1 */}
            <Link to="/trainers" className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Users className="w-24 h-24 text-white/60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">Alex Johnson</h3>
                <p className="text-primary font-semibold text-sm mb-3">Strength & Power Coach</p>
                <p className="text-muted-foreground text-sm mb-4">
                  5+ years transforming students into confident athletes. Specializes in strength training.
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(127 reviews)</span>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                  Book Session
                </button>
              </div>
            </Link>

            {/* Trainer 2 */}
            <Link to="/trainers" className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Users className="w-24 h-24 text-white/60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">Sarah Williams</h3>
                <p className="text-secondary font-semibold text-sm mb-3">Cardio & Weight Loss Expert</p>
                <p className="text-muted-foreground text-sm mb-4">
                  7+ years of helping students lose weight and feel amazing. HIIT & cardio specialist.
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(156 reviews)</span>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                  Book Session
                </button>
              </div>
            </Link>

            {/* Trainer 3 */}
            <Link to="/trainers" className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Users className="w-24 h-24 text-white/60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">Mike Chen</h3>
                <p className="text-primary font-semibold text-sm mb-3">Flexibility & Wellness Coach</p>
                <p className="text-muted-foreground text-sm mb-4">
                  6+ years helping students prevent injuries and feel balanced. Yoga & mobility expert.
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(98 reviews)</span>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                  Book Session
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Plans Built for Students
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affordable pricing. Zero hidden fees. Start free and upgrade whenever you're ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Link to="/plans" className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-border hover:border-muted cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">Perfect for exploring</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">Free</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <button className="w-full px-6 py-3 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-colors mb-8">
                Get Started
              </button>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Workout library access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Progress tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Community forum</span>
                </li>
              </ul>
            </Link>

            {/* Pro Plan (Featured) */}
            <Link to="/plans" className="bg-gradient-to-br from-primary to-purple-600 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all relative md:scale-105 cursor-pointer">
              <div className="absolute -top-4 left-8 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-white/80 mb-6">For serious transformation</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-white/80">/month</span>
              </div>
              <button className="w-full px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors mb-8">
                Start Free Trial
              </button>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Personalized meal plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Weekly trainer check-ins</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Priority email support</span>
                </li>
              </ul>
            </Link>

            {/* Elite Plan */}
            <Link to="/plans" className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-primary/30 hover:border-primary/60 cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-2">Elite</h3>
              <p className="text-muted-foreground mb-6">Premium coaching</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$59</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <button className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity mb-8">
                Start Free Trial
              </button>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">1-on-1 coaching calls</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Custom workout plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">24/7 VIP support</span>
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-purple-600 to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stop Waiting. Start Today.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Your best self is waiting on the other side of this decision. Thousands of students have already transformed their lives. It's your turn.
          </p>
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
