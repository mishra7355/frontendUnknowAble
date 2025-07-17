import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            We help businesses grow through custom-built solutions, strategic
            consulting, and modern web & mobile technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/meeting-scheduling-integration">
                Schedule Free Consultation
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/contact-form-information">Contact Us Today</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span className="text-sm">Response within 24 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span className="text-sm">Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} />
              <span className="text-sm">Expert team ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
