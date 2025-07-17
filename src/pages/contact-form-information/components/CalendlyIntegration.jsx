import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CalendlyIntegration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    // Simulate Calendly widget loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const meetingTypes = [
    {
      id: 'discovery',
      title: 'Discovery Call',
      duration: '30 minutes',
      description: 'Perfect for initial discussions about your project needs and how we can help.',
      icon: 'MessageCircle',
      popular: false
    },
    {
      id: 'consultation',
      title: 'Strategy Consultation',
      duration: '60 minutes',
      description: 'Deep dive into your business goals and create a tailored strategy for success.',
      icon: 'Target',
      popular: true
    },
    {
      id: 'demo',
      title: 'Product Demo',
      duration: '45 minutes',
      description: 'See our solutions in action and learn how they can transform your business.',
      icon: 'Monitor',
      popular: false
    }
  ];

  const availableSlots = [
    { date: '2025-07-10', time: '10:00 AM', available: true },
    { date: '2025-07-10', time: '2:00 PM', available: true },
    { date: '2025-07-10', time: '4:00 PM', available: false },
    { date: '2025-07-11', time: '9:00 AM', available: true },
    { date: '2025-07-11', time: '11:00 AM', available: true },
    { date: '2025-07-11', time: '3:00 PM', available: true }
  ];

  const handleScheduleCall = (meetingType) => {
    setShowCalendar(true);
    // In real implementation, this would open Calendly widget
    console.log(`Scheduling ${meetingType} call`);
  };

  const handleTimeSlotSelect = (slot) => {
    // Mock booking confirmation
    alert(`Meeting scheduled for ${slot.date} at ${slot.time}`);
  };

  if (showCalendar) {
    return (
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">
            Select a Time Slot
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCalendar(false)}
            iconName="X"
          >
            Close
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading available times...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {availableSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => slot.available && handleTimeSlotSelect(slot)}
                  disabled={!slot.available}
                  className={`p-4 rounded-lg border text-left transition-smooth ${
                    slot.available
                      ? 'border-border hover:border-primary hover:bg-primary/5 cursor-pointer' :'border-border bg-muted/50 cursor-not-allowed opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">
                      {new Date(slot.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    {slot.available ? (
                      <Icon name="Calendar" size={16} color="var(--color-primary)" />
                    ) : (
                      <Icon name="X" size={16} color="var(--color-muted-foreground)" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{slot.time}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {slot.available ? 'Available' : 'Booked'}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={16} color="var(--color-primary)" className="mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-foreground mb-1">Meeting Details</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• All meetings are conducted via Google Meet or Zoom</li>
                    <li>• You'll receive a calendar invite with meeting details</li>
                    <li>• Please join 2-3 minutes before the scheduled time</li>
                    <li>• Rescheduling is available up to 24 hours in advance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Calendar" size={32} color="var(--color-primary)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Skip the Form - Let's Talk!
        </h2>
        <p className="text-muted-foreground">
          Sometimes a conversation is worth a thousand emails. Schedule a call with our team.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {meetingTypes.map((meeting) => (
          <div
            key={meeting.id}
            className={`relative p-4 border rounded-lg transition-smooth hover:border-primary/50 hover:bg-primary/5 ${
              meeting.popular ? 'border-primary bg-primary/5' : 'border-border'
            }`}
          >
            {meeting.popular && (
              <div className="absolute -top-2 left-4">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                meeting.popular ? 'bg-primary/20' : 'bg-muted'
              }`}>
                <Icon 
                  name={meeting.icon} 
                  size={20} 
                  color={meeting.popular ? 'var(--color-primary)' : 'var(--color-muted-foreground)'}
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">
                    {meeting.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {meeting.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {meeting.description}
                </p>
                
                <Button
                  variant={meeting.popular ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleScheduleCall(meeting.id)}
                  iconName="Calendar"
                  iconPosition="left"
                  fullWidth
                >
                  Schedule {meeting.title}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mb-2">
              <Icon name="Clock" size={16} color="var(--color-success)" />
            </div>
            <p className="text-sm font-medium text-foreground">Quick Setup</p>
            <p className="text-xs text-muted-foreground">Book in under 2 minutes</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mb-2">
              <Icon name="Users" size={16} color="var(--color-success)" />
            </div>
            <p className="text-sm font-medium text-foreground">Expert Team</p>
            <p className="text-xs text-muted-foreground">Talk to specialists</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mb-2">
              <Icon name="Shield" size={16} color="var(--color-success)" />
            </div>
            <p className="text-sm font-medium text-foreground">No Commitment</p>
            <p className="text-xs text-muted-foreground">Free consultation</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-accent/10 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Zap" size={16} color="var(--color-accent)" />
          <span className="font-medium text-accent">Limited Time Offer</span>
        </div>
        <p className="text-sm text-foreground">
          Book a strategy consultation this week and receive a complimentary project roadmap 
          worth $500 - completely free!
        </p>
      </div>
    </div>
  );
};

export default CalendlyIntegration;