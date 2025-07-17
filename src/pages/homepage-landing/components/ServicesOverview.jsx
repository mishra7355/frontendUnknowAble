import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServicesOverview = () => {
  // const services = [
  //   {
  //     icon: "Rocket",
  //     title: "Startup Acceleration",
  //     description:
  //       "Fast-track your business growth with our proven methodologies and expert guidance.",
  //     features: [
  //       "Strategic Planning",
  //       "Market Analysis",
  //       "Growth Optimization",
  //     ],
  //     color: "primary",
  //   },
  //   {
  //     icon: "Code",
  //     title: "Technology Solutions",
  //     description:
  //       "Custom software development and digital transformation services tailored to your needs.",
  //     features: ["Custom Development", "API Integration", "Cloud Solutions"],
  //     color: "success",
  //   },
  //   {
  //     icon: "TrendingUp",
  //     title: "Business Consulting",
  //     description:
  //       "Strategic consulting to optimize operations and maximize your competitive advantage.",
  //     features: [
  //       "Process Optimization",
  //       "Performance Analysis",
  //       "Strategic Planning",
  //     ],
  //     color: "accent",
  //   },
  //   {
  //     icon: "Users",
  //     title: "Team Building",
  //     description:
  //       "Build high-performing teams with our recruitment and development expertise.",
  //     features: ["Talent Acquisition", "Team Development", "Culture Building"],
  //     color: "secondary",
  //   },
  //   {
  //     icon: "Shield",
  //     title: "Security Solutions",
  //     description:
  //       "Comprehensive security solutions to protect your business and customer data.",
  //     features: ["Data Protection", "Compliance", "Risk Assessment"],
  //     color: "error",
  //   },
  //   {
  //     icon: "BarChart",
  //     title: "Analytics & Insights",
  //     description:
  //       "Data-driven insights to make informed decisions and track your progress.",
  //     features: ["Performance Metrics", "Reporting", "Predictive Analytics"],
  //     color: "warning",
  //   },
  // ];

  const services = [
    {
      icon: "Code",
      title: "Web App Development",
      description:
        "Build responsive, scalable, and modern web applications using React.js, Next.js, and Node.js.",
      features: [
        "Custom UI with Tailwind CSS",
        "SEO-Friendly SSR with Next.js",
        "REST API & JWT Authentication",
      ],
      color: "primary",
    },
    {
      icon: "Smartphone",
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps for Android and iOS using React Native with a native-like performance.",
      features: [
        "Single Codebase for Both Platforms",
        "Offline Functionality",
        "Play Store & App Store Ready",
      ],
      color: "success",
    },
    {
      icon: "Database",
      title: "Database Design & Management",
      description:
        "Design and manage scalable databases with Prisma ORM, MongoDB, and MySQL.",
      features: [
        "Schema Design",
        "Database Optimization",
        "Secure Data Handling",
      ],
      color: "accent",
    },
    {
      icon: "Zap",
      title: "API Development & Integration",
      description:
        "Robust backend services with Node.js and Express, integrated seamlessly with third-party APIs.",
      features: [
        "RESTful APIs",
        "Third-Party Integrations",
        "Error Handling & Middleware",
      ],
      color: "secondary",
    },
    {
      icon: "LayoutDashboard",
      title: "Admin Panels & Dashboards",
      description:
        "Custom-built admin panels and dashboards with advanced filters, charts, and real-time data.",
      features: [
        "Role-Based Access",
        "Data Tables with Search/Sort",
        "Visual Analytics",
      ],
      color: "error",
    },
    {
      icon: "MonitorPlay",
      title: "Deployment & Maintenance",
      description:
        "Launch-ready deployment using Vercel, Netlify, or traditional hosting with ongoing support.",
      features: [
        "CI/CD Integration",
        "Bug Fixes & Updates",
        "Performance Monitoring",
      ],
      color: "warning",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building Modern Web & Mobile Solutions Using the Latest Technologies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-interactive transition-smooth group"
            >
              <div
                className={`w-12 h-12 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}
              >
                <Icon
                  name={service.icon}
                  size={24}
                  color={`var(--color-${service.color})`}
                />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <Icon name="Check" size={16} color="var(--color-success)" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            asChild
          >
            <Link to="/services-products-showcase">View All Services</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesOverview;
