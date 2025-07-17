import React from "react";
import Icon from "../../../components/AppIcon";

const CompanyStory = () => {
  const companyValues = [
    {
      icon: "Target",
      title: "Innovation First",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    },
    {
      icon: "Users",
      title: "Client-Centric",
      description:
        "Every decision we make is guided by our commitment to client success and satisfaction.",
    },
    {
      icon: "Shield",
      title: "Trust & Transparency",
      description:
        "We build lasting relationships through honest communication and reliable delivery.",
    },
    {
      icon: "Zap",
      title: "Agile Excellence",
      description:
        "We adapt quickly to change while maintaining the highest standards of quality.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Company Story Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Born in 2025, <strong>unKnowAble</strong> is driven by a simple yet
            powerful vision — enabling the next generation of startups through
            innovation, strategy, and full-stack development.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-lg p-8 mb-12 shadow-card">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Rocket" size={32} color="var(--color-primary)" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To empower startups and growing businesses with end-to-end
              software solutions, strategic consultation, and cutting-edge
              technologies — helping them launch faster, scale smarter, and
              succeed sustainably.
            </p>
          </div>
        </div>

        {/* Founding Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              How We Started
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our journey began when our founders, experienced entrepreneurs
                themselves, recognized the challenges that early-stage companies
                face in scaling their operations and reaching their target
                markets.
              </p>
              <p>
                After successfully launching and exiting multiple startups, they
                decided to create a platform that would provide other
                entrepreneurs with the tools, knowledge, and network needed to
                accelerate their growth journey.
              </p>
              <p>
                Today, we've helped over 500+ startups achieve their goals, from
                initial concept validation to successful market entry and
                beyond.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Startups Helped
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    $50M+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Funding Raised
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Success Rate
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    4.9/5
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Client Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={value.icon}
                    size={24}
                    color="var(--color-primary)"
                  />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
