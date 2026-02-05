import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";
import { Calendar } from "lucide-react";

export default function Schedule() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <PlaceholderPage
          title="Weekly Workout Schedule"
          description="View your personalized weekly workout schedule, class times, trainer availability, and manage your fitness calendar. Let us build this with interactive scheduling features!"
          icon={<Calendar className="w-16 h-16" />}
        />
      </div>
      <Footer />
    </div>
  );
}
