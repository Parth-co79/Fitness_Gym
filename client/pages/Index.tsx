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
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slideUp">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Start Your <span className="text-primary">Fitness Journey</span> Today
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                  Don't know where to start? FitStart guides you through personalized workout programs designed specifically for students. Transform your body and mind in just 12 weeks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 bg-gray-100 text-foreground font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-foreground">15K+</p>
                  <p className="text-sm text-gray-600">Active Students</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.9/5</p>
                  <p className="text-sm text-gray-600">App Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">92%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full min-h-96 animate-fadeIn">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white flex flex-col items-center justify-center space-y-4 h-full w-full">
                  <Activity className="w-20 h-20 opacity-80" />
                  <p className="text-xl font-semibold text-center">Ready to Transform?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Program
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you want to lose weight, gain muscle, or improve your overall fitness, we have a program designed just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weight Loss Program */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-secondary">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Weight Loss</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Shed pounds and build confidence with our scientifically designed weight loss program. Includes cardio, nutrition guidance, and progress tracking.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-700">4-week structured program</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-700">Personalized meal plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-700">Daily workout routines</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-700">Progress tracking tools</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Explore Program
              </button>
            </div>

            {/* Muscle Gain Program */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Muscle Gain</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Build lean muscle and increase strength with our comprehensive strength training program. Perfect for beginners and advanced lifters.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">8-week progressive program</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">High-protein meal plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Strength training videos</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Form correction feedback</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Explore Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Profiles Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Your Trainers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from certified fitness professionals who are passionate about helping students achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trainer 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Users className="w-24 h-24 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Alex Johnson</h3>
                <p className="text-secondary font-semibold text-sm mb-3">Strength Coach</p>
                <p className="text-gray-600 text-sm mb-4">
                  5+ years of experience. Specializes in muscle building and functional strength training.
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(127 reviews)</span>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                  Book Session
                </button>
              </div>
            </div>

            {/* Trainer 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center">
                <Users className="w-24 h-24 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Sarah Williams</h3>
                <p className="text-primary font-semibold text-sm mb-3">Cardio Specialist</p>
                <p className="text-gray-600 text-sm mb-4">
                  7+ years of experience. Expert in weight loss, HIIT training, and endurance building.
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(156 reviews)</span>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                  Book Session
                </button>
              </div>
            </div>

            {/* Trainer 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                <Users className="w-24 h-24 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Mike Chen</h3>
                <p className="text-secondary font-semibold text-sm mb-3">Flexibility Coach</p>
                <p className="text-gray-600 text-sm mb-4">
                  6+ years of experience. Specializes in yoga, flexibility training, and injury prevention.
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(98 reviews)</span>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flexible Membership Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your fitness goals and budget. All plans include access to our full workout library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$9</span>
                <span className="text-gray-600">/month</span>
              </div>
              <button className="w-full px-6 py-3 bg-gray-200 text-foreground font-semibold rounded-lg hover:bg-gray-300 transition-colors mb-8">
                Choose Plan
              </button>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Workout library access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Progress tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Community access</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan (Featured) */}
            <div className="bg-gradient-to-br from-primary to-purple-600 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative md:scale-105">
              <div className="absolute -top-4 left-8 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-white/80 mb-6">Best for serious results</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-white/80">/month</span>
              </div>
              <button className="w-full px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors mb-8">
                Choose Plan
              </button>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Everything in Basic</span>
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
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            {/* Elite Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-2">Elite</h3>
              <p className="text-gray-600 mb-6">Ultimate transformation</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$59</span>
                <span className="text-gray-600">/month</span>
              </div>
              <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity mb-8">
                Choose Plan
              </button>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">1-on-1 coaching</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Custom workout plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">24/7 VIP support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Body?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of students who have already started their fitness journey. Get started with a free trial today.
          </p>
          <button className="px-8 py-4 bg-secondary text-white font-bold rounded-lg text-lg hover:opacity-90 transition-opacity">
            Start Your Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
