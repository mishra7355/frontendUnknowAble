import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Breadcrumb from "../../components/ui/Breadcrumb";
//import CompanyStory from "./components/CompanyStory";
import TeamProfiles from "./components/TeamProfiles";
// import CompanyTimeline from "./components/CompanyTimeline";
// import CompanyCulture from "./components/CompanyCulture";
import CallToAction from "./components/CallToAction";

const AboutUsTeam = () => {
  return (
    <>
      <Helmet>
        <title>Tech - unKnowAble</title>
        <meta
          name="description"
          content="Learn about unKnowAble mission, values, and meet our expert team of entrepreneurs, strategists, and advisors dedicated to helping  business succeed."
        />
        <meta
          name="keywords"
          content="about us, team, startup experts, company story, mission, values, entrepreneurs, tech"
        />
        <meta property="og:title" content="About Us & Team - unKnowAble" />
        <meta
          property="og:description"
          content="Meet the team behind unKnowAble and learn about our mission to empower business with comprehensive business solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          {/* Breadcrumb Navigation */}
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-6">
            <Breadcrumb />
          </div>

          {/* Company Story Section */}
          {/* <CompanyStory /> */}

          {/* Team Profiles Section */}
          <TeamProfiles />

          {/* Company Timeline Section */}
          {/* <CompanyTimeline /> */}

          {/* Company Culture Section */}
          {/* <CompanyCulture /> */}

          {/* Call to Action Section */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} unKnowAble. All rights reserved. |
              <span className="mx-2">•</span>
              Empowering business to achieve extraordinary success.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUsTeam;
