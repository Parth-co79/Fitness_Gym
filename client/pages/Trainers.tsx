import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Clock, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const trainers = [
    {
      id: 1,
      name: "Alex Johnson",
      specialty: "Strength & Power Coach",
      bio: "Alex has 5+ years of experience helping students build strength and confidence. His dynamic coaching style makes every workout feel achievable.",
      experience: "5+ years",
      students: "1,200+",
      rating: 4.9,
      reviews: 127,
      availability: "Mon, Wed, Fri, Sat",
      sessionPrice: "$45/session",
      certifications: ["NASM CPT", "Precision Nutrition Specialist"],
      specialties: ["Strength Training", "Athletic Performance", "Beginner-Friendly", "Muscle Gain"],
      testimonial: "Alex transformed my entire approach to fitness. He made strength training accessible and actually fun!",
      image: "primary"
    },
    {
      id: 2,
      name: "Sarah Williams",
      specialty: "Cardio & Weight Loss Expert",
      bio: "Sarah helps students lose weight sustainably through HIIT, cardio, and nutrition coaching. Her energetic approach keeps you motivated every single session.",
      experience: "7+ years",
      students: "1,500+",
      rating: 4.95,
      reviews: 156,
      availability: "Tue, Thu, Sat, Sun",
      sessionPrice: "$45/session",
      certifications: ["ACE Fitness Professional", "NASM-CES"],
      specialties: ["HIIT Training", "Cardio Conditioning", "Weight Loss", "Nutrition Coaching"],
      testimonial: "Sarah's energy is contagious! I lost 12 lbs in 4 weeks and actually enjoyed every workout.",
      image: "secondary"
    },
    {
      id: 3,
      name: "Mike Chen",
      specialty: "Flexibility & Wellness Coach",
      bio: "Mike specializes in yoga, mobility, and injury prevention. His holistic approach ensures you're not just fit, but also balanced and injury-free.",
      experience: "6+ years",
      students: "950+",
      rating: 4.87,
      reviews: 98,
      availability: "Mon, Tue, Wed, Fri, Sun",
      sessionPrice: "$40/session",
      certifications: ["RYT-500 Yoga Instructor", "NASM CPT", "Functional Movement Specialist"],
      specialties: ["Yoga", "Mobility Training", "Injury Prevention", "Flexibility"],
      testimonial: "Mike's flexibility coaching eliminated my back pain. I feel so much better moving through life.",
      image: "purple"
    },
    {
      id: 4,
      name: "Lisa Rodriguez",
      specialty: "Nutrition & Lifestyle Coach",
      bio: "Lisa helps students build sustainable habits around food and fitness. She understands the student budget and lifestyle perfectly.",
      experience: "4+ years",
      students: "800+",
      rating: 4.92,
      reviews: 112,
      availability: "Wed, Thu, Sat, Sun",
      sessionPrice: "$40/session",
      certifications: ["Registered Dietitian", "Precision Nutrition Coach"],
      specialties: ["Nutrition Coaching", "Meal Planning", "Student Budget", "Habit Building"],
      testimonial: "Lisa helped me understand nutrition without feeling restricted. I actually enjoy my food now!",
      image: "secondary"
    },
    {
      id: 5,
      name: "James Park",
      specialty: "Athletic Performance Coach",
      bio: "James works with students looking to improve athletic performance. Whether you play sports or want to feel more athletic, he's your coach.",
      experience: "6+ years",
      students: "1,100+",
      rating: 4.88,
      reviews: 134,
      availability: "Mon, Wed, Thu, Sat",
      sessionPrice: "$50/session",
      certifications: ["NSCA CSCS", "NASM CPT", "Sports Nutrition Specialist"],
      specialties: ["Athletic Performance", "Sport-Specific Training", "Power Development", "Speed & Agility"],
      testimonial: "James took my performance to the next level. I'm faster, stronger, and more confident.",
      image: "primary"
    },
    {
      id: 6,
      name: "Emma Thompson",
      specialty: "Women's Fitness Specialist",
      bio: "Emma specializes in creating inclusive, empowering programs for women. She understands unique challenges and creates solutions.",
      experience: "5+ years",
      students: "1,050+",
      rating: 4.93,
      reviews: 141,
      availability: "Tue, Thu, Fri, Sun",
      sessionPrice: "$45/session",
      certifications: ["NASM CPT", "Women's Health Specialist", "Pre/Post Natal Coach"],
      specialties: ["Women's Fitness", "Hormonal Balance", "Core Strength", "Empowerment"],
      testimonial: "Emma gets it. She created a program that works with my body, not against it. Game changer!",
      image: "secondary"
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
              Meet Your Coaches
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified professionals who understand students like you. Real expertise. Real passion. Real results.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all group cursor-pointer" onClick={() => setSelectedTrainer(selectedTrainer === trainer.id ? null : trainer.id)}>
                {/* Image */}
                <div className={`h-48 bg-gradient-to-br ${
                  trainer.image === "secondary" ? "from-secondary to-orange-500" :
                  trainer.image === "primary" ? "from-primary to-purple-600" :
                  "from-purple-600 to-pink-500"
                } flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <Users className="w-20 h-20 text-white/60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{trainer.name}</h3>
                  <p className={`font-semibold text-sm mb-2 ${
                    trainer.image === "secondary" ? "text-secondary" : "text-primary"
                  }`}>
                    {trainer.specialty}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{trainer.bio}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Experience</p>
                      <p className="font-semibold text-foreground text-sm">{trainer.experience}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Students</p>
                      <p className="font-semibold text-foreground text-sm">{trainer.students}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Rating</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <p className="font-semibold text-foreground text-sm">{trainer.rating}</p>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">({trainer.reviews} reviews)</span>
                  </div>

                  {/* CTA */}
                  <button className={`w-full px-4 py-2 font-semibold rounded-lg transition-colors text-white text-sm ${
                    trainer.image === "secondary" ? "bg-secondary hover:opacity-90" :
                    trainer.image === "primary" ? "bg-primary hover:opacity-90" :
                    "bg-purple-600 hover:opacity-90"
                  }`}>
                    Book Session - {trainer.sessionPrice}
                  </button>

                  {/* Expandable Details */}
                  {selectedTrainer === trainer.id && (
                    <div className="mt-6 pt-6 border-t border-border space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {trainer.specialties.map((spec, idx) => (
                            <span key={idx} className="text-xs bg-muted text-foreground px-2 py-1 rounded">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Availability</h4>
                        <p className="text-sm text-muted-foreground">{trainer.availability}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
                        <ul className="space-y-1">
                          {trainer.certifications.map((cert, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 border border-border">
                        <p className="text-sm text-foreground italic">"{trainer.testimonial}"</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Coaching Works */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How Personal Coaching Works</h2>
            <p className="text-lg text-muted-foreground">Get expert guidance tailored to your goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Sessions</h3>
                  <p className="text-muted-foreground">30 or 60-minute sessions. Online or in-person. Pick times that work for you.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Expert Guidance</h3>
                  <p className="text-muted-foreground">Certified coaches provide form correction, motivation, and personalized advice.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Plans</h3>
                  <p className="text-muted-foreground">Every plan is built around YOUR goals, schedule, and resources.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Progress Tracking</h3>
                  <p className="text-muted-foreground">Regular check-ins to adjust your program and celebrate wins.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Accountability</h3>
                  <p className="text-muted-foreground">Your coach keeps you on track and celebrates your progress.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <Star className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Lifetime Access</h3>
                  <p className="text-muted-foreground">Keep your coaching notes and programs forever as reference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-purple-600 to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Expert Coaching Today</h2>
          <p className="text-lg text-white/90 mb-8">
            Book your first session with any of our coaches. First consultation is free!
          </p>
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Book Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
