import React, { useState } from "react";
import Header from "../../components/ui/Header";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Icon from "../../components/AppIcon";
import MeetingPreparation from "./components/MeetingPreparation";
import BookingMeetingCal from "./components/BookingMeetingCal";

const MeetingSchedulingIntegration = () => {
  const [selectedMeetingType, setSelectedMeetingType] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <Breadcrumb />

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Calendar" size={32} color="var(--color-primary)" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Schedule Your Meeting
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book a personalized consultation with our expert team to discuss
              your business needs and explore how we can help you drive growth
              and achieve your goals.
            </p>
          </div>

          {bookingConfirmed ? (
            <div className="max-w-2xl mx-auto"></div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Calendly Widget */}
                {!selectedMeetingType && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-foreground">
                        Book Your Meeting
                      </h2>
                    </div>

                    <BookingMeetingCal />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <MeetingPreparation />
              </div>
            </div>
          )}

          {/* Features Section */}
          {!bookingConfirmed && (
            <div className="mt-16 bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                Why Schedule with unKnowAble?
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={24} color="var(--color-primary)" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Expert Team
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with experienced professionals who understand
                    startup challenges
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={24} color="var(--color-success)" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Quick Setup
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Easy scheduling process with instant confirmation and
                    calendar integration
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={24} color="var(--color-accent)" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Secure Platform
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All meetings are conducted on secure, professional platforms
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} unKnowAble. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MeetingSchedulingIntegration;
