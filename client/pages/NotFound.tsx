import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle } from "lucide-react";
import PlaceholderPage from "@/components/PlaceholderPage";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <PlaceholderPage
          title="Page Not Found (404)"
          description={`Sorry, we couldn't find the page you're looking for: "${location.pathname}". Return to home and explore our fitness programs!`}
          icon={<AlertCircle className="w-16 h-16 text-secondary" />}
        />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
