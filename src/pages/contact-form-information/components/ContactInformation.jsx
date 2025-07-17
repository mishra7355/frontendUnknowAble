import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ContactInformation = () => {
  const contactDetails = [
    // {
    //   icon: "MapPin",
    //   title: "Office Address",
    //   primary: "StartupHub Pro Headquarters",
    //   secondary:
    //     "1234 Innovation Drive, Suite 500\nSan Francisco, CA 94105\nUnited States",
    //   action: "Get Directions",
    // },
    {
      icon: "Phone",
      title: "Phone Numbers",
      primary: "+91-7355105180",
      secondary: "Main Office\n\n+91-8799042424\nSales Inquiries",
      action: "Call Now",
    },
    {
      icon: "Mail",
      title: "Email Addresses",
      primary: "connect@unknowable.in",
      secondary:
        "General Inquiries\n\nam6072000@gmail.com\nSales & Partnerships\n\nconnect@unknowable.in\nCustomer Support",
      action: "Send Email",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM PST" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/company/unknowable/posts/?feedView=all",
      color: "text-blue-600",
    },

    {
      name: "Twitter",
      icon: "Twitter",
      url: "https://x.com/am6072000",
      color: "text-blue-400",
    },
    { name: "Facebook", icon: "Facebook", url: "#", color: "text-blue-700" },
    { name: "Instagram", icon: "Instagram", url: "#", color: "text-pink-600" },
    { name: "YouTube", icon: "Youtube", url: "#", color: "text-red-600" },
  ];

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Contact Information
        </h2>

        <div className="space-y-6">
          {contactDetails.map((contact, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon
                  name={contact.icon}
                  size={20}
                  color="var(--color-primary)"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground mb-1">
                  {contact.title}
                </h3>
                <p className="text-foreground font-medium mb-1">
                  {contact.primary}
                </p>
                <p className="text-sm text-muted-foreground whitespace-pre-line mb-3">
                  {contact.secondary}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  <a href="mailto:connect@unknowable.in">{contact.action}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Clock" size={20} className="mr-2" />
          Business Hours
        </h3>

        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="text-foreground font-medium">
                {schedule.day}
              </span>
              <span
                className={`text-sm ${
                  schedule.day === "Sunday"
                    ? "text-success font-medium"
                    : "text-success font-medium"
                }`}
              >
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-success/10 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-sm font-medium text-success">
              Currently Open
            </span>
          </div>
          <p className="text-xs text-success/80 mt-1">
            We're available to take your call right now!
          </p>
        </div>
      </div>

      {/* Interactive Map */}
      {/* <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Map" size={20} className="mr-2" />
          Find Us
        </h3>

        <div className="aspect-video rounded-lg overflow-hidden border border-border">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="StartupHub Pro Office Location"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=37.7749,-122.4194&z=14&output=embed"
            className="w-full h-full"
          />
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Navigation"
            iconPosition="left"
            className="flex-1"
          >
            Get Directions
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Car"
            iconPosition="left"
            className="flex-1"
          >
            Parking Info
          </Button>
        </div>
      </div> */}

      {/* Social Media */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Share2" size={20} className="mr-2" />
          Follow Us
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="flex items-center justify-center p-3 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-smooth group"
              aria-label={`Follow us on ${social.name}`}
            >
              <Icon
                name={social.icon}
                size={20}
                className={`${social.color} group-hover:scale-110 transition-transform`}
              />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-4 text-center">
          Stay updated with our latest news, insights, and company updates
        </p>
      </div>

      {/* Alternative Contact Methods */}
      {/* <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Alternative Contact Methods
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon
                name="MessageSquare"
                size={16}
                color="var(--color-primary)"
              />
            </div>
            <div>
              <p className="font-medium text-foreground">Live Chat</p>
              <p className="text-sm text-muted-foreground">Available 24/7</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Headphones" size={16} color="var(--color-primary)" />
            </div>
            <div>
              <p className="font-medium text-foreground">Support Portal</p>
              <p className="text-sm text-muted-foreground">Self-service help</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Trust Signals */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-center space-x-6 text-center">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">
              SSL Secured
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Lock" size={16} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">
              Privacy Protected
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">
              Verified Business
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
