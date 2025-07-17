import React from "react";
import Icon from "../../../components/AppIcon";

const MeetingPreparation = () => {
  const preparationSteps = [
    {
      icon: "FileText",
      title: "Prepare Your Materials",
      description:
        "Have any relevant documents, project briefs, or questions ready to share during the meeting.",
    },
    {
      icon: "Wifi",
      title: "Test Your Connection",
      description:
        "Make sure your internet is stable. Test your camera and mic before the meeting.",
    },
    {
      icon: "Clock",
      title: "Join 5 Minutes Early",
      description:
        "We recommend joining the meeting 5 minutes before the scheduled time to avoid any technical delays.",
    },
    {
      icon: "MessageSquare",
      title: "Prepare Your Questions",
      description:
        "Think about specific questions or topics you'd like to discuss to make the most of our time together.",
    },
  ];

  const policies = [
    {
      title: "Cancellation Policy",
      description:
        "Please provide at least 24 hours notice for cancellations to avoid any issues.",
      icon: "XCircle",
    },
    {
      title: "Rescheduling",
      description:
        "You can reschedule your meeting up to 2 hours before the scheduled time.",
      icon: "RotateCcw",
    },
    {
      title: "No-Show Policy",
      description:
        "If you miss your scheduled meeting without notice, no rescheduling fee apply.",
      icon: "AlertTriangle",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Preparation Guidelines */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="CheckCircle" size={20} color="var(--color-success)" />
          <h3 className="text-lg font-semibold text-foreground">
            Meeting Preparation
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          To ensure a productive meeting, please review these preparation
          guidelines:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {preparationSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name={step.icon} size={16} color="var(--color-primary)" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Policies */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Info" size={20} color="var(--color-primary)" />
          <h3 className="text-lg font-semibold text-foreground">
            Policies & Guidelines
          </h3>
        </div>

        <div className="space-y-4">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-4 border border-border rounded-lg"
            >
              <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Icon
                  name={policy.icon}
                  size={16}
                  color="var(--color-warning)"
                />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">
                  {policy.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {policy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alternative Contact */}
      <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Phone" size={20} color="var(--color-accent)" />
          <h3 className="text-lg font-semibold text-foreground">
            Need Alternative Contact?
          </h3>
        </div>
        <p className="text-muted-foreground mb-4">
          If you're experiencing issues with scheduling or need immediate
          assistance, you can reach us through:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={16} color="var(--color-accent)" />
            <div>
              <p className="font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">
                connect@unknowable.in
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={16} color="var(--color-accent)" />
            <div>
              <p className="font-medium text-foreground">Phone</p>
              <p className="text-sm text-muted-foreground">+91-7355105180</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingPreparation;
