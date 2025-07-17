import React from "react";
import Icon from "../../../components/AppIcon";

const TrustSignals = () => {
  const companyLogos = [
    { name: "TechCorp", logo: "Building" },
    { name: "DataSoft", logo: "Database" },
    { name: "CloudFlow", logo: "Cloud" },
    { name: "InnovateLabs", logo: "Lightbulb" },
    { name: "ScaleUp", logo: "TrendingUp" },
    { name: "NextGen", logo: "Zap" },
  ];

  // const securityBadges = [
  //   { name: "SOC 2 Compliant", icon: "Shield" },
  //   { name: "ISO 27001", icon: "Award" },
  //   { name: "GDPR Ready", icon: "Lock" },
  //   { name: "99.9% Uptime", icon: "CheckCircle" },
  // ];

  const stats = [
    { value: "4+", label: "Happy Clients" },
    { value: "6+", label: "Projects Completed" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-muted-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-border hover:shadow-card transition-smooth group"
              >
                <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-smooth">
                  <Icon
                    name={company.logo}
                    size={20}
                    color="var(--color-muted-foreground)"
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        {/* <div className="text-center">
          <h3 className="text-lg font-medium text-foreground mb-8">
            Security & Compliance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg border border-border hover:shadow-card transition-smooth group"
              >
                <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center group-hover:bg-success/20 transition-smooth">
                  <Icon
                    name={badge.icon}
                    size={14}
                    color="var(--color-success)"
                  />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustSignals;
