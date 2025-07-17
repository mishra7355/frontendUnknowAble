import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "StartupHub Pro was established with a vision to empower entrepreneurs and accelerate startup growth.",
      icon: "Rocket",
      achievements: ["Initial team of 3 co-founders", "First office in San Francisco", "Seed funding of $500K"]
    },
    {
      year: "2021",
      title: "First 100 Clients",
      description: "Reached our first major milestone by successfully onboarding and serving 100 startup clients.",
      icon: "Users",
      achievements: ["100+ startups served", "Team expanded to 15 members", "Series A funding of $2M"]
    },
    {
      year: "2022",
      title: "Platform Launch",
      description: "Launched our comprehensive digital platform providing end-to-end startup support services.",
      icon: "Monitor",
      achievements: ["Digital platform launched", "500+ registered users", "Expanded to 3 cities"]
    },
    {
      year: "2023",
      title: "Market Expansion",
      description: "Expanded operations nationwide and established partnerships with leading accelerators and VCs.",
      icon: "Globe",
      achievements: ["Nationwide expansion", "50+ VC partnerships", "1000+ startups in network"]
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as 'Best Startup Support Platform' and achieved significant growth milestones.",
      icon: "Award",
      achievements: ["Industry awards received", "2000+ clients served", "$50M+ funding facilitated"]
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to innovate and expand our services to support the next generation of entrepreneurs.",
      icon: "Target",
      achievements: ["AI-powered tools launch", "International expansion", "5000+ startup goal"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a small startup to a leading platform supporting thousands of entrepreneurs, here's how we've grown and evolved over the years.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10" />
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-interactive transition-smooth">
                    {/* Year Badge */}
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <Icon name={milestone.icon} size={16} />
                      <span>{milestone.year}</span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{milestone.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {milestone.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Check" size={14} color="var(--color-success)" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Our Impact Today</h3>
            <p className="text-muted-foreground">The numbers that define our success and commitment to the startup ecosystem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,000+</div>
              <div className="text-sm text-muted-foreground">Startups Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-sm text-muted-foreground">Funding Facilitated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Client Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;