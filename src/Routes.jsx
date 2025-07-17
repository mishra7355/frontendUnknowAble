import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomepageLanding from "pages/homepage-landing";
import MeetingSchedulingIntegration from "pages/meeting-scheduling-integration";
import AboutUsTeam from "pages/about-us-team";
import ContactFormInformation from "pages/contact-form-information";
import ServicesProductsShowcase from "pages/services-products-showcase";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your routes here */}
          <Route path="/" element={<HomepageLanding />} />
          <Route path="/homepage-landing" element={<HomepageLanding />} />
          <Route
            path="/meeting-scheduling-integration"
            element={<MeetingSchedulingIntegration />}
          />
          <Route path="/tech" element={<AboutUsTeam />} />
          <Route
            path="/contact-form-information"
            element={<ContactFormInformation />}
          />
          <Route
            path="/services-products-showcase"
            element={<ServicesProductsShowcase />}
          />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
