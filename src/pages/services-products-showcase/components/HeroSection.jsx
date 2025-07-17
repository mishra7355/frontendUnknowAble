import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const HeroSection = () => {
  const stats = [
    { label: "Projects Completed", value: "6+", icon: "CheckCircle" },
    { label: "Happy Clients", value: "4+", icon: "Users" },
    { label: "Years Experience", value: "4+", icon: "Award" },
    { label: "Success Rate", value: "95%", icon: "TrendingUp" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-accent rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-accent rounded-full" />
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-primary rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Premium Services & Solutions</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transform Your Business with Our
                <span className="text-primary"> Expert Services</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From web development to mobile development , we provide
                comprehensive solutions that drive growth and deliver
                exceptional results for businesses of all sizes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon
                      name={stat.icon}
                      size={20}
                      color="var(--color-primary)"
                    />
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                asChild
              >
                <Link to="/meeting-scheduling-integration">
                  Schedule Consultation
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
              >
                <Link to="/meeting-scheduling-integration">Watch Demo</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span className="text-sm text-muted-foreground">
                  SSL Secured
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} color="var(--color-success)" />
                <span className="text-sm text-muted-foreground">
                  Certified Experts
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} color="var(--color-success)" />
                <span className="text-sm text-muted-foreground">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Professional team working on business solutions"
                className="w-full h-[500px] object-cover rounded-2xl shadow-interactive"
              />

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-interactive">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                    <Icon
                      name="TrendingUp"
                      size={16}
                      color="var(--color-success)"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Growth Rate
                    </div>
                    <div className="text-xs text-muted-foreground">
                      +150% this year
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-interactive">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={16} color="var(--color-primary)" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Client Satisfaction
                    </div>
                    <div className="text-xs text-muted-foreground">
                      95% rating
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3 scale-105 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
