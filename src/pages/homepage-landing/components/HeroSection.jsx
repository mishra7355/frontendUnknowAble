import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform Your Ideas into Scalable{" "}
            <span className="text-primary">Web & Mobile Apps</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Empower your business with high-performance solutions using
            cutting-edge technologies — Built and delivered by a full-stack
            expert.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              asChild
            >
              <Link to="/meeting-scheduling-integration">Schedule Meeting</Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              iconName="Play"
              iconPosition="left"
              asChild
            >
              <Link to="/services-products-showcase">Learn More</Link>
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border border-border">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name="Zap" size={16} color="var(--color-success)" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Fast Implementation
              </span>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border border-border">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Shield" size={16} color="var(--color-primary)" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Enterprise Security
              </span>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border border-border">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Users" size={16} color="var(--color-accent)" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Expert Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
