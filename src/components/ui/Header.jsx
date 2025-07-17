import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: "Home", path: "/homepage-landing", icon: "Home" },
    { label: "Tech", path: "/tech", icon: "Cpu" },
    { label: "Services", path: "/services-products-showcase", icon: "Package" },
    { label: "Contact", path: "/contact-form-information", icon: "Mail" },
    {
      label: "Schedule Meeting",
      path: "/meeting-scheduling-integration",
      icon: "Calendar",
    },
  ];

  const isActivePath = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-card border-b border-border z-100 shadow-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 lg:px-8">
            {/* Logo */}
            <Link
              to="/homepage-landing"
              className="flex items-center space-x-2 transition-smooth hover:opacity-80"
              onClick={closeMobileMenu}
            >
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                {/* <Icon name="Rocket" size={20} color="white" /> */}
                <Icon name="Infinity" size={20} color="white" />

                {/* <img src={"favicon.svg"} alt="icon" /> */}
              </div>
              <span className="text-xl font-semibold text-foreground">
                unKnowAble
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                    isActivePath(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="default"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                asChild
              >
                <Link to="/meeting-scheduling-integration">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-200 md:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-card border-l border-border shadow-interactive">
            <div className="flex items-center justify-between h-16 px-4 border-b border-border">
              <span className="text-lg font-semibold text-foreground">
                Menu
              </span>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
                aria-label="Close menu"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-smooth ${
                    isActivePath(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-border">
                <Button
                  variant="default"
                  size="sm"
                  iconName="Calendar"
                  iconPosition="left"
                  fullWidth
                  asChild
                >
                  <Link
                    to="/meeting-scheduling-integration"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
