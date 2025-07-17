import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";

const Breadcrumb = () => {
  const location = useLocation();

  const pathMap = {
    "/homepage-landing": "Home",
    "/tech": "Tech",
    "/services-products-showcase": "Services",
    "/contact-form-information": "Contact",
    "/meeting-scheduling-integration": "Schedule Meeting",
  };

  const currentPath = location.pathname;
  const currentPageName = pathMap[currentPath];

  // Don't show breadcrumb on homepage
  if (currentPath === "/homepage-landing") {
    return null;
  }

  return (
    <nav
      className="flex items-center space-x-2 text-sm text-muted-foreground mb-6"
      aria-label="Breadcrumb"
    >
      <Link
        to="/homepage-landing"
        className="hover:text-foreground transition-smooth"
      >
        Home
      </Link>
      <Icon name="ChevronRight" size={14} />
      <span className="text-foreground font-medium">{currentPageName}</span>
    </nav>
  );
};

export default Breadcrumb;
