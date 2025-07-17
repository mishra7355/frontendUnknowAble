import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Join Our Team CTA */}
          {/* <div className="bg-card rounded-lg p-8 shadow-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Users" size={32} color="var(--color-primary)" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Join Our Team</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're always looking for talented individuals who share our passion for helping startups succeed. Join us in building the future of entrepreneurship.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} />
                <span>Remote & On-site positions available</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>Flexible working hours</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Heart" size={16} />
                <span>Comprehensive benefits package</span>
              </div>
            </div>
            <div className="mt-6">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => window.open('mailto:careers@startuphubpro.com?subject=Career Inquiry', '_blank')}
              >
                View Open Positions
              </Button>
            </div>
          </div> */}

          {/* Work With Us CTA */}
          <div className="bg-card rounded-lg p-8 shadow-card text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Handshake" size={32} color="var(--color-accent)" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Work With Us
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ready to take your business to the next level? Let's discuss how
              our expertise and proven strategies can accelerate your growth and
              success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Icon name="CheckCircle" size={16} />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Zap" size={16} />
                <span>Customized growth strategies</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} />
                <span>Proven track record</span>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
                asChild
              >
                <Link to="/contact-form-information">Get In Touch</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                fullWidth
                asChild
              >
                <Link to="/meeting-scheduling-integration">
                  Schedule a Meeting
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Trusted by client worldwide to accelerate their growth journey
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} color="var(--color-accent)" />
              <span className="text-sm text-muted-foreground">
                4.8/5 Client Rating
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} color="var(--color-primary)" />
              <span className="text-sm text-muted-foreground">
                4+ Client Served
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={20} color="var(--color-success)" />
              <span className="text-sm text-muted-foreground">
                95% Success Rate
              </span>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Icon name="DollarSign" size={20} color="var(--color-accent)" />
              <span className="text-sm text-muted-foreground">
                $50M+ Funding Raised
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
