import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const weeklySchedule = {
    Monday: [
      {
        time: "6:00 AM",
        class: "Morning Energy Burst",
        trainer: "Alex Johnson",
        duration: "30 min",
        type: "Strength",
        intensity: "High",
        spots: "12/15"
      },
      {
        time: "12:30 PM",
        class: "Lunch Break Cardio",
        trainer: "Sarah Williams",
        duration: "25 min",
        type: "Cardio",
        intensity: "Medium",
        spots: "8/10"
      },
      {
        time: "6:00 PM",
        class: "Evening Strength Session",
        trainer: "James Park",
        duration: "45 min",
        type: "Strength",
        intensity: "High",
        spots: "14/20"
      }
    ],
    Tuesday: [
      {
        time: "7:00 AM",
        class: "Yoga Flow & Flexibility",
        trainer: "Mike Chen",
        duration: "45 min",
        type: "Flexibility",
        intensity: "Low",
        spots: "18/20"
      },
      {
        time: "5:30 PM",
        class: "HIIT Blast",
        trainer: "Sarah Williams",
        duration: "30 min",
        type: "Cardio",
        intensity: "Very High",
        spots: "19/20"
      },
      {
        time: "7:30 PM",
        class: "Core Power",
        trainer: "Emma Thompson",
        duration: "30 min",
        type: "Strength",
        intensity: "High",
        spots: "10/15"
      }
    ],
    Wednesday: [
      {
        time: "6:00 AM",
        class: "Full Body Strength",
        trainer: "Alex Johnson",
        duration: "50 min",
        type: "Strength",
        intensity: "High",
        spots: "16/20"
      },
      {
        time: "12:00 PM",
        class: "Walking Meditation",
        trainer: "Mike Chen",
        duration: "20 min",
        type: "Flexibility",
        intensity: "Low",
        spots: "6/20"
      },
      {
        time: "5:00 PM",
        class: "Nutrition Workshop",
        trainer: "Lisa Rodriguez",
        duration: "60 min",
        type: "Education",
        intensity: "Low",
        spots: "25/30"
      }
    ],
    Thursday: [
      {
        time: "6:30 AM",
        class: "Athletic Performance",
        trainer: "James Park",
        duration: "45 min",
        type: "Strength",
        intensity: "Very High",
        spots: "12/15"
      },
      {
        time: "4:00 PM",
        class: "Recovery Yoga",
        trainer: "Emma Thompson",
        duration: "30 min",
        type: "Flexibility",
        intensity: "Low",
        spots: "15/20"
      },
      {
        time: "7:00 PM",
        class: "Circuit Training",
        trainer: "Sarah Williams",
        duration: "40 min",
        type: "Cardio",
        intensity: "High",
        spots: "17/20"
      }
    ],
    Friday: [
      {
        time: "6:00 AM",
        class: "Weekend Warrior Prep",
        trainer: "Alex Johnson",
        duration: "45 min",
        type: "Strength",
        intensity: "High",
        spots: "18/20"
      },
      {
        time: "5:30 PM",
        class: "Dance Cardio Fun",
        trainer: "Sarah Williams",
        duration: "30 min",
        type: "Cardio",
        intensity: "Medium",
        spots: "20/20"
      }
    ],
    Saturday: [
      {
        time: "8:00 AM",
        class: "Weekend Bootcamp",
        trainer: "James Park",
        duration: "60 min",
        type: "Strength",
        intensity: "Very High",
        spots: "19/25"
      },
      {
        time: "10:30 AM",
        class: "Beginner Yoga",
        trainer: "Mike Chen",
        duration: "45 min",
        type: "Flexibility",
        intensity: "Low",
        spots: "20/20"
      },
      {
        time: "6:00 PM",
        class: "Social Sports Night",
        trainer: "Emma Thompson",
        duration: "60 min",
        type: "Fun",
        intensity: "Medium",
        spots: "22/30"
      }
    ],
    Sunday: [
      {
        time: "9:00 AM",
        class: "Relaxing Yoga & Meditation",
        trainer: "Mike Chen",
        duration: "60 min",
        type: "Flexibility",
        intensity: "Low",
        spots: "16/20"
      },
      {
        time: "11:00 AM",
        class: "Meal Prep Masterclass",
        trainer: "Lisa Rodriguez",
        duration: "75 min",
        type: "Education",
        intensity: "Low",
        spots: "28/35"
      }
    ]
  };

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const getIntensityColor = (intensity) => {
    if (intensity === "Very High") return "from-red-600 to-red-500";
    if (intensity === "High") return "from-primary to-purple-600";
    if (intensity === "Medium") return "from-secondary to-orange-500";
    return "from-emerald-600 to-emerald-500";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Weekly Class Schedule
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from 30+ classes weekly. All fitness levels welcome. Join live or access recordings anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule View */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          {/* Day Selector */}
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-6 mb-8">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  selectedDay === day
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Classes List */}
          <div className="space-y-4">
            {weeklySchedule[selectedDay]?.map((session, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r ${getIntensityColor(
                  session.intensity
                )} rounded-lg p-0.5`}
              >
                <div className="bg-card rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2 text-primary font-bold text-lg">
                        <Clock className="w-5 h-5" />
                        {session.time}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                        session.intensity === "Very High" ? "bg-red-600" :
                        session.intensity === "High" ? "bg-primary" :
                        session.intensity === "Medium" ? "bg-secondary" :
                        "bg-emerald-600"
                      }`}>
                        {session.intensity}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{session.class}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {session.trainer}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {session.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {session.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {session.spots} spots left
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                    Book Spot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">30+</p>
              <p className="text-foreground font-semibold">Classes Every Week</p>
              <p className="text-muted-foreground text-sm mt-1">Always something new</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-secondary mb-2">6</p>
              <p className="text-foreground font-semibold">Expert Trainers</p>
              <p className="text-muted-foreground text-sm mt-1">All certified professionals</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">7 Days</p>
              <p className="text-foreground font-semibold">Weekly Coverage</p>
              <p className="text-muted-foreground text-sm mt-1">Early morning to evening</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-secondary mb-2">100%</p>
              <p className="text-foreground font-semibold">Recordings Available</p>
              <p className="text-muted-foreground text-sm mt-1">Watch anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How to Book Classes</h2>
            <p className="text-lg text-muted-foreground">It's easy! Just 3 simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-2xl mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Pick a Class</h3>
              <p className="text-muted-foreground">Browse our schedule and find a class that fits your goals and schedule.</p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full font-bold text-2xl mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Book Your Spot</h3>
              <p className="text-muted-foreground">Click "Book Spot" and secure your place. Spots fill up fast!</p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-2xl mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Show Up & Crush It</h3>
              <p className="text-muted-foreground">Get access to the Zoom link and join live, or watch the recording later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Schedule Questions?</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I join classes whenever I want?",
                a: "Yes! Classes are available live every day. Plus, all recordings are available 24/7 so you can join anytime."
              },
              {
                q: "What if the class I want is full?",
                a: "Join the waitlist! If someone cancels, you'll get a spot. Plus, all classes are recorded so you can watch later."
              },
              {
                q: "Can I change my mind about booking?",
                a: "Absolutely. Cancel anytime up to 2 hours before the class starts. No penalty, no judgment."
              },
              {
                q: "Do I need special equipment?",
                a: "Most classes require nothing! Some strength classes might use dumbbells or resistance bands, but we offer alternatives."
              },
              {
                q: "Can I bring a friend?",
                a: "Yes! Get a referral bonus when your friend signs up. Share the love!"
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
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8">
            Book your first class today and join our amazing community of transforming students.
          </p>
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Browse Full Schedule
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
