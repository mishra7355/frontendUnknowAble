import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "Tech", path: "/tech" },
        { label: "Services", path: "/services-products-showcase" },
        { label: "Contact", path: "/contact-form-information" },
        { label: "Schedule Meeting", path: "/meeting-scheduling-integration" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Business Consulting", path: "/services-products-showcase" },
        { label: "Technology Solutions", path: "/services-products-showcase" },
        { label: "Team Building", path: "/services-products-showcase" },
        { label: "Analytics & Insights", path: "/services-products-showcase" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", path: "#" },
        { label: "Case Studies", path: "#" },
        { label: "Blog", path: "#" },
        { label: "Support Center", path: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/company/unknowable/posts/?feedView=all",
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: "https://x.com/am6072000",
    },
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Instagram", icon: "Instagram", url: "#" },
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link
              to="/homepage-landing"
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Icon name="Infinity" size={20} color="white" />
              </div>
              <span className="text-xl font-semibold">unKnowAble</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Accelerating business growth through innovative solutions, expert
              consulting, and cutting-edge technology.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-smooth text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © 2025 unKnowAble. All rights reserved.
          </div>

          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-smooth"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-smooth"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-smooth"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
