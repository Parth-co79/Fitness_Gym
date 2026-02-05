import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";
import { CreditCard } from "lucide-react";

export default function Plans() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <PlaceholderPage
          title="Membership Plans & Billing"
          description="Compare our membership plans, manage your subscription, view billing history, and upgrade your plan. Ask us to build this with payment integration!"
          icon={<CreditCard className="w-16 h-16" />}
        />
      </div>
      <Footer />
    </div>
  );
}
