import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, ArrowRight, Zap, Award, Crown } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for exploring fitness",
      icon: Zap,
      buttonText: "Start Free",
      buttonColor: "bg-muted text-foreground hover:bg-muted/80",
      highlight: false,
      features: [
        { name: "Workout library access", included: true },
        { name: "Progress tracking", included: true },
        { name: "Community forum", included: true },
        { name: "Email support", included: true },
        { name: "Personalized meal plans", included: false },
        { name: "Trainer check-ins", included: false },
        { name: "Custom workout plans", included: false },
        { name: "Priority support", included: false },
        { name: "1-on-1 coaching", included: false }
      ]
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For serious transformation",
      icon: Award,
      buttonText: "Start Free Trial",
      buttonColor: "bg-white text-primary hover:bg-gray-100",
      highlight: true,
      badge: "Most Popular",
      features: [
        { name: "Everything in Starter", included: true },
        { name: "Personalized meal plans", included: true },
        { name: "Weekly trainer check-ins", included: true },
        { name: "Priority email support", included: true },
        { name: "Nutrition coaching", included: true },
        { name: "Progress analytics", included: true },
        { name: "Custom workout plans", included: false },
        { name: "1-on-1 coaching", included: false },
        { name: "24/7 VIP support", included: false }
      ]
    },
    {
      name: "Elite",
      price: "$59",
      period: "/month",
      description: "Premium coaching & support",
      icon: Crown,
      buttonText: "Start Free Trial",
      buttonColor: "bg-primary text-white hover:opacity-90",
      highlight: false,
      features: [
        { name: "Everything in Pro", included: true },
        { name: "1-on-1 coaching calls (bi-weekly)", included: true },
        { name: "Custom workout plans", included: true },
        { name: "24/7 VIP support", included: true },
        { name: "Nutrition meal prep coaching", included: true },
        { name: "Sleep & recovery optimization", included: true },
        { name: "Supplementation guide", included: true },
        { name: "Monthly progress photos review", included: true },
        { name: "Priority access to coaches", included: true }
      ]
    }
  ];

  const faqs = [
    {
      q: "Can I upgrade or downgrade anytime?",
      a: "Yes! Change your plan anytime. Upgrades take effect immediately, downgrades at the end of your billing cycle."
    },
    {
      q: "What's your refund policy?",
      a: "Try us for 14 days risk-free. If you're not satisfied, we'll refund 100%. No questions asked."
    },
    {
      q: "Do you offer student discounts?",
      a: "Yes! Show us your student ID and get 20% off any plan. We believe fitness should be affordable for students."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. Payments are secure and encrypted."
    },
    {
      q: "Is there a contract?",
      a: "Nope! Cancel anytime. No long-term commitments. We want you because you love us, not because you're locked in."
    },
    {
      q: "What if I travel or take a break?",
      a: "Pause your subscription for up to 3 months anytime. No charges during pause period. Resume whenever you're ready."
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No surprise charges. Choose what works for you and upgrade anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`rounded-2xl overflow-hidden transition-all ${
                    plan.highlight
                      ? "ring-2 ring-primary shadow-2xl md:scale-105"
                      : "shadow-lg hover:shadow-xl"
                  } ${plan.highlight ? "bg-gradient-to-br from-primary to-purple-600" : "bg-card border border-border"}`}
                >
                  {/* Header */}
                  <div className={`p-8 ${plan.highlight ? "text-white" : ""}`}>
                    {plan.badge && (
                      <div className="inline-block px-4 py-1 bg-secondary text-white rounded-full text-sm font-bold mb-4">
                        {plan.badge}
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8" />
                      <h3 className={`text-3xl font-bold ${plan.highlight ? "" : "text-foreground"}`}>
                        {plan.name}
                      </h3>
                    </div>
                    <p className={`text-sm mb-6 ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className={`text-5xl font-bold ${plan.highlight ? "" : "text-foreground"}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className={`${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <button
                      className={`w-full py-3 font-bold rounded-lg transition-colors ${plan.buttonColor}`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>

                  {/* Features */}
                  <div className={`px-8 pb-8 space-y-4 ${plan.highlight ? "text-white" : ""}`}>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? ""
                              : plan.highlight
                                ? "text-white/50"
                                : "text-muted-foreground"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comparison Table */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Detailed Comparison</h2>
            <div className="overflow-x-auto bg-card border border-border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-foreground font-semibold">Feature</th>
                    <th className="text-center p-4 text-foreground font-semibold">Starter</th>
                    <th className="text-center p-4 text-foreground font-semibold">Pro</th>
                    <th className="text-center p-4 text-foreground font-semibold">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Workout Library", starter: true, pro: true, elite: true },
                    { feature: "Progress Tracking", starter: true, pro: true, elite: true },
                    { feature: "Community Access", starter: true, pro: true, elite: true },
                    { feature: "Personalized Meal Plans", starter: false, pro: true, elite: true },
                    { feature: "Weekly Trainer Check-ins", starter: false, pro: true, elite: true },
                    { feature: "Email Support", starter: true, pro: true, elite: true },
                    { feature: "Priority Support", starter: false, pro: true, elite: true },
                    { feature: "1-on-1 Coaching Calls", starter: false, pro: false, elite: true },
                    { feature: "Custom Workout Plans", starter: false, pro: false, elite: true },
                    { feature: "24/7 VIP Support", starter: false, pro: false, elite: true },
                    { feature: "Supplementation Guide", starter: false, pro: false, elite: true }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4 text-foreground font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.starter ? (
                          <Check className="w-5 h-5 text-primary inline" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground inline" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.pro ? (
                          <Check className="w-5 h-5 text-primary inline" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground inline" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.elite ? (
                          <Check className="w-5 h-5 text-primary inline" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground inline" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Billing & Subscription Questions</h2>
            <p className="text-lg text-muted-foreground">We're transparent about everything</p>
          </div>

          <div className="space-y-6">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Discount */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Student Discount Available</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Studying hard? Let us help you stay fit! Show your student ID and get 20% off any plan.
            </p>
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors">
              Claim Student Discount
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/90 mb-8">
            All plans come with a 14-day risk-free trial. No credit card required to start.
          </p>
          <button className="px-8 py-4 bg-white text-secondary font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Choose Your Plan
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
