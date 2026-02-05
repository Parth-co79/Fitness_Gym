import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";
import { Zap } from "lucide-react";

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <PlaceholderPage
          title="Detailed Programs"
          description="This page will showcase all available fitness programs with detailed information about each workout plan, nutrition guidance, and progression tracking. Tell us to build this page!"
          icon={<Zap className="w-16 h-16" />}
        />
      </div>
      <Footer />
    </div>
  );
}
