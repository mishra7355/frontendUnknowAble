import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import ServicesOverview from "./components/ServicesOverview";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustSignals from "./components/TrustSignals";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

const HomepageLanding = () => {
  return (
    <>
      <Helmet>
        <title>unKnowAble</title>
        <meta
          name="description"
          content="Transform your business with unKnowAble comprehensive solutions. Schedule a meeting today to discover how we can accelerate your growth."
        />
        <meta
          name="keywords"
          content="startup solutions, business growth, consulting, meetings, professional services"
        />
        <meta
          property="og:title"
          content="unKnowAble - Premium Business Solutions"
        />
        <meta
          property="og:description"
          content="Transform your business with our comprehensive solutions"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          <HeroSection />
          <ServicesOverview />
          <TestimonialsSection />
          <TrustSignals />
          <CallToActionSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomepageLanding;
