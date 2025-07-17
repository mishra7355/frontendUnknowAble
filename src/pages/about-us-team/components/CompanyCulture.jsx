import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyCulture = () => {
  const cultureHighlights = [
    {
      title: "Innovation Hub",
      description: "Our modern workspace designed to foster creativity and collaboration",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Team Collaboration",
      description: "Regular brainstorming sessions and cross-functional teamwork",
      image: "https://images.pixabay.com/photo/2015/07/17/22/43/student-849825_640.jpg"
    },
    {
      title: "Learning & Growth",
      description: "Continuous learning opportunities and professional development",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and wellness programs for our team",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "Best Workplace 2024",
      description: "Recognized by TechCorp Magazine"
    },
    {
      icon: "Star",
      title: "Top Startup Accelerator",
      description: "Ranked #1 by Entrepreneur Weekly"
    },
    {
      icon: "Trophy",
      title: "Innovation Excellence",
      description: "Silicon Valley Innovation Awards"
    },
    {
      icon: "Shield",
      title: "Client Trust Award",
      description: "98% client satisfaction rating"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Culture & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe that great companies are built by great people in great environments. Here's a glimpse into our culture and the recognition we've received.
          </p>
        </div>

        {/* Culture Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cultureHighlights.map((highlight, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-interactive transition-smooth">
              <div className="relative overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold mb-1">{highlight.title}</h3>
                  <p className="text-white/90 text-sm">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-card rounded-lg p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={achievement.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;