import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";
import { Users } from "lucide-react";

export default function Trainers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <PlaceholderPage
          title="Find Your Trainer"
          description="Browse our team of certified fitness professionals, view their profiles, certifications, specialties, and book sessions. Ask us to build this page with trainer directory and booking system!"
          icon={<Users className="w-16 h-16" />}
        />
      </div>
      <Footer />
    </div>
  );
}
