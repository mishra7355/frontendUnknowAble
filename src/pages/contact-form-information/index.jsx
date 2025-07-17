import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Breadcrumb from "../../components/ui/Breadcrumb";
import ContactForm from "./components/ContactForm";
import ContactInformation from "./components/ContactInformation";
import { Link } from "react-router-dom";
//import CalendlyIntegration from "./components/CalendlyIntegration";
import Icon from "../../components/AppIcon";

const ContactFormInformation = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - unKnowAble | Get in Touch</title>
        <meta
          name="description"
          content="Contact unKnowAble for your business needs. Fill out our contact form, schedule a meeting, or reach us directly. We respond within 24 hours."
        />
        <meta
          name="keywords"
          content="contact, startup, business, consultation, meeting, support"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <Breadcrumb />

              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon
                    name="MessageSquare"
                    size={32}
                    color="var(--color-primary)"
                  />
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Let's Start a Conversation
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Ready to transform your business? We're here to help. Choose
                  how you'd like to connect with our team.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} color="var(--color-success)" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Shield"
                      size={16}
                      color="var(--color-success)"
                    />
                    <span>100% confidential</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} color="var(--color-success)" />
                    <span>Expert consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Contact Form - Primary Column */}
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>

                {/* Contact Information - Secondary Column */}
                <div className="lg:col-span-1">
                  <ContactInformation />
                </div>
              </div>
            </div>
          </section>

          {/* Calendly Integration Section */}
          {/* <section className="py-16 lg:py-24 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 lg:px-8">
              <CalendlyIntegration />
            </div>
          </section> */}

          {/* FAQ Section */}
          <section className="py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Quick answers to common questions about contacting us
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "How quickly do you respond to inquiries?",
                    answer:
                      "We typically respond to all inquiries within 2-4 hours. For urgent matters, please call us directly.",
                  },
                  {
                    question:
                      "What information should I include in my message?",
                    answer:
                      "Please include details about your project goals, timeline, budget range, and any specific requirements. The more information you provide, the better we can tailor our response to your needs.",
                  },
                  {
                    question: "Do you offer free consultations?",
                    answer:
                      "Yes! We offer complimentary 30-minute discovery calls to discuss your project and explore how we can help. You can schedule one using our calendar integration above.",
                  },
                  // {
                  //   question: "Can I visit your office in person?",
                  //   answer:
                  //     "Absolutely! We welcome in-person meetings at our San Francisco office. Please schedule an appointment in advance to ensure someone from our team is available to meet with you.",
                  // },
                  {
                    question: "What if I'm not sure which service I need?",
                    answer:
                      "No problem! Our team can help you identify the best solutions for your needs. Simply describe your challenges or goals in the contact form, and we'll recommend the most suitable services.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg border border-border p-6"
                  >
                    <h3 className="font-semibold text-foreground mb-3 flex items-center">
                      <Icon
                        name="HelpCircle"
                        size={18}
                        className="mr-2 text-primary"
                      />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground pl-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join some of successful businesses that have transformed their
                operations with our help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-smooth"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   document
                  //     .querySelector(".bg-card")
                  //     .scrollIntoView({ behavior: "smooth" });
                  // }}
                >
                  <Icon name="Edit" size={18} className="mr-2" />
                  Fill Out Form
                </a>
                <Link
                  // href="#"
                  to="/meeting-scheduling-integration"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-smooth"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   document
                  //     .querySelector(".bg-muted\\/30")
                  //     .scrollIntoView({ behavior: "smooth" });
                  // }}
                >
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Schedule Call
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <Icon name="Rocket" size={20} color="white" />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  unKnowAble
                </span>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} unKnowAble. All rights reserved.
                </p>
                <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactFormInformation;
