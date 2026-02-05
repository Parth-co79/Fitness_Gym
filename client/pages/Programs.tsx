import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Clock, Target, Zap, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Weight Loss Blitz",
      duration: "4 Weeks",
      difficulty: "Beginner-Friendly",
      color: "secondary",
      description: "Shed pounds and build confidence with our science-backed weight loss program.",
      features: [
        "30-minute daily workouts (cardio + strength)",
        "Customized meal plans with student budget",
        "Daily motivation messages & progress tracking",
        "Full workout video library",
        "Nutrition coaching & tips",
        "Access to support community"
      ],
      results: "Average 8-12 lbs lost in 4 weeks",
      price: "$49"
    },
    {
      id: 2,
      title: "Muscle Gain Mastery",
      duration: "8 Weeks",
      difficulty: "Progressive",
      color: "primary",
      description: "Build lean muscle and transform your physique with progressive strength training.",
      features: [
        "45-minute targeted workouts (split routine)",
        "High-protein meal plans (customizable)",
        "Advanced form coaching & video feedback",
        "Progressive overload tracking",
        "Supplement guide & recommendations",
        "1 trainer consultation per week"
      ],
      results: "Average 10-15 lbs of muscle gained",
      price: "$79"
    },
    {
      id: 3,
      title: "Full Body Transformation",
      duration: "12 Weeks",
      difficulty: "Comprehensive",
      color: "purple",
      description: "Complete lifestyle overhaul: lose fat, gain muscle, boost energy, and feel amazing.",
      features: [
        "Varied 50-minute workouts (cardio + strength + flexibility)",
        "Complete nutritional overhaul with meal prep",
        "Weekly 1-on-1 video coaching calls",
        "Sleep & recovery optimization",
        "Stress management & mindfulness",
        "VIP community access with leaderboards"
      ],
      results: "Complete body composition change",
      price: "$149"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Choose Your Transformation Path
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have 4 weeks or 12 weeks, we have a program designed to deliver real results for your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all group flex flex-col h-full">
                {/* Header */}
                <div className={`p-8 bg-gradient-to-br ${
                  program.color === "secondary" ? "from-secondary to-orange-500" :
                  program.color === "primary" ? "from-primary to-purple-600" :
                  "from-purple-600 to-pink-500"
                }`}>
                  <h3 className="text-3xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-white/80 mb-4">{program.description}</p>
                  <div className="flex gap-4 text-white/90 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {program.difficulty}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Results */}
                  <div className="mb-8 p-4 bg-muted rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Expected Results</p>
                    <p className="text-lg font-bold text-foreground">{program.results}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-1">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="space-y-3">
                    <button className={`w-full py-3 font-bold rounded-lg transition-colors text-white ${
                      program.color === "secondary" ? "bg-secondary hover:opacity-90" :
                      program.color === "primary" ? "bg-primary hover:opacity-90" :
                      "bg-purple-600 hover:opacity-90"
                    }`}>
                      Enroll Now - {program.price}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How FitStart Works</h2>
            <p className="text-lg text-muted-foreground">Your path to transformation in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Take the Quiz",
                description: "Tell us your goal, current fitness level, and available time. We'll recommend the perfect program."
              },
              {
                step: 2,
                title: "Get Your Plan",
                description: "Receive a personalized workout schedule, meal plan, and daily motivation tailored just for you."
              },
              {
                step: 3,
                title: "Work Out Smart",
                description: "Follow video-guided workouts, track your progress, and get real-time form feedback."
              },
              {
                step: 4,
                title: "Transform",
                description: "See results, build consistency, and join thousands who've changed their lives with FitStart."
              }
            ].map((item) => (
              <div key={item.step} className="space-y-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What if I've never worked out before?",
                a: "Perfect! Our programs are designed for absolute beginners. Every workout has modifications, and you go at your own pace. No judgment, only progress."
              },
              {
                q: "Can I switch programs?",
                a: "Yes! You can upgrade to a longer program anytime. If you finish a 4-week program, many students jump into the 8 or 12-week programs."
              },
              {
                q: "Do I need equipment?",
                a: "Not necessarily. Most of our programs require minimal or no equipment. We have options for home and gym workouts."
              },
              {
                q: "What if I fall behind?",
                a: "Life happens! Our programs are flexible. You can pause, extend your timeline, or restart anytime. We're here for your journey, not perfection."
              },
              {
                q: "Can I get a refund?",
                a: "Absolutely. If you're not satisfied within 14 days, we'll refund you 100%. No questions asked."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-purple-600 to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Change Your Life?</h2>
          <p className="text-lg text-white/90 mb-8">
            Pick a program above and start your free trial today. No credit card required.
          </p>
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Explore Programs
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
